import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ recipe }) => {
  return (
    <div className={style.recipe}>
      <h1>{recipe.label}</h1>
      <ol>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ol>
      <img className={style.image} src={recipe.image} alt=""></img>
    </div>
  );
};

export default Recipe;
