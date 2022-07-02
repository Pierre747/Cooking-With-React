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
		<div className='recipe'>
			<div className='recipe__header'>
				<h3 className='recipe__title'>{name}</h3>
				<div>
					<button className='btn btn--primary mr-1'>Edit</button>
					<button className='btn btn--danger'>Delete</button>
				</div>
			</div>
			<div className='recipe__row'>
				<span className='recipe__label'>Cook Time:</span>
				<div className='recipe__value'>{cookTime}</div>
			</div>
			<div className='recipe__row'>
				<span className='recipe__label'>Servings:</span>
				<div className='recipe__value'>{servings}</div>
			</div>
			<div>
				<span className='recipe__label'>Instructions</span>
				<div className='recipe__value recipe__instructions recipe__value--indented'>
					{instructions}
				</div>
			</div>
			<div className='recipe__row'>
				<span className='recipe__label'>Ingredients</span>
				<div className='recipe__value recipe__value--indented'>
					<IngredientList ingredients={ingredients} />
				</div>
			</div>
		</div>
	);
}
