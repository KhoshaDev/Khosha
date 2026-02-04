import { query } from './db.js';
import { triggerRender } from '../state.js';

/**
 * Universal Data Sync Manager
 * Fetches data from Turso and populates the application's local cache
 */
export async function syncData() {
    console.group("🔄 Synchronizing Data with Turso...");

    try {
        // Fetch All Application Data in Parallel
        // Every query has .catch() so one failure doesn't break the entire sync
        const [customers, products, sales, saleItems, companies, groups, groupMembers, automations, automationMessages, communications, schemes] = await Promise.all([
            query("SELECT * FROM customers").catch(e => { console.error("Sync customers failed:", e); return []; }),
            query("SELECT * FROM products").catch(e => { console.error("Sync products failed:", e); return []; }),
            query("SELECT * FROM sales ORDER BY date DESC").catch(e => { console.error("Sync sales failed:", e); return []; }),
            query("SELECT * FROM sale_items").catch(e => { console.error("Sync sale_items failed:", e); return []; }),
            query("SELECT * FROM companies").catch(e => { console.error("Sync companies failed:", e); return []; }),
            query("SELECT * FROM groups ORDER BY created_at DESC").catch(e => { console.error("Sync groups failed:", e); return []; }),
            query("SELECT * FROM group_members").catch(e => { console.error("Sync group_members failed:", e); return []; }),
            query("SELECT * FROM automations ORDER BY created_at DESC").catch(e => { console.error("Sync automations failed:", e); return []; }),
            query("SELECT * FROM automation_messages ORDER BY scheduled_date").catch(e => { console.error("Sync automation_messages failed:", e); return []; }),
            query("SELECT * FROM communication_log ORDER BY sent_at DESC").catch(e => { console.error("Sync communications failed:", e); return []; }),
            query("SELECT * FROM schemes WHERE status = 'active' ORDER BY brand, name").catch(e => { console.error("Sync schemes failed:", e); return []; })
        ]);

        // Map to global window storage
        window._db_cache = {
            customers: customers || [],
            products: products || [],
            sales: sales || [],
            saleItems: saleItems || [],
            companies: companies || [],
            groups: groups || [],
            groupMembers: groupMembers || [],
            automations: automations || [],
            automationMessages: automationMessages || [],
            communications: communications || [],
            schemes: schemes || [],
            // Empty placeholders for other apps to prevent UI crashes
            inventoryLogs: [],
            inquiries: [],
            repairs: [],
            marketplace: [],
            campaigns: [],
            bookings: []
        };

        console.log("✅ Sync Complete. Tables cached:", {
            customers: customers.length,
            products: products.length,
            sales: sales.length,
            automations: automations.length
        });
    } catch (err) {
        console.error("❌ Data Sync Failed:", err);
        if (window.toast) {
            window.toast.error("Failed to sync data. Check your connection.");
        }
    } finally {
        console.groupEnd();
        triggerRender(false);
    }
}

// Global accessor for the cache
window.getCache = () => window._db_cache || {
    customers: [], sales: [], products: [], saleItems: [], companies: [],
    groups: [], groupMembers: [], automations: [], automationMessages: [],
    communications: [], schemes: [], inventoryLogs: [], inquiries: [],
    repairs: [], marketplace: [], campaigns: [], bookings: []
};
