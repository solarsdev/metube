import mongoose from 'mongoose';

// text
// createAt

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

const model = mongoose.model('Comment', CommentSchema);
export default model;
