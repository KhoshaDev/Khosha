import { createClient } from "@libsql/client";

// Database Configuration
// Note: In a production environment, these should be env variables
const config = {
    url: "libsql://retailer-os-digitalhues.aws-ap-south-1.turso.io",
    authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NzAxODY2NzMsImlkIjoiNDcwMDliODAtYmJlYS00YzQ3LTk1MzQtY2NlYjg4OWUzYjFjIiwicmlkIjoiNTk1ODMwNWEtMjlkNy00OGU5LWJkNTctN2FiZWVjNzVjMWYwIn0.381aJkYkBtcCsSDyQkFNLZud9lOPi9TuT3uRZgLYS9BqrjLFb0Zc7P1qRWN0k16XkHQ7raDwhCUE9H1G8Q80BA",
};

// Initialize the Turso client
const client = createClient(config);

/**
 * Universal query handler
 */
export async function query(sql, params = []) {
    try {
        const result = await client.execute({ sql, args: params });
        return result.rows;
    } catch (err) {
        console.error("DB Query Error:", err.message, "SQL:", sql, "Params:", params);
        throw err;
    }
}

/**
 * Transaction handler
 */
export async function transaction(statements) {
    try {
        const result = await client.batch(statements);
        return result;
    } catch (err) {
        console.error("DB Transaction Error:", err);
        throw err;
    }
}

// Module specific helpers
export const db = {
    clients: {
        getAll: () => query("SELECT * FROM customers"),
        add: (c) => query(
            "INSERT INTO customers (id, name, phone, email, joined_at, dob, location) VALUES (?, ?, ?, ?, ?, ?, ?)",
            [c.id, c.name, c.phone || '', c.email || '', new Date().toISOString(), c.dob || null, c.location || '']
        ),
        getById: (id) => query("SELECT * FROM customers WHERE id = ?", [id])
    },
    companies: {
        getAll: () => query("SELECT * FROM companies"),
        add: (c) => query(
            "INSERT INTO companies (id, name, gst_number, customer_id, created_at) VALUES (?, ?, ?, ?, ?)",
            [c.id, c.name, c.gst_number, c.customer_id, new Date().toISOString()]
        ),
        getByCustomerId: (customerId) => query("SELECT * FROM companies WHERE customer_id = ?", [customerId]),
        getById: (id) => query("SELECT * FROM companies WHERE id = ?", [id])
    },
    sales: {
        getAll: () => query("SELECT * FROM sales ORDER BY date DESC"),
        getById: (id) => query("SELECT * FROM sales WHERE id = ?", [id]),
        getDrafts: () => query("SELECT * FROM sales WHERE status = 'draft' ORDER BY date DESC"),
        add: (s) => query(
            `INSERT INTO sales (id, customer_id, customer_name, date, total_amount, status, payment_mode, payment_reference, gst_required, company_id, installation_required, installation_date) 
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [s.id, s.customer_id, s.customer_name, s.date, s.total_amount, s.status || 'completed', 
             s.payment_mode || null, s.payment_reference || null, s.gst_required || 0, s.company_id || null,
             s.installation_required || 0, s.installation_date || null]
        ),
        update: (s) => query(
            `UPDATE sales SET customer_id = ?, customer_name = ?, total_amount = ?, status = ?, 
             payment_mode = ?, payment_reference = ?, gst_required = ?, company_id = ?, 
             installation_required = ?, installation_date = ? WHERE id = ?`,
            [s.customer_id, s.customer_name, s.total_amount, s.status,
             s.payment_mode || null, s.payment_reference || null, s.gst_required || 0, s.company_id || null,
             s.installation_required || 0, s.installation_date || null, s.id]
        ),
        delete: (id) => query("DELETE FROM sales WHERE id = ?", [id]),
        addItem: (i) => query(
            `INSERT INTO sale_items (id, sale_id, product_id, product_name, category, quantity, price, discount_type, discount_value, discount_amount, scheme_id, final_price, imei, serial_number, mac_id, manufacturing_date, installation_date, extra_fields) 
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [i.id, i.sale_id, i.product_id, i.product_name, i.category, i.quantity, i.price, 
             i.discount_type || null, i.discount_value || null, i.discount_amount || null, i.scheme_id || null, i.final_price || i.price,
             i.imei || null, i.serial_number || null, i.mac_id || null, i.manufacturing_date || null, i.installation_date || null, i.extra_fields || null]
        ),
        deleteItems: (saleId) => query("DELETE FROM sale_items WHERE sale_id = ?", [saleId]),
        getItems: (saleId) => query("SELECT * FROM sale_items WHERE sale_id = ?", [saleId])
    },
    inventory: {
        getProducts: () => query("SELECT * FROM products")
    },
    schemes: {
        getAll: () => query("SELECT * FROM schemes WHERE status = 'active' ORDER BY brand, name"),
        getById: (id) => query("SELECT * FROM schemes WHERE id = ?", [id]),
        getByBrand: (brand) => query("SELECT * FROM schemes WHERE brand = ? AND status = 'active'", [brand]),
        getByCategory: (category) => query("SELECT * FROM schemes WHERE category = ? AND status = 'active'", [category]),
        getApplicable: (brand, category, price) => query(
            `SELECT * FROM schemes WHERE status = 'active' 
             AND (brand = ? OR brand IS NULL) 
             AND (category = ? OR category IS NULL)
             AND (min_price IS NULL OR min_price <= ?)
             AND (max_price IS NULL OR max_price >= ?)
             AND date(start_date) <= date('now') AND date(end_date) >= date('now')`,
            [brand, category, price, price]
        )
    },
    groups: {
        getAll: () => query("SELECT * FROM groups ORDER BY created_at DESC"),
        add: (g) => query(
            `INSERT INTO groups (id, name, description, is_company, gst_number, contact_person, created_at) 
             VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [g.id, g.name, g.description || null, g.is_company || 0, g.gst_number || null, g.contact_person || null, g.created_at]
        ),
        getById: (id) => query("SELECT * FROM groups WHERE id = ?", [id]),
        delete: (id) => query("DELETE FROM groups WHERE id = ?", [id]),
        // Group members
        getMembers: (groupId) => query("SELECT * FROM group_members WHERE group_id = ?", [groupId]),
        getAllMembers: () => query("SELECT * FROM group_members"),
        addMember: (m) => query(
            "INSERT INTO group_members (id, group_id, customer_id, added_at) VALUES (?, ?, ?, ?)",
            [m.id, m.group_id, m.customer_id, m.added_at]
        ),
        removeMember: (groupId, customerId) => query(
            "DELETE FROM group_members WHERE group_id = ? AND customer_id = ?",
            [groupId, customerId]
        ),
        deleteMembers: (groupId) => query("DELETE FROM group_members WHERE group_id = ?", [groupId])
    },
    automations: {
        getAll: () => query("SELECT * FROM automations ORDER BY created_at DESC"),
        getById: (id) => query("SELECT * FROM automations WHERE id = ?", [id]),
        getByCustomer: (customerId) => query("SELECT * FROM automations WHERE customer_id = ? ORDER BY created_at DESC", [customerId]),
        getBySale: (saleId) => query("SELECT * FROM automations WHERE sale_id = ?", [saleId]),
        add: (a) => query(
            `INSERT INTO automations (id, name, customer_id, customer_name, sale_id, status, created_at) 
             VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [a.id, a.name, a.customer_id, a.customer_name, a.sale_id || null, a.status || 'active', a.created_at || new Date().toISOString()]
        ),
        update: (id, updates) => query(
            `UPDATE automations SET status = ?, completed_at = ? WHERE id = ?`,
            [updates.status, updates.completed_at || null, id]
        ),
        delete: (id) => query("DELETE FROM automations WHERE id = ?", [id]),
        // Automation messages
        getMessages: (automationId) => query("SELECT * FROM automation_messages WHERE automation_id = ? ORDER BY day_offset", [automationId]),
        getAllMessages: () => query("SELECT * FROM automation_messages ORDER BY scheduled_date"),
        addMessage: (m) => query(
            `INSERT INTO automation_messages (id, automation_id, message_type, title, content, day_offset, scheduled_date, status) 
             VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [m.id, m.automation_id, m.message_type, m.title, m.content, m.day_offset, m.scheduled_date, m.status || 'pending']
        ),
        updateMessageStatus: (id, status, sentAt) => query(
            `UPDATE automation_messages SET status = ?, sent_at = ? WHERE id = ?`,
            [status, sentAt, id]
        ),
        deleteMessages: (automationId) => query("DELETE FROM automation_messages WHERE automation_id = ?", [automationId])
    },
    communications: {
        getAll: () => query("SELECT * FROM communication_log ORDER BY sent_at DESC"),
        getByCustomer: (customerId) => query("SELECT * FROM communication_log WHERE customer_id = ? ORDER BY sent_at DESC", [customerId]),
        add: (c) => query(
            `INSERT INTO communication_log (id, customer_id, type, direction, content, sent_at, automation_id, sale_id, status) 
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [c.id, c.customer_id, c.type, c.direction || 'outgoing', c.content, c.sent_at || new Date().toISOString(), 
             c.automation_id || null, c.sale_id || null, c.status || 'sent']
        ),
        updateStatus: (id, status) => query("UPDATE communication_log SET status = ? WHERE id = ?", [status, id])
    }
};
