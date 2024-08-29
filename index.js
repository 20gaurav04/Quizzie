const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); 

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

// Basic route
app.get('/', (req, res) => {
  res.send('Study Platform Backend API');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

const userRouter = require('./routes/User');
const courseRouter = require('./routes/Course');
const subjectRouter = require('./routes/Subject');
const topicRouter = require('./routes/Topic');
const quizRouter = require('./routes/Quiz');

app.use('/users', userRouter);
app.use('/courses', courseRouter);
app.use('/subjects', subjectRouter);
app.use('/topics', topicRouter);
app.use('/quizzes', quizRouter);
