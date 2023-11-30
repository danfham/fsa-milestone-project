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

module.exports = mongoose.model('User', userSchema)