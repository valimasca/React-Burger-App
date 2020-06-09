import * as actionTypes from './actions';

const initialState = {
    ingredients:{
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice: 4
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.ADD_INGREDIENT:
            return {
                //copy old state with the spread operator and distributing it over the new object below:
                ...state,
                //we are setting ingredients to something new, a new object
                // we are doing it like so that we don't reuse the old state but create a new one
                ingredients: {
                    ...state.ingredients,
                    //[] - this is special sintax to overide a property in a given JS object 
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                }
            };
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                }
            };
        default: 
            return state;
    }
};

export default reducer;