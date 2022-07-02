/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable no-tabs */
/* eslint-disable react/jsx-indent */
import React from "react";

export default function Ingredient({ name, amount }) {
  return (
    <>
      <span>{name}</span>
      <span>{amount}</span>
    </>
  );
}
