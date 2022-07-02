/* eslint-disable import/no-unresolved */
/* eslint-disable no-useless-return */
/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable semi */
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import RecipeList from "./RecipeList";
import { sampleRecipes } from "../data/data";
import "../css/app.css";

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: "New",
      servings: 1,
      cookTime: "1:00",
      instructions: "Instr.",
      ingredients: [
        {
          id: uuidv4(),
          name: "Name",
          amount: "1 Tbs",
        },
      ],
    };
    setRecipes([...recipes, newRecipe]);
  }

  function handleRecipeDelete(id) {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }

  return (
    <RecipeList
      recipes={recipes}
      handleRecipeAdd={handleRecipeAdd}
      handleRecipeDelete={handleRecipeDelete}
    />
  );
}

export default App;
