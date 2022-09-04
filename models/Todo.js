const mongoose = require('mongoose')

const RecipeSchema = new mongoose.Schema({
  recipeName: {
    type: String,
    required: true,
  },
  catagory: {
    type: String,
    required: true,
  },
  recipe: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true
  },
  img: {
    type: String,
    default: 'placeholder.jpg',
  }
})

module.exports = mongoose.model('Todo', RecipeSchema)
