/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from "react";
import Ingredient from "./Ingredient";

export default function IngredientList({ ingredients }) {
  const ingredientElements = ingredients.map((ingredient) => (
    <Ingredient key={ingredient.id} {...ingredient} />
  ));
  return <div className="ingredient-grid">{ingredientElements}</div>;
}
