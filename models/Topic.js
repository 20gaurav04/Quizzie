const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
}, { timestamps: true });

const Topic = mongoose.model('Topic', topicSchema);
module.exports = Topic;
