const editBtn = document.querySelectorAll(".ed")


Array.from(editBtn).forEach(el =>{
  el.addEventListener("click",editRecipe)
})


async function editRecipe(){
  const recipeID = await this.parentNode.id.value
  const recipeName = await this.parentNode.name.value
  const recipeCatagory = await this.parentNode.catagory.value
  const recipe = await this.parentNode.recipe.value
  try {
    response = await fetch("/edit/editRecipe", {
      method: "PUT",
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
          "idFromJS":recipeID,
          'nameFromJS': recipeName,
          "catFromJS": recipeCatagory,
          "recipeFromJS": recipe
      })
    }) 

    const data = await response.json()
    console.log(data)
    // this redirects you back to the todos page
    window.location ="/todos"

  } catch(err){
    console.log(err)
  }
}


