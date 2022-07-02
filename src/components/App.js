import React from 'react';
import RecipeList from './RecipeList';
import { sampleRecipes } from '../data/data';
import '../css/app.css';

function App() {
	return <RecipeList recipes={sampleRecipes} />;
}

export default App;
