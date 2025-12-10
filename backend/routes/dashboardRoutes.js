// routes/dashboardRoutes.js

const express = require('express');
const router = express.Router();
const { getDashboardData } = require('../controllers/dashboardController');
const protect = require('../middlewares/auth'); // keep it protected

// @route   GET /api/dashboard?platform=instagram&filter=7d
router.get('/', protect, getDashboardData);

module.exports = router;
