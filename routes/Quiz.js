const express = require('express');
const router = express.Router();
const Quiz = require('../models/Quiz');

// Example route to get all quizzes for a topic
router.get('/:topicId', async (req, res) => {
  try {
    const quizzes = await Quiz.find({ topic: req.params.topicId });
    res.json(quizzes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
