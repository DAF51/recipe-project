const Todo = require('../models/Todo')

exports.getEdit = async (req, res) => {
  try{
  const recipeObj = await Todo.findById({_id: req.params.id})
  await console.log(`The ID is ${req.params.id}`)
  await console.log(`The name is ${recipeObj}`)
  const todoItems = await Todo.findById({_id: req.params.id})
  res.render("edit.ejs", {recipeName: recipeObj.recipeName, recipeCatagory: recipeObj.catagory, recipe:recipeObj.recipe, todos: todoItems})
  } catch(err){
    console.log(err)
  }
}

exports.getUploadImage = async (req, res) => {
  try{
  const recipeObj = await Todo.findById({_id: req.params.id})
  await console.log(`The ID is ${req.params.id}`)
  await console.log(`The name is ${recipeObj}`)
  const todoItems = await Todo.findById({_id: req.params.id})
  res.render("editImage.ejs", {recipeName: recipeObj.recipeName, recipeCatagory: recipeObj.catagory, recipe:recipeObj.recipe, todos: todoItems})
  } catch(err){
    console.log(err)
  }
}

exports.editRecipe = async (req,res) => {
  try{ 
    await Todo.updateOne({_id: req.body.idFromJS},{$set: {recipeName: req.body.nameFromJS, catagory: req.body.catFromJS, recipe: req.body.recipeFromJS}})
    res.json("edit successful")
  } catch(err){
    console.log(err)
}
}

exports.editImage = async (req,res) => {
  try{ 
    if(req.file){
      const recipeObj = await Todo.findById({_id: req.params.id})
      await Todo.updateOne({_id: req.params.id},{$set: {img: req.file.filename}})
      const todoItems = await Todo.findById({_id: req.params.id})
      res.redirect("/todos")
    }else{
      res.redirect("/todos")
    }
  } catch(err){
    console.log(err)
}
}