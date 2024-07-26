
const express = require("express");
const { createRecipe, getAllRecipes, getRecipe, deleteRecipe,

} = require("../controllers/recipeControllers");
// router

const router = express.Router();

router.route("/api/recipes").get(getAllRecipes).post(createRecipe);

router.route("/api/recipes/:id").get(getRecipe).delete(deleteRecipe);

module.exports = router()
    ;