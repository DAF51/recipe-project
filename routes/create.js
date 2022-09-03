const express = require('express')
const router = express.Router()
const createController = require("../controllers/create")

router.get("/", createController.getCreate)
router.post("/createRecipe", createController.createRecipe)



module.exports = router