import React from 'react';
import { withRouter } from 'react-router-dom';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ( props ) => {
    //igKey = we need a key for each ingredient ig stands for ingredient.
    //the outside map maps around all ingredients and then returns an array with the spread operator ...Array - which creates an array
    //we are transforming an object of key value pairs in to an array of burger ingredients where the value of the object is important to how many ingredients I need
    //Then the key is important for which type of ingredients I need 
    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
           return  <BurgerIngredient key={igKey + i} type={igKey} />;
        });
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    
    //console.log(transformedIngredients);

    return (
        <div className={classes.Burger}>
            <BurgerIngredient  type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient  type="bread-bottom" />
        </div>
    );
};

export default withRouter(burger);