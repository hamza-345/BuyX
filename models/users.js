import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
    {
      timestamps: true,
    }
  )

userSchema.pre("save", async function(next) {
  if(!this.isModified("password")) {
    return next()
  }
  try {
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password,salt)
  return next()
  }
  catch(error) {
    return next(error)
  }
})

userSchema.methods.comparePassword = async function(password) {
    return bcrypt.compare(password, this.password);
    
}



export default mongoose.model('users', userSchema)