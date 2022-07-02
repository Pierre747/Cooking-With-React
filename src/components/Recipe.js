/* eslint-disable no-console */
/* eslint-disable import/no-cycle */
/* eslint-disable quotes */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import IngredientList from "./IngredientList";
import { RecipeContext } from "./App";

export default function Recipe({
  id,
  name,
  cookTime,
  servings,
  instructions,
  ingredients,
}) {
  const { handleRecipeDelete, handleRecipeSelect } = useContext(RecipeContext);

  return (
    <div className="recipe">
      <div className="recipe__header">
        <h3 className="recipe__title">{name}</h3>
        <div>
          <button
            className="btn btn--primary mr-1"
            onClick={() => handleRecipeSelect(id)}
          >
            Edit
          </button>
          <button
            className="btn btn--danger"
            onClick={() => handleRecipeDelete(id)}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Cook Time:</span>
        <div className="recipe__value">{cookTime}</div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Servings:</span>
        <div className="recipe__value">{servings}</div>
      </div>
      <div>
        <span className="recipe__label">Instructions</span>
        <div className="recipe__value recipe__instructions recipe__value--indented">
          {instructions}
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Ingredients</span>
        <div className="recipe__value recipe__value--indented">
          <IngredientList ingredients={ingredients} />
        </div>
      </div>
    </div>
  );
}
