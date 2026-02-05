# External Database Token Refresh Guide

## Issue

You're seeing this error: **"Unable to verify approval status. Please try again."**

This happens because the authentication token for the external approved retailers database has expired.

---

## Quick Fix

### Step 1: Generate New Token

1. Go to **Turso Dashboard**: https://turso.tech/app
2. Navigate to your database: `retailer-data-digitalhues`
3. Go to **Settings** → **Tokens**
4. Create a new **read-only token**
5. Copy the token

### Step 2: Update the Token

Open the file: `/Users/ankitmehta/retaileros/src/js/utils/db.js`

Find this section (around line 10-13):

```javascript
// External Approved Retailers Database (Read-only)
const approvedConfig = {
    url: "libsql://retailer-data-digitalhues.aws-ap-south-1.turso.io",
    authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9...", // OLD TOKEN
};
```

Replace the `authToken` value with your new token:

```javascript
// External Approved Retailers Database (Read-only)
const approvedConfig = {
    url: "libsql://retailer-data-digitalhues.aws-ap-south-1.turso.io",
    authToken: "YOUR_NEW_TOKEN_HERE",
};
```

### Step 3: Test the Connection

Run the diagnostic script:

```bash
node check_external_db.js
```

You should see:
```
✅ Connection successful! Total retailers: 23264
✅ Approved retailers: XXXX
✅ Found approved retailer: ...
```

### Step 4: Restart Dev Server

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

---

## Alternative: Skip External Validation (Development Only)

If you want to test the registration flow WITHOUT external database validation, you can temporarily modify the registration flow:

### Temporary Development Bypass

Edit: `/Users/ankitmehta/retaileros/src/js/modules/auth/register.js`

Find the `requestOtp` function and comment out the approval check:

```javascript
window.requestOtp = async function() {
    const mobileInput = document.getElementById('mobile-input');
    const mobile = mobileInput ? mobileInput.value.trim() : '';

    if (!mobile || mobile.length !== 10) {
        alert('Please enter a valid 10-digit mobile number');
        return;
    }

    try {
        const { db } = await import('../../utils/db.js');

        // Check if already registered
        const isRegistered = await db.retailers.isRegistered(mobile);
        if (isRegistered) {
            alert('This mobile number is already registered. Please login instead.');
            window.setAuthMode('login');
            return;
        }

        // TEMPORARY: Comment out approval check for development
        /*
        const approvedRetailer = await db.approved.checkApproval(mobile);
        if (!approvedRetailer) {
            alert('This mobile number is not approved for registration. Please contact support.');
            return;
        }
        window._approvedRetailerData = approvedRetailer;
        */

        // TEMPORARY: Use mock data for testing
        window._approvedRetailerData = {
            RetailerName: 'Test Retailer Store',
            ContactPerson: 'Test Owner',
            Email: 'test@example.com',
            MobileNumber: mobile,
            VATNnumber: '27AAAAA0000A1Z5',
            CityName: 'Mumbai',
            StateName: 'Maharashtra',
            Address_Line_1: 'Test Address',
            CountryName: 'India',
            // Add other required fields as needed...
        };

        console.log('Using mock data for testing:', mobile);

        // Move to step 2
        window.setRegistrationStep(2);

        setTimeout(() => {
            const firstInput = document.getElementById('otp-0');
            if (firstInput) firstInput.focus();
        }, 100);

    } catch (error) {
        console.error('Registration error:', error);
        alert('Registration error: ' + error.message);
    }
};
```

**⚠️ Important:** This is for development testing only. Remove this bypass before production deployment!

---

## Verifying the Fix

After updating the token, test the registration flow:

1. **Start dev server**: `npm run dev`
2. **Open**: http://localhost:5173
3. **Test with approved mobile**: `9762394014`
4. **Expected result**: Should proceed to OTP step without errors

---

## Understanding the Error

### Error Message
```
Unable to verify approval status. Please try again.
Database authentication error. External database token has expired.
```

### What Happened
- The external database uses JWT tokens for authentication
- These tokens have an expiration time (usually 30-90 days)
- When expired, any query returns HTTP 401 Unauthorized

### Why It's Read-Only
The external database token is intentionally read-only to:
- ✅ Prevent accidental data modification
- ✅ Ensure data integrity in the source system
- ✅ Follow security best practices

---

## Production Considerations

### Token Management Best Practices

1. **Environment Variables**: Store tokens in `.env` file:
   ```bash
   VITE_EXTERNAL_DB_URL=libsql://retailer-data-digitalhues...
   VITE_EXTERNAL_DB_TOKEN=eyJhbGci...
   ```

2. **Token Rotation**: Set up automatic token rotation:
   - Create new token before old one expires
   - Update deployment configuration
   - Test thoroughly before deploying

3. **Error Monitoring**: Add monitoring for 401 errors:
   ```javascript
   if (error.message.includes('401')) {
       // Alert administrators
       logError('External DB token expired', { mobile, timestamp });
   }
   ```

4. **Graceful Degradation**: Consider fallback options:
   - Queue registrations when external DB is unavailable
   - Manual approval process
   - Email notification to admin

---

## Need Help?

If you're still having issues:

1. **Check console**: Look for detailed error messages in browser console (F12)
2. **Verify database**: Ensure `retailer-data-digitalhues` exists in your Turso account
3. **Check permissions**: Ensure you have access to generate tokens
4. **Network**: Confirm you can reach turso.io from your network

---

## Summary

**Quick Fix:**
1. Generate new read-only token from Turso dashboard
2. Update `approvedConfig.authToken` in `src/js/utils/db.js`
3. Run `node check_external_db.js` to verify
4. Restart dev server

**For Testing:**
- Use the temporary development bypass (mock data)
- Remember to remove before production!

**For Production:**
- Use environment variables
- Set up token rotation
- Add monitoring and alerts
