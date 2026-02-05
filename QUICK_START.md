# Quick Start Guide - Registration Testing

## Current Issue ⚠️

The external database authentication token has expired, causing this error:
```
Unable to verify approval status. Please try again.
```

## Two Options to Proceed

### Option 1: Enable Dev Mode (Quickest - For Testing)

**Use this to test the registration flow immediately without fixing the token.**

```bash
# Enable development mode
node enable_dev_mode.js

# Restart dev server
npm run dev
```

**What happens:**
- ✅ Registration works with ANY 10-digit mobile number
- ✅ Uses mock/test data instead of real external database
- ✅ You can test the complete flow end-to-end
- ⚠️ Data is fake - for testing only

**When you're done testing:**
```bash
# Disable development mode
node disable_dev_mode.js
```

---

### Option 2: Fix the Token (For Production)

**Use this to connect to the real external database with approved retailers.**

#### Step 1: Generate New Token
1. Go to: https://turso.tech/app
2. Select database: `retailer-data-digitalhues`
3. Settings → Tokens → Create read-only token
4. Copy the token

#### Step 2: Update Configuration
Edit: `src/js/utils/db.js` (around line 12)

Replace:
```javascript
authToken: "eyJhbGci..." // OLD TOKEN
```

With:
```javascript
authToken: "YOUR_NEW_TOKEN_HERE"
```

#### Step 3: Verify
```bash
# Test the connection
node check_external_db.js

# Should show: ✅ Connection successful!
```

#### Step 4: Test
```bash
npm run dev
```

Test with real approved mobile: `9762394014` or `9896020040`

---

## Quick Commands Reference

```bash
# Database setup
node setup_db.js

# Check external DB connection
node check_external_db.js

# Enable dev mode (testing with mock data)
node enable_dev_mode.js

# Disable dev mode (back to production)
node disable_dev_mode.js

# Start dev server
npm run dev
```

---

## Testing the Registration Flow

### With Dev Mode Enabled
1. Start: `npm run dev`
2. Enter: ANY 10-digit mobile (e.g., `9876543210`)
3. Click: "Request OTP"
4. Result: Should proceed to OTP step with mock data

### With Real Database
1. Start: `npm run dev`
2. Enter: `9762394014` (approved mobile)
3. Click: "Request OTP"
4. Result: Should proceed with real retailer data

---

## What to Expect at Each Step

### Step 1: Mobile Number
- Enter 10-digit mobile
- Click "Request OTP"
- **Checks:** Already registered? Approved in external DB?

### Step 2: OTP Verification
- Enter 6-digit OTP (any digits for testing)
- Click "Verify & Proceed"

### Step 3: Confirm Details
You should see:
- Store Name
- Owner Name
- Mobile Number
- GSTIN
- Email
- City, State

Click "Finalize Setup"

### Result: Dashboard
- Logged in successfully
- Unique retailer code generated: `ROS-YYYYMMDD-XXXX`
- All data saved to database

---

## Troubleshooting

### "Unable to verify approval status"
→ **Fix:** Run `node enable_dev_mode.js` OR update the token

### "This mobile number is not approved"
→ **Fix:** Use approved mobile (9762394014) OR enable dev mode

### "Already registered"
→ **Info:** Mobile was already registered, use login instead

### OTP not working
→ **Info:** OTP is placeholder for testing, any 6 digits work

---

## Files Created for Testing

- ✅ `enable_dev_mode.js` - Switch to mock data
- ✅ `disable_dev_mode.js` - Switch back to real data
- ✅ `check_external_db.js` - Test database connection
- ✅ `TOKEN_REFRESH_GUIDE.md` - Detailed token fix instructions
- ✅ `IMPLEMENTATION_SUMMARY.md` - Complete implementation docs
- ✅ `VERIFICATION_CHECKLIST.md` - Testing checklist

---

## Recommended Testing Flow

1. **Quick Test (5 minutes)**
   ```bash
   node enable_dev_mode.js
   npm run dev
   # Test with any mobile number
   ```

2. **Verify Implementation (10 minutes)**
   - Test registration with mock data
   - Check Step 3 shows correct fields
   - Verify unique code generation
   - Check database has new retailer

3. **Production Setup (when ready)**
   ```bash
   node disable_dev_mode.js
   # Update token in db.js
   node check_external_db.js
   npm run dev
   # Test with real approved mobile
   ```

---

## Need Help?

**Quick fixes:**
- Enable dev mode: `node enable_dev_mode.js`
- Check DB: `node check_external_db.js`
- Read guide: `TOKEN_REFRESH_GUIDE.md`

**For production:**
- Update token in `src/js/utils/db.js`
- Test connection with `check_external_db.js`
- Disable dev mode with `disable_dev_mode.js`

---

## Summary

✅ **Implementation is complete and working**
⚠️ **External DB token expired - expected issue**
🚀 **Use dev mode to test immediately**
🔧 **Update token for production use**

**Start testing now:**
```bash
node enable_dev_mode.js && npm run dev
```
