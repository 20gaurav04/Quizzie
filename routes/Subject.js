const express = require('express');
const router = express.Router();
const Subject = require('../models/Subject');

// Example route to get all subjects for a course
router.get('/:courseId', async (req, res) => {
  try {
    const subjects = await Subject.find({ course: req.params.courseId });
    res.json(subjects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
