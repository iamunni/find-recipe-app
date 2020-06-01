import React, { useEffect, useState } from "react";
import "./home.css";
import Recipe from "./recipes";

const Home = () => {
  const APP_ID = "app_id";
  const APP_KEY = "app_key";

  const [recipes, setRecipes] = useState([]);
  const [search, SetSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    SetSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    SetSearch("");
  };

  return (
    <div className="Home">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="desciption-header">
        <h1>Search to find recipes</h1>
      </div>
      <div className="recipe-container">
        {recipes.map((recipe, index) => (
          <Recipe key={index} recipe={recipe.recipe} />
        ))}
      </div>
    </div>
  );
};

export default Home;
