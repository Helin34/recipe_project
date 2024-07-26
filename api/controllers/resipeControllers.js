
const getData = require("../utils/getData");

const data = getData();


exports.getAllRecipes = (req, res) => {
    let recipes = [...data];


    const search = req.query?.search?.toLowerCase();
    if (search) {
        recipes = data.filter((recipe) => recipe.recipeName.toLowerCase().includes(search));
    }


    if (req.query.order) {
        recipes.sort((a, b) => order.req.query === "asc" ? a.recipeTime - b.recipeTime : b.recipeTime - a.recipeTime);
    }

    res.status(200).json({
        message: "Bütün tarifler alındı",
        results: data.lenght,
        recipes: recipes,


    });
};
exports.getRecipe = (req, res) => {
    res.status(200).json({
        message: "Bir tarif alındı",
    });
};
exports.deleteRecipe = (req, res) => {
    res.status(200).json({
        message: "Bir tarif silindi",
    });
};
exports.createRecipe = (req, res) => {
    res.status(200).json({
        message: "Yeni tarif oluşturuldu",
    });
};