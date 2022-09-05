const Todo = require('../models/Todo')

exports.getCreate = (req, res) => {
  res.render("create.ejs")
}

exports.createRecipe = async (req,res) => {
  try{ 
    await Todo.create({recipeName: req.body.name, catagory: req.body.catagory, recipe: req.body.recipe, img: req.file.filename, userId: req.user.id})
    res.redirect("/todos")
  } catch(err){
    console.log(err)
}

}