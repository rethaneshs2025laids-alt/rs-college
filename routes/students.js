const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Register new student
router.post('/register', async (req, res) => {
  try {
    const { name, email, phone, fatherName, motherName, dateOfBirth, gender, address, percentage12th, jeeScore, department } = req.body;
    
    // Generate roll number
    const year = new Date().getFullYear();
    const deptCode = department.toUpperCase().substring(0, 3);
    const count = await Student.countDocuments({ department }) + 1;
    const rollNo = `${year}${deptCode}${count.toString().padStart(3, '0')}`;
    
    const student = new Student({
      name, email, phone, fatherName, motherName, dateOfBirth, gender, address, percentage12th, jeeScore, department, rollNo
    });
    
    await student.save();
    res.status(201).json({ message: 'Student registered successfully', student });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete student
router.delete('/:id', async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;