const Todo = require('../models/Todo')

exports.getEdit = async (req, res) => {
  try{
  //Getting this to work was a royal PITA. Turns out the get request over in the EJS didn't need the : before the ID objeect
  const recipeObj = await Todo.findById({_id: req.params.id})
  await console.log(`The ID is ${req.params.id}`)
  await console.log(`The name is ${recipeObj}`)
  res.render("edit.ejs", {recipeName: recipeObj.recipeName, recipeCatagory: recipeObj.catagory, recipe:recipeObj.recipe})
  } catch(err){
    console.log(err)
  }
}

exports.editRecipe = async (req,res) => {
  try{ 
    await Todo.updateOne({recipeName: req.body.nameFromJS, catagory: req.body.catFromJS, recipe: req.body.recipeFromJS})
    res.json("edit successful")
  } catch(err){
    console.log(err)
}


}