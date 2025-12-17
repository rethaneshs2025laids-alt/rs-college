const express = require('express');
const router = express.Router();
const Placement = require('../models/Placement');

// Get all placements
router.get('/', async (req, res) => {
  try {
    const placements = await Placement.find();
    res.json(placements);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add new placement
router.post('/', async (req, res) => {
  try {
    const placement = new Placement(req.body);
    await placement.save();
    res.status(201).json(placement);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete placement
router.delete('/:id', async (req, res) => {
  try {
    await Placement.findByIdAndDelete(req.params.id);
    res.json({ message: 'Placement deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;