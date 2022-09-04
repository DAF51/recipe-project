const express = require('express')
const router = express.Router()
const createController = require("../controllers/create")
const upload = require("../config/multer") 

router.get("/", createController.getCreate)
router.post("/createRecipe", upload.single('image'), createController.createRecipe)



module.exports = router