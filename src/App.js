import React from 'react';
import RecipeList from './components/RecipeList';
import { sampleRecipes } from './data';

function App() {
	return <RecipeList recipes={sampleRecipes} />;
}

export default App;
