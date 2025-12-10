const express = require('express');
const router = express.Router();
const protect = require('../middlewares/auth');

// ✅ Example protected route
router.get('/profile', protect, (req, res) => {
  res.json({
    message: 'Protected Route Accessed',
    user: req.user
  });
});

module.exports = router;
