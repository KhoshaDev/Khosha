/**
 * Disable Development Mode
 *
 * This script reverts the registration flow back to using
 * the external database for approval checks.
 *
 * Run: node disable_dev_mode.js
 */

import { readFileSync, writeFileSync } from 'fs';

const filePath = './src/js/modules/auth/register.js';

console.log('🔄 Disabling Development Mode...\n');

try {
    let content = readFileSync(filePath, 'utf8');

    // Check if in dev mode
    if (!content.includes('// DEV MODE ACTIVE')) {
        console.log('ℹ️  Development mode is not currently enabled.');
        console.log('No changes needed.\n');
        process.exit(0);
    }

    // Find and replace the dev mode section back to original
    const devModePattern = /\/\/ DEV MODE ACTIVE[\s\S]*?process_status: 'approved'\s*};/;

    const original = `        // Check approval status in external DB
        const approvedRetailer = await db.approved.checkApproval(mobile);
        if (!approvedRetailer) {
            alert('This mobile number is not approved for registration. Please contact support.');
            return;
        }

        // Store approved data temporarily for later use
        window._approvedRetailerData = approvedRetailer;`;

    if (!devModePattern.test(content)) {
        console.log('❌ Could not find dev mode code.');
        console.log('The file may have been modified. Manual update required.\n');
        process.exit(1);
    }

    content = content.replace(devModePattern, original);

    writeFileSync(filePath, content, 'utf8');

    console.log('✅ Development mode disabled successfully!\n');
    console.log('📝 Changes made:');
    console.log('   - External database approval check re-enabled');
    console.log('   - Mock data removed');
    console.log('   - Production mode restored\n');
    console.log('⚠️  Remember:');
    console.log('   - Update external DB token if expired');
    console.log('   - Test with real approved mobile numbers');
    console.log('   - Run "node check_external_db.js" to verify connection\n');
    console.log('🚀 Next steps:');
    console.log('   1. Restart dev server: npm run dev');
    console.log('   2. Test with approved mobile: 9762394014\n');

} catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
}
