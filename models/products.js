import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number, 
        required: true
    },
    stock: {
        type: Number,
        required: true,
    },
    productImages: [ 
        {
            type: String,
            required: true
        }
        ],
    category: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: 0
    },
    numOfReviews: {
        type: Number,
        default: 0
    }

})

ProductSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

 export default mongoose.model('product', ProductSchema)