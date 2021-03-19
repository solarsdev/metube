import mongoose, { isValidObjectId } from 'mongoose';

// fileUrl
// title
// description
// views
// createAt
// comments[]

const VideoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: String,
  views: {
    type: Number,
    default: 0,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
});

const model = mongoose.model('Video', VideoSchema);
export default model;
