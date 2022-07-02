/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React from "react";

export default function RecipeIngredientEdit() {
  return (
    <>
      <input className="recipe-edit__input" type="text" />
      <input className="recipe-edit__input" type="text" />
      <button className="btn btn--danger">&times;</button>
    </>
  );
}
