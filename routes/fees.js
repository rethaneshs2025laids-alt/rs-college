const express = require('express');
const router = express.Router();
const Fee = require('../models/Fee');

// Get all fees
router.get('/', async (req, res) => {
  try {
    const fees = await Fee.find();
    res.json(fees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add new fee
router.post('/', async (req, res) => {
  try {
    const fee = new Fee(req.body);
    await fee.save();
    res.status(201).json(fee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update fee status
router.put('/:id', async (req, res) => {
  try {
    const fee = await Fee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(fee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;