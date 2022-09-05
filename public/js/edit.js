const editBtn = document.querySelectorAll(".ed")
console.log("This is working")

Array.from(editBtn).forEach(el =>{
  el.addEventListener("click",editRecipe)
})

const id = editBtn[0].getAttribute('value')

async function editRecipe(){
  const recipeName = await this.parentNode.name.value
  const recipeCatagory = await this.parentNode.catagory.value
  const recipe = await this.parentNode.recipe.value
  try {
    response = await fetch("/edit/editRecipe/id", {
      method: "PUT",
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
          'nameFromJS': recipeName,
          "catFromJS": recipeCatagory,
          "recipeFromJS": recipe,
          "idFromJS": id
      })
    }) 

    const data = await response.json()
    console.log(data)

    //this redirects you to the upload image page
    window.location = `/edit/uploadImage/${id}`
    

  } catch(err){
    console.log(err)
  }
}