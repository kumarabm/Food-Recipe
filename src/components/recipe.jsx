import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import '../style/recipe.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Recipe = () => {
  const APP_ID = '70a32c28';
  const APP_KEY = '45f95b3eaf921b42d03d26b31e12a361';
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('burger');

  useEffect(() => {
    if (query) {
      setRecipes([]); // Clear existing recipes
      getRecipes(0, 100);
    }
  }, [query]);

  const getRecipes = async (start = 0, end = 100) => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${start}&to=${end}`
    );
    const data = await response.json();
    setRecipes((prevRecipes) => [...prevRecipes, ...data.hits]); // Append new results
  };

  const loadMoreRecipes = () => {
    getRecipes(recipes.length, recipes.length + 100);
  };

  const handleSearch = (searchText) => {
    setQuery(searchText);
  };

  return (
    <div>
      <Navbar />
      <div
        className="container-fluid"
        style={{ backgroundColor: '#f9f9f9', minHeight: '100vh', paddingBottom: '30px' }}
      >
        <div className="container py-5">
          <div className="row g-6">
            {recipes.length > 0 ? (
              <>
                <div className="row">
                  {recipes.map((recipeItem) => (
                    <div key={recipeItem.recipe.label} className="col-md-4 col-sm-6 d-flex">
                      <div className="card recipe">
                        <img
                          src={recipeItem.recipe.image}
                          className="card-img-top image"
                          alt={recipeItem.recipe.label}
                        />
                        <div className="card-body">
                          <h5 className="card-title">{recipeItem.recipe.label}</h5>
                          <h6>Ingredients:</h6>
                          <div className="ingredients">
                            {recipeItem.recipe.ingredients.map((ingredient, index) => (
                              <p key={`${ingredient.text}-${index}`}>
                                {ingredient.text}.
                              </p>
                            ))}
                          </div>
                        </div>
                        <div className="card-footer text-center">
                          <p>
                            <strong>Calories:</strong> {recipeItem.recipe.calories.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Button to load more recipes */}
                <div className="text-center mt-4">
                  <button className="btn btn-primary" onClick={loadMoreRecipes}>
                    Load More Recipes
                  </button>
                </div>
              </>
            ) : (
              <p className="text-center">No recipes found. Try a different search.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
