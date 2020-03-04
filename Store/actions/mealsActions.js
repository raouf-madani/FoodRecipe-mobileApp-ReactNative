export const TOGGLE_FAVORITE ='TOGGLE_FAVORITE'; // Unique Identifier
export const SET_FILTERS = 'SET_FILTERS';

/*
* Let's create a fucntion which create my action object with an identifier and a payload
*/

export const toggleFavorite = id =>{

   return {
      type : TOGGLE_FAVORITE,
      mealId: id
   };

};

export const setFilters = filterSettings =>{

   return {
      type: SET_FILTERS,
      filter: filterSettings
   };
};