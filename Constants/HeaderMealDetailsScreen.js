import React from 'react';
import {Meals} from '../Data/dummy-data';
import Color from './Color';


const HeaderMealDetailsScreen = props => {

    const mealID = props.route.params.mealDetailID;
    const selectedMeal = Meals.find(meal => meal.id === mealID);
    
     
    return {

        title: selectedMeal.title, 
        headerTitleStyle: {
            fontSize: 16,
            fontFamily: 'open-sans-bold'
        } ,
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Color.primaryColor : 'white'
            }, 
        headerTintColor: Platform.OS === 'android' ? 'white' : Color.primaryColor

    }; 
  }

  export default HeaderMealDetailsScreen;