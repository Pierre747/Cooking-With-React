/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from "react";
import Recipe from "./Recipe";

export default function RecipeList({
  recipes,
  handleRecipeAdd,
  handleRecipeDelete,
}) {
  return (
    <div className="recipe-list">
      <div>
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.id}
            handleRecipeDelete={handleRecipeDelete}
            {...recipe}
          />
        ))}
      </div>
      <div className="recipe-list__add-recipe-btn-container">
        <button className="btn btn--primary" onClick={handleRecipeAdd}>
          Add Recipe
        </button>
      </div>
    </div>
  );
}
