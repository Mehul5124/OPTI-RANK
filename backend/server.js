const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB(); // Connect to MongoDB

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Import and use the userroute
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

const protectedUserRoutes = require('./routes/protecteduserRoutes');
app.use('/api/user', protectedUserRoutes);

const dashboardRoutes = require('./routes/dashboardRoutes');
app.use('/api/dashboard', dashboardRoutes);

const seoRoutes = require('./routes/seoRoutes');
app.use('/api/seo', seoRoutes);


// ✅ Changed from GET to POST
app.post('/', (req, res) => {
  res.send('🎉 Welcome to OPTI-RANK Backend!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
