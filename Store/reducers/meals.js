import {Meals} from '../../Data/dummy-data';
import {TOGGLE_FAVORITE, SET_FILTERS} from '../actions/mealsActions';

const initialState = {
    meals: Meals,
    filteredMeals : Meals,
    favoriteMeals : []
};

//meal.id is the id where we find in dummy-data in the Meals array
//action.mealId is the id in the toggleFavorite function which creates our object action.
//if findIndex returns true so we have an index which is greater than -1. In this situation we select this index and remove it from the favorite list
// if false, so we haven't an index which is equal to -1. In this situation we add the meal which holds meal.i.d
// ...state means that we are keeping the old state and we add the new state
const mealsReducer = (state = initialState, action) =>{
    switch(action.type){
      case TOGGLE_FAVORITE:
          const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);
          if(existingIndex >= 0){
             const updatedFavMeals = [...state.favoriteMeals];
             updatedFavMeals.splice(existingIndex,1); //we delete the meal in the existingIndex Index with splice method  
             return {...state, favoriteMeals:updatedFavMeals};
          }else{
             const meal = state.meals.find(meal => meal.id === action.mealId);
             return {...state, favoriteMeals: state.favoriteMeals.concat(meal)};
          }

      case SET_FILTERS :
          const appliedFilters = action.filter;
          const ourFilteredMeals = state.meals.filter(meal => {
              if(appliedFilters.Gluten && !meal.isGlutenFree){
                  return false;
              } 
              if(appliedFilters.Lactose && !meal.isLactoseFree){
                  return false;
              }
              if(appliedFilters.Vegetarian && !meal.isVegetarian){
                  return false;
              }
              if(appliedFilters.Vegan && !meal.isVegan){
                  return false;
              }
              return true;
          }); //filter keeps items which they return true and drop items when it's false
        return {...state, filteredMeals:ourFilteredMeals};  
      default:         
         return state;
    }
};


export default mealsReducer;