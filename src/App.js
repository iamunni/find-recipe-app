import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./components/recipes";

const App = () => {
  const APP_ID = "ba4ce1ce";
  const APP_KEY = "2753269fa6ab42f7532803de5550d0b2";

  const [recipes, setRecipes] = useState([]);
  const [search, SetSearch] = useState("");
  const [query, setQuery] = useState("chicken");

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
    <div className="App">
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
      <div className="recipe-container">
        {recipes.map((recipe) => (
          <Recipe key={recipe.recipe.label} recipe={recipe.recipe} />
        ))}
      </div>
    </div>
  );
};

export default App;
