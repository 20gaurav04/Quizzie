const express = require('express');
const router = express.Router();
const Topic = require('../models/Topic');

// Example route to get all topics for a subject
router.get('/:subjectId', async (req, res) => {
  try {
    const topics = await Topic.find({ subject: req.params.subjectId });
    res.json(topics);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
