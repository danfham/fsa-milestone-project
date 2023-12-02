const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
SALT_WORK_FACTOR = 10

const userSchema = mongoose.Schema({
  userName:{
      type: String,
      require: true
  },
  password:{
      type: String,
      require: true
  },
  ratings:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Rating'
  }],
  reviews:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Review'
  }],
  profilePicture:{
      type: Image,
      default: 'https://avatars.steamstatic.com/b599127509772f2125568318a38f24e64881de61_full.jpg'
  }
})

UserSchema.pre('save', function(next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
      if (err) return next(err);

      // hash the password using our new salt
      bcrypt.hash(user.password, salt, function(err, hash) {
          if (err) return next(err);
          // override the cleartext password with the hashed one
          user.password = hash;
          next();
      });
  });
});
   
UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
      if (err) return cb(err);
      cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', userSchema)