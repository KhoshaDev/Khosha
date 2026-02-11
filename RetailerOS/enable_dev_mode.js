/**
 * Development Mode Setup
 *
 * This script modifies the registration flow to use mock data
 * instead of the external database for testing purposes.
 *
 * Run: node enable_dev_mode.js
 *
 * WARNING: This is for development only!
 * Revert before production deployment.
 */

import { readFileSync, writeFileSync } from 'fs';

const filePath = './src/js/modules/auth/register.js';

console.log('🔧 Enabling Development Mode...\n');

try {
    let content = readFileSync(filePath, 'utf8');

    // Check if already in dev mode
    if (content.includes('// DEV MODE ACTIVE')) {
        console.log('⚠️  Development mode is already enabled!');
        console.log('Run: node disable_dev_mode.js to revert\n');
        process.exit(0);
    }

    // Find and replace the approval check section
    const original = `        // Check approval status in external DB
        const approvedRetailer = await db.approved.checkApproval(mobile);
        if (!approvedRetailer) {
            alert('This mobile number is not approved for registration. Please contact support.');
            return;
        }

        // Store approved data temporarily for later use
        window._approvedRetailerData = approvedRetailer;`;

    const devMode = `        // DEV MODE ACTIVE - Using mock data instead of external DB
        // ORIGINAL CODE (commented out for development):
        /*
        const approvedRetailer = await db.approved.checkApproval(mobile);
        if (!approvedRetailer) {
            alert('This mobile number is not approved for registration. Please contact support.');
            return;
        }
        window._approvedRetailerData = approvedRetailer;
        */

        // MOCK DATA for testing
        console.log('⚠️ DEV MODE: Using mock retailer data');
        window._approvedRetailerData = {
            id: 999999,
            RetailerName: 'Dev Test Store',
            ContactPerson: 'Test Owner Name',
            Email: 'test@devstore.com',
            MobileNumber: mobile,
            PhoneNumber: mobile,
            VATNnumber: '27AAAAA0000A1Z5',
            PAN_Number: 'ABCDE1234F',
            CityName: 'Mumbai',
            StateName: 'Maharashtra',
            DistrictName: 'Mumbai Suburban',
            AreaName: 'Andheri',
            CountryName: 'India',
            Address_Line_1: '123 Test Street',
            Address_Line_2: 'Test Building',
            PinCode: '400001',
            Name_of_Bank: 'Test Bank',
            Name_of_Bank_Account_Holder: 'Test Owner',
            Bank_Account_Number: '1234567890',
            Branch_Location: 'Mumbai Branch',
            IFSC_Code: 'TEST0001234',
            ParentRetailerName: 'Parent Store',
            NDName: 'National Distributor',
            RDSName: 'Regional Distributor',
            SalesmanName: 'Sales Person',
            Reporting_To_Name: 'Manager Name',
            CSA_on_Counter: '2',
            Counter_Potential_in_Volume: '1000',
            Counter_Potential_in_Value: '500000',
            Retailer_Category: 'Premium',
            RETAILER_CATEGORY1: 'Electronics',
            RETAILER_CLASSIFICATION: 'A',
            DOB: '1990-01-01',
            Creation_Date: new Date().toISOString(),
            ApprovalRemarks: 'Dev mode - auto approved',
            Approval_Status: 'Approved',
            process_status: 'approved'
        };`;

    if (!content.includes(original)) {
        console.log('❌ Could not find the approval check code.');
        console.log('The file may have been modified. Manual update required.\n');
        process.exit(1);
    }

    content = content.replace(original, devMode);

    writeFileSync(filePath, content, 'utf8');

    console.log('✅ Development mode enabled successfully!\n');
    console.log('📝 Changes made:');
    console.log('   - External database approval check disabled');
    console.log('   - Mock retailer data will be used for all registrations');
    console.log('   - You can now test the registration flow offline\n');
    console.log('⚠️  IMPORTANT:');
    console.log('   - This is for development/testing ONLY');
    console.log('   - Run "node disable_dev_mode.js" before production');
    console.log('   - All registrations will use fake data\n');
    console.log('🚀 Next steps:');
    console.log('   1. Restart dev server: npm run dev');
    console.log('   2. Test registration with any 10-digit mobile');
    console.log('   3. Check that mock data appears in Step 3\n');

} catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
}
