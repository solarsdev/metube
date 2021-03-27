import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const UserSchema = new mongoose.Schema({
  email: String,
  lastName: String,
  firstName: String,
  avatarUrl: String,
  localId: String,
  facebookId: Number,
  twitterId: Number,
  googleId: Number,
});

UserSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
});

const model = mongoose.model('User', UserSchema);

export default model;
