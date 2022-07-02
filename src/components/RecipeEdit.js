/* eslint-disable import/no-cycle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Ingredient from "./Ingredient";
import RecipeIngredientEdit from "./RecipeIngredientEdit";
import { RecipeContext } from "./App";

export default function RecipeEdit({ recipe }) {
  const { handleRecipeChange } = useContext(RecipeContext);

  function handleChange(changes) {
    handleRecipeChange(recipe.id, { ...recipe, ...changes });
  }

  function handleIngredientChange(id, ingredient) {
    const newIngredient = [...recipe.ingredient];
    const index = newIngredient.findIndex((i) => i.id === id);
    newIngredient[index] = ingredient;
    handleChange({ ingredients: newIngredient });
  }

  return (
    <div className="recipe-edit">
      <div className="recipe-edit__remove-button-container">
        <button className="btn recipe-edit__remove-button">&times;</button>
      </div>
      <div className="recipe-edit__details-grid">
        <label htmlFor="name" className="recipe-edit__label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={recipe.name}
          onInput={(e) => handleChange({ name: e.target.value })}
          className="recipe-edit__input"
        />
        <label htmlFor="cookTime" className="recipe-edit__label">
          Cook Time
        </label>
        <input
          type="text"
          name="cookTime"
          id="cookTime"
          value={recipe.cookTime}
          onInput={(e) => handleChange({ cookTime: e.target.value || "" })}
          className="recipe-edit__input"
        />
        <label htmlFor="servings" className="recipe-edit__label">
          Servings
        </label>
        <input
          type="number"
          min="1"
          name="servings"
          id="servings"
          value={recipe.servings}
          onInput={(e) =>
            handleChange({ servings: Number(e.target.value) || "" })
          }
          className="recipe-edit__input"
        />
        <label htmlFor="instructions" className="recipe-edit__label">
          Instructions
        </label>
        <textarea
          name="instructions"
          className="recipe-edit__input"
          onInput={(e) => handleChange({ instructions: e.target.value })}
          value={recipe.instructions}
          id="instructions"
        />
      </div>
      <br />
      <label className="recipe-edit__label">Ingredients</label>
      <div className="recipe-edit__ingredient-grid">
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        {recipe.ingredients.map((ingredient) => (
          <RecipeIngredientEdit
            key={ingredient.id}
            handleIngredientChange={handleIngredientChange}
            ingredient={ingredient}
          />
        ))}
      </div>
      <div className="recipe-edit__add-ingredient-btn-container">
        <button className="btn btn--primary">Add Ingredients</button>
      </div>
    </div>
  );
}
