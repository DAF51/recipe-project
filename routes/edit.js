const express = require('express')
const router = express.Router()
const editController = require("../controllers/edit")
const upload = require("../config/multer")

router.get("/:id", editController.getEdit)
router.put("/editRecipe/:id", editController.editRecipe)
router.post("/editImage/:id", upload.single('image'), editController.editImage)


module.exports = router