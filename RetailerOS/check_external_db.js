import { createClient } from "@libsql/client";

// Test the external database connection
const approvedClient = createClient({
    url: "libsql://retailer-data-digitalhues.aws-ap-south-1.turso.io",
    authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NzAyODMwNTgsImlkIjoiZTVmNzQ5MjMtMDFiMi00YzkxLTlmMjEtZTJhZDIxMzBmMmZmIiwicmlkIjoiZjQzNTc5NTMtN2E2OS00M2UzLWE3MWUtNDcyYzk1MWM1NTRiIn0.8dOIX1XeNnJswuRGhacgPypg_h_9_-bRAwBxtKhBX7rJ4bQuEtSz9Z6igZsvGrWxDlsYlHMo4V3KKIuIZRSuBA",
});

async function testConnection() {
    console.log("Testing external database connection...\n");

    try {
        // Test 1: Simple query to check connection
        console.log("1️⃣ Testing basic connection...");
        const result = await approvedClient.execute("SELECT COUNT(*) as count FROM retailers");
        console.log(`✅ Connection successful! Total retailers: ${result.rows[0].count}\n`);

        // Test 2: Check approved retailers count
        console.log("2️⃣ Checking approved retailers...");
        const approvedResult = await approvedClient.execute({
            sql: "SELECT COUNT(*) as count FROM retailers WHERE process_status = 'approved' AND Approval_Status = 'Approved'",
            args: []
        });
        console.log(`✅ Approved retailers: ${approvedResult.rows[0].count}\n`);

        // Test 3: Try fetching a specific mobile
        console.log("3️⃣ Testing approval check for mobile: 9762394014...");
        const sql = `
            SELECT RetailerName, ContactPerson, Email, MobileNumber, VATNnumber, CityName, StateName
            FROM retailers
            WHERE MobileNumber = ?
            AND process_status = 'approved'
            AND Approval_Status = 'Approved'
            LIMIT 1
        `;
        const retailerResult = await approvedClient.execute({
            sql,
            args: ["9762394014"]
        });

        if (retailerResult.rows.length > 0) {
            const r = retailerResult.rows[0];
            console.log(`✅ Found approved retailer:`);
            console.log(`   Name: ${r.RetailerName}`);
            console.log(`   Contact: ${r.ContactPerson}`);
            console.log(`   Mobile: ${r.MobileNumber}`);
            console.log(`   Email: ${r.Email}`);
            console.log(`   Location: ${r.CityName}, ${r.StateName}`);
            console.log(`   GST: ${r.VATNnumber}\n`);
        } else {
            console.log(`⚠️  No approved retailer found for this mobile\n`);
        }

        console.log("✨ All checks passed! External database is working correctly.\n");

    } catch (error) {
        console.error("❌ Connection failed!");
        console.error("Error:", error.message);
        console.error("\nPossible issues:");
        console.error("1. Authentication token has expired");
        console.error("2. Database URL is incorrect");
        console.error("3. Network connectivity issue");
        console.error("\nTo fix:");
        console.error("- Generate a new read-only token from Turso dashboard");
        console.error("- Update the token in src/js/utils/db.js");
    }
}

testConnection();
