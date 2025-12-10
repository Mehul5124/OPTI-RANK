# ✅ Pre-Interview Checklist

## Before Your Interview - Test Everything!

### 🔧 Setup (Do this first!)

- [ ] MongoDB is installed and running
- [ ] Backend `.env` file exists with:
  - [ ] MONGO_URI
  - [ ] JWT_SECRET  
  - [ ] PORT=5000
- [ ] Backend dependencies installed (`npm install` in backend folder)
- [ ] Backend starts without errors (`npm start`)
- [ ] You see "MongoDB connected successfully"
- [ ] You see "Server running on port 5000"

### 🎨 Frontend Pages - All Working

- [ ] **signup.html** - Opens and displays correctly
- [ ] **login.html** - Opens and displays correctly
- [ ] **index.html** - Opens and displays correctly
- [ ] **seo.html** - Opens and displays correctly
- [ ] **learn.html** - Opens and displays correctly
- [ ] **templates.html** - Opens and displays correctly
- [ ] **blog.html** - Opens and displays correctly
- [ ] **profile.html** - Opens and displays correctly

### 🔐 Authentication Flow

- [ ] Can create new account (signup)
- [ ] Redirects to dashboard after signup
- [ ] Can logout
- [ ] Can login with existing account
- [ ] Protected pages redirect to login if not authenticated
- [ ] Username appears in welcome message
- [ ] Token stored in localStorage
- [ ] Profile button appears in navigation

### 📊 Dashboard Features

- [ ] Shows 4 platforms (Website, Instagram, Facebook, YouTube)
- [ ] Time filter buttons work (1hr, 1d, 15d, 30d)
- [ ] Metrics update when clicking time filters
- [ ] Recommendations appear for each platform
- [ ] Cards display properly
- [ ] Hover effects work on platform sections

### 🔍 SEO Audit Page

- [ ] URL input field works
- [ ] Can submit form
- [ ] Shows loading state
- [ ] Displays SEO score
- [ ] Shows strengths section
- [ ] Shows issues section (if any)
- [ ] Shows recommendations
- [ ] Score has colored background
- [ ] Works with different URL types:
  - [ ] Regular website (https://example.com)
  - [ ] YouTube video
  - [ ] Instagram profile
  - [ ] Facebook page

### 📚 Learning Page

- [ ] All 12 courses display
- [ ] Search box works
- [ ] Category tabs work (All, SEO, Social Media, etc.)
- [ ] "Start Learning" button shows alert
- [ ] Free resources section displays
- [ ] Download links work (show alert)
- [ ] Filtering shows/hides correct courses
- [ ] Hover effects on cards work

### 📝 Templates Page

- [ ] All 15 templates display
- [ ] Category filtering works
- [ ] "Use Template" opens modal
- [ ] Modal displays template content
- [ ] Close button (X) works
- [ ] "Copy to Clipboard" button works
- [ ] "Download" button works (downloads .txt file)
- [ ] Click outside modal closes it
- [ ] Template tags display correctly

### 📰 Blog Page

- [ ] Featured post displays at top
- [ ] 12 blog cards display
- [ ] Search functionality works
- [ ] Category tabs filter posts
- [ ] "Load More" button appears
- [ ] "Load More" works (shows more posts)
- [ ] "Load More" hides when all shown
- [ ] Newsletter form works (shows alert)
- [ ] "Read More" buttons work
- [ ] Blog meta info displays (date, time, author)

### 👤 Profile Page

- [ ] Username displays correctly
- [ ] Email displays
- [ ] Navigation sidebar works
- [ ] All 5 sections accessible:
  - [ ] Account Settings
  - [ ] Connected Platforms
  - [ ] Preferences
  - [ ] Billing
  - [ ] Security
- [ ] Forms can be filled out
- [ ] Save buttons work (show alerts)
- [ ] Platform connect/disconnect works
- [ ] Plan selection shows alerts
- [ ] Password change validation works
- [ ] 2FA enable button works
- [ ] Delete account has double confirmation

### 🎨 Visual & UI

- [ ] All pages have consistent header/navigation
- [ ] Blue gradient theme consistent across pages
- [ ] Icons display (Font Awesome loaded)
- [ ] Buttons have hover effects
- [ ] Cards have hover animations
- [ ] Forms are styled properly
- [ ] Modals appear centered
- [ ] Colors are consistent
- [ ] Text is readable
- [ ] Spacing looks good

### 📱 Responsive Design

- [ ] Test on full screen desktop
- [ ] Test on narrower window (tablet size)
- [ ] Navigation adjusts properly
- [ ] Grids stack on mobile
- [ ] Forms are usable on mobile
- [ ] Text sizes are readable
- [ ] No horizontal scrolling

### 🔗 Navigation

- [ ] All nav links work
- [ ] Logo/title links to home
- [ ] Profile button links to profile
- [ ] Logout button works from all pages
- [ ] Back/forward browser buttons work
- [ ] Can navigate between all pages

### ⚡ JavaScript Functionality

- [ ] No console errors on any page
- [ ] LocalStorage working (check DevTools)
- [ ] Fetch calls working (check Network tab)
- [ ] Alerts display properly
- [ ] Event listeners working
- [ ] Search/filter real-time updates
- [ ] Dynamic content rendering

### 🗄️ Backend API

- [ ] GET /api/dashboard works
  - [ ] With auth token
  - [ ] Returns data for each platform
- [ ] POST /api/users/register works
  - [ ] Creates new user
  - [ ] Returns token
- [ ] POST /api/users/login works
  - [ ] Validates credentials
  - [ ] Returns token
- [ ] GET /api/user/profile works (with token)
- [ ] GET /api/seo/analyze works (with token)

### 🧪 Testing Scenarios

- [ ] **New User Journey**:
  1. Signup → Dashboard → Explore all pages → Logout
- [ ] **Returning User**:
  1. Login → Dashboard shows personalized welcome
- [ ] **SEO Analysis**:
  1. Try 3 different URLs (website, YouTube, Instagram)
- [ ] **Template Usage**:
  1. Open template → Copy → Download
- [ ] **Search Testing**:
  1. Search in Learning page
  2. Search in Blog page
  3. Both return correct results

### 📋 Code Review Ready

- [ ] Code is formatted properly
- [ ] No commented-out code
- [ ] No console.log statements (or meaningful ones only)
- [ ] Variable names are clear
- [ ] Functions have clear purposes
- [ ] Files are organized
- [ ] README is complete

### 💬 Presentation Ready

- [ ] Can explain authentication flow
- [ ] Can explain API structure
- [ ] Can explain frontend architecture
- [ ] Can explain database schema
- [ ] Know where each feature's code is
- [ ] Can discuss design choices
- [ ] Ready to demo live

### 🎯 Final Check (Morning of Interview)

- [ ] Backend running
- [ ] MongoDB running
- [ ] Test one complete user flow
- [ ] Check all pages load
- [ ] No browser console errors
- [ ] Network tab shows successful API calls
- [ ] Have backup plan (screenshots/recording)

## 🚨 If Something Breaks

### Backend won't start
1. Check MongoDB is running
2. Verify .env file
3. Run `npm install` again
4. Check no other app on port 5000

### Frontend not connecting to backend
1. Check backend is running on port 5000
2. Check CORS is enabled in server.js
3. Clear browser cache and localStorage
4. Try in incognito mode

### Authentication not working
1. Clear localStorage
2. Create new user account
3. Check JWT_SECRET in .env
4. Verify token is being sent in headers

### Page not displaying correctly
1. Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
2. Clear cache
3. Check CSS file is linked
4. Check JavaScript file is linked

## 📞 Emergency Backup

If demo fails:
1. Have screenshots of all pages ready
2. Have code open in VS Code to show
3. Can explain what it does even if not running
4. Video recording as last resort

---

## ✅ You're Ready When:
- [ ] All items above checked
- [ ] Can complete full user flow in under 2 minutes
- [ ] No errors in console
- [ ] Confident explaining any feature
- [ ] Backend and frontend both running

**Good luck! You've got this! 🚀**
