import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  name: String,
  email: String,
  avatarUrl: String,
  facebookId: Number,
  twitterId: Number,
  googleId: Number,
});

const model = mongoose.model('User', UserSchema);

export default model;
