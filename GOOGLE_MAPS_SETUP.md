# Google Maps API Setup Guide

## Steps to fix the Google Maps errors:

### 1. Get a Google Maps API Key

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the "Maps JavaScript API"
4. Go to "Credentials" and create a new API key
5. (Optional) Restrict the API key to your domain for security

### 2. Replace the placeholder in your project

1. Open `public/index.html`
2. Find this line:
   ```html
   <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=marker&callback=initMap"></script>
   ```
3. Replace `YOUR_GOOGLE_MAPS_API_KEY` with your actual API key

### 3. Enable required APIs

In the Google Cloud Console, make sure these APIs are enabled:
- Maps JavaScript API
- Geocoding API (if you plan to use geocoding)
- Places API (if you plan to use places features)

### 4. Error Messages Explained

- **"InvalidKeyMapError"**: The API key is invalid or missing
- **"AdvancedMarkerElement" error**: Fixed by using regular Marker instead
- **Loading performance warning**: Fixed by adding `async defer` attributes

### 5. Current Status

✅ **Fixed Issues:**
- Replaced `AdvancedMarkerElement` with regular `Marker` for better compatibility
- Added proper error handling when Google Maps API is not loaded
- Added async loading with callback
- Created fallback UI with instructions when API key is missing

✅ **What works now:**
- Application compiles without errors
- Maps page shows helpful instructions when API key is missing
- Maps will work properly once you add a valid API key

### 6. Testing

1. Add your API key to `public/index.html`
2. Restart the development server
3. Navigate to the Maps page
4. You should see a styled map with a marker

### 7. Cost Information

- Google Maps API has a generous free tier
- First $200 of usage per month is free
- Most development/testing usage stays within free limits
