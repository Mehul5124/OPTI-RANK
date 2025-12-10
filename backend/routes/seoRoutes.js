// backend/routes/seoRoutes.js
const express = require('express');
const router = express.Router();
const { analyzeSEO } = require('../controllers/seoController');
const authMiddleware = require('../middlewares/auth');

// Protected SEO analysis route
router.get('/analyze', authMiddleware, analyzeSEO);

module.exports = router;