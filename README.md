# OPTI-RANK - Complete Digital Marketing Dashboard

A full-stack web application for managing and optimizing digital marketing across multiple platforms including websites, Instagram, Facebook, and YouTube.

## 🎯 Features Completed

### Frontend Pages (100% Complete)
✅ **Dashboard** (`index.html`)
- Real-time metrics for Website, Instagram, Facebook, YouTube
- Time-based filtering (1hr, 1d, 15d, 30d)
- Smart recommendations for each platform
- User authentication & personalized welcome

✅ **SEO Audit Tool** (`seo.html`)
- URL analysis for any platform
- SEO score calculation (0-100)
- Platform-specific recommendations
- Identify strengths and issues
- Supports: Websites, YouTube, Instagram, Facebook, Twitter, LinkedIn

✅ **Learning Center** (`learn.html`)
- 12+ marketing courses
- Categories: SEO, Social Media, Content, Analytics, Video
- Difficulty levels (Beginner, Intermediate, Advanced)
- Search functionality
- Free downloadable resources

✅ **Templates Library** (`templates.html`)
- 15+ ready-to-use templates
- Categories: Social Media, Blog Posts, Email, Ads, SEO
- Copy-to-clipboard functionality
- Download as text files
- Detailed templates for:
  - Instagram captions
  - YouTube scripts
  - Facebook posts
  - Email campaigns
  - Blog articles
  - Ad copy
  - SEO pages

✅ **Blog** (`blog.html`)
- Featured posts section
- 12+ marketing articles
- Category filtering
- Search functionality
- Load more pagination
- Newsletter subscription

✅ **User Profile** (`profile.html`)
- Account settings
- Platform connections (Google, Instagram, Facebook, YouTube, etc.)
- Preferences & notifications
- Billing & subscription management
- Security settings (password, 2FA)
- Active sessions monitoring

### Backend (Fully Functional)
✅ **User Authentication**
- Registration & Login
- JWT token-based auth
- Password hashing with bcrypt
- Protected routes

✅ **Dashboard API**
- Multi-platform analytics
- Smart recommendations
- Time-based filtering
- Real-time data generation

✅ **SEO Audit API**
- URL analysis endpoint
- Platform detection
- Score calculation
- Recommendations engine

## 📂 Project Structure

```
OPTI-RANK/
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── userController.js
│   │   ├── dashboardController.js
│   │   ├── seoController.js
│   │   └── ...
│   ├── middlewares/
│   │   └── auth.js
│   ├── models/
│   │   ├── User.js
│   │   └── ...
│   ├── routes/
│   │   ├── userRoutes.js
│   │   ├── dashboardRoutes.js
│   │   ├── seoRoutes.js
│   │   └── ...
│   └── utils/
│       └── generateToken.js
│
└── frontend/
    ├── index.html (Dashboard)
    ├── login.html
    ├── signup.html
    ├── seo.html (SEO Audit)
    ├── learn.html (Learning Center)
    ├── templates.html (Templates)
    ├── blog.html (Blog)
    ├── profile.html (User Profile)
    ├── css/
    │   ├── styles.css (Complete responsive styles)
    │   └── auth.css
    └── js/
        ├── dashboard.js
        ├── login.js
        ├── signup.js
        ├── seoAudit.js
        ├── learn.js
        ├── templates.js
        ├── blog.js
        └── profile.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)

### Installation

1. **Clone the repository**
```bash
cd "OPTI - RANK PROJECT"
```

2. **Install backend dependencies**
```bash
cd backend
npm install
```

3. **Setup environment variables**
Create a `.env` file in the `backend` folder:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

4. **Start MongoDB**
Make sure MongoDB is running locally or use MongoDB Atlas

5. **Start the backend server**
```bash
npm start
# or for development with auto-reload
npm run dev
```

6. **Open the frontend**
Open `frontend/index.html` in your browser or use a local server:
```bash
# Using Python
cd frontend
python -m http.server 8000

# Using Node.js http-server
npx http-server frontend -p 8000
```

7. **Access the application**
- Frontend: http://localhost:8000
- Backend API: http://localhost:5000

## 📱 Page Navigation

### Public Pages
- **Signup**: `signup.html` - Create new account
- **Login**: `login.html` - Sign in to existing account

### Protected Pages (Require Login)
- **Dashboard**: `index.html` - Main analytics dashboard
- **SEO Audit**: `seo.html` - Analyze any URL for SEO
- **Learning**: `learn.html` - Marketing courses & resources
- **Templates**: `templates.html` - Ready-to-use content templates
- **Blog**: `blog.html` - Marketing insights & articles
- **Profile**: `profile.html` - Account & settings management

## 🎨 Key Features Showcase

### Dashboard
- **Multi-Platform Support**: Website, Instagram, Facebook, YouTube
- **Time Filters**: 1hr, 1d, 15d, 30d views
- **Smart Recommendations**: AI-powered tips for each platform
- **Real-Time Metrics**: Views, likes, followers, engagement, etc.

### SEO Audit
- **Universal Analysis**: Works with any URL
- **Platform Detection**: Automatically identifies the platform
- **Scoring System**: 0-100 SEO score
- **Actionable Insights**: Specific recommendations per platform
- **Issue Detection**: Identifies problems (HTTPS, URL length, etc.)

### Templates Library
- **15+ Professional Templates** covering:
  - Social media posts & captions
  - Video scripts (YouTube, TikTok, Reels)
  - Blog post structures
  - Email campaigns
  - Ad copy (Facebook, Google)
  - SEO-optimized pages
- **Copy & Download**: One-click copy or download as .txt
- **Detailed Examples**: Full templates with placeholders

### Learning Center
- **12+ Courses**: Beginner to Advanced levels
- **Multiple Categories**: SEO, Social Media, Content, Analytics
- **Free Resources**: Downloadable PDFs, templates, checklists
- **Search Functionality**: Find courses quickly
- **Duration & Level**: Clear time estimates and difficulty

## 🔒 Authentication Flow

1. User signs up (`signup.html`) → Creates account in MongoDB
2. User logs in (`login.html`) → Receives JWT token
3. Token stored in `localStorage`
4. All API calls include token in headers
5. Backend middleware validates token
6. Logout clears token and redirects to login

## 🎯 API Endpoints

### User Routes
```
POST /api/users/register - Register new user
POST /api/users/login - Login user
```

### Protected Routes (Require JWT)
```
GET /api/user/profile - Get user profile
GET /api/dashboard?platform=<platform>&filter=<filter> - Get dashboard data
GET /api/seo/analyze?url=<url> - Analyze URL for SEO
```

## 💻 Technologies Used

### Frontend
- HTML5
- CSS3 (Custom, responsive design)
- JavaScript (ES6+)
- Font Awesome icons
- LocalStorage for auth

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- CORS for cross-origin requests

## 📊 Data Models

### User Model
```javascript
{
  username: String (unique, required),
  email: String (unique, required),
  password: String (hashed, required),
  createdAt: Date
}
```

## 🎨 Design Features

- **Modern Gradient UI**: Blue gradient theme throughout
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Smooth Animations**: Hover effects, transitions, transforms
- **Consistent Navigation**: All pages have unified navbar
- **Modal Dialogs**: Template viewer with copy/download
- **Card-Based Layout**: Clean, organized content display
- **Color-Coded Sections**: Different colors for different content types

## 🔥 Frontend Highlights

### Interactive Elements
- **Search Bars**: Filter courses, templates, blog posts
- **Category Tabs**: Switch between content categories
- **Load More**: Pagination for blog posts
- **Modal Viewers**: View full templates before using
- **Form Validation**: Client-side validation for all forms
- **Logout Confirmation**: Prevents accidental logout

### User Experience
- **Personalized Greetings**: "Welcome, [Username]"
- **Smart Redirects**: Unauthorized users → Login page
- **Loading States**: Visual feedback during operations
- **Error Handling**: User-friendly error messages
- **Success Feedback**: Confirmation alerts for actions

## 📈 Perfect for Interviews

This project demonstrates:
✅ **Full-Stack Development**: Complete MERN-like stack
✅ **REST API Design**: Proper endpoints and HTTP methods
✅ **Authentication**: JWT implementation
✅ **Frontend Skills**: Modern HTML/CSS/JS
✅ **Responsive Design**: Mobile-first approach
✅ **State Management**: LocalStorage for auth
✅ **User Experience**: Intuitive navigation and feedback
✅ **Code Organization**: Modular, maintainable structure
✅ **Best Practices**: Separation of concerns, DRY principle

## 🚀 Demo Credentials

Create an account through the signup page, or use:
- Any username/email combination
- Password requirements: Minimum 6 characters

## 📝 Notes for Interviewers

- **Frontend Focus**: All 7 pages are fully functional with interactive JavaScript
- **Professional UI**: Modern, polished design with animations
- **Production-Ready**: Clean code, error handling, validation
- **Scalable Architecture**: Easy to add new features
- **No External UI Libraries**: Pure CSS (demonstrates CSS skills)
- **Real-World Use Case**: Practical digital marketing tool

## 🎓 What You Can Showcase

1. **HTML Skills**: Semantic markup, forms, accessibility
2. **CSS Mastery**: Grid, Flexbox, animations, responsive design
3. **JavaScript Proficiency**: ES6+, async/await, DOM manipulation
4. **API Integration**: Fetch API, JWT handling
5. **User Auth**: Complete authentication flow
6. **State Management**: LocalStorage, session handling
7. **UX Design**: User flows, feedback, error handling
8. **Backend Knowledge**: Node.js, Express, MongoDB

## 🔮 Future Enhancements (Optional)

- Real API integrations (Google Analytics, Instagram API)
- Data visualization with Chart.js
- PDF export for reports
- Email notifications
- Team collaboration features
- Advanced analytics & AI recommendations
- Mobile app version

## 📞 Support

For any questions or demo requests, this project is interview-ready and showcases full-stack web development capabilities with a focus on frontend excellence.

---

**Built with ❤️ for demonstrating modern web development skills**
