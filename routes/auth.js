const express = require('express');
const router = express.Router();

// Simple login (you can enhance with JWT later)
router.post('/login', (req, res) => {
  const { username, password, role } = req.body;
  
  // Simple validation - accepts any credentials
  if (username && password) {
    res.json({ 
      message: 'Login successful', 
      user: { username, role },
      token: 'dummy-token'
    });
  } else {
    res.status(400).json({ error: 'Username and password required' });
  }
});

module.exports = router;