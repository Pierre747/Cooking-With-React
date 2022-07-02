import React from 'react';
import IngredientList from './IngredientList';

export default function Recipe({
	name,
	cookTime,
	servings,
	instructions,
	ingredients,
}) {
	return (
		<div>
			<div>
				<h3>{name}</h3>
				<div>
					<button>Edit</button>
					<button>Delete</button>
				</div>
			</div>
			<div>
				<span>Cook Time:</span>
				<div>{cookTime}</div>
			</div>
			<div>
				<span>Servings:</span>
				<div>{servings}</div>
			</div>
			<div>
				<span>Instructions</span>
				<div>{instructions}</div>
			</div>
			<div>
				<span>Ingredients</span>
				<div>
					<IngredientList ingredients={ingredients} />
				</div>
			</div>
		</div>
	);
}
