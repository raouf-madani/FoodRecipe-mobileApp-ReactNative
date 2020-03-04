import React, {useEffect, useCallback} from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
//import {Meals} from '../Data/dummy-data';
import {useSelector, useDispatch} from 'react-redux';
import {toggleFavorite} from '../Store/actions/mealsActions';
import Color from '../Constants/Color';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../Components/CustomHeaderButton';


const ListItem = props =>{

  return (
     <View style={styles.listItem}>
       <Text style={styles.detailItemListText}>{props.children}</Text>
     </View>
  );

};

/*
 *we recieve the id from CategoryMealsScreen by props.route.params
 *We bring AllMeals using useSelector from react-redux
 *Then we apply our logic to render the MealDetails  
 */
const MealDetailScreen = props => {

  const mealID = props.route.params.mealDetailID;
  const AllMeals = useSelector(state => state.ourMealsReducer.meals);
  const selectedMealDetail = AllMeals.find(meal => meal.id === mealID);
  const isThereAnyFavMeal = useSelector(state => state.ourMealsReducer.favoriteMeals.some(meal=>meal.id===mealID));
  const dispatch = useDispatch();
  
  const toggleFavoriteHandler = useCallback(() =>{
    dispatch(toggleFavorite(mealID));
  }, [dispatch, mealID]);

  useEffect(() => {
     props.navigation.setOptions({headerRight:() => ( 
     <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item title="Favourite" iconName={isThereAnyFavMeal ? "ios-star" : "ios-star-outline"} onPress={toggleFavoriteHandler}/>
     </HeaderButtons>)});
  }, [toggleFavoriteHandler,isThereAnyFavMeal]);

   


  return (
    <ScrollView>
      <Image source={{uri:selectedMealDetail.imageUrl}} style={styles.image} />
      <View style={styles.detailContainer}>
                <Text style={styles.detailHeaderText}>{selectedMealDetail.duration}m</Text>
                <Text style={styles.detailHeaderText}>{selectedMealDetail.complexity.toUpperCase()}</Text>
                <Text style={styles.detailHeaderText}>{selectedMealDetail.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.textTitle}>Ingredients</Text>
      {selectedMealDetail.ingredients.map(ingredient =><ListItem key={ingredient}>{ingredient}</ListItem>)}
      <Text style={styles.textTitle}>Steps</Text>
      {selectedMealDetail.steps.map(step =><ListItem key={step}>{step}</ListItem>)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  detailHeaderText:{
    fontFamily: 'open-sans-bold',
    color: Color.primaryColor
  },
  detailItemListText:{
    fontFamily: 'open-sans'
  },
  image:{
    height:200,
    width:'100%'
  },
  detailContainer:{
    flexDirection: 'row',
    padding:15,
    justifyContent: 'space-around'
  },
  textTitle:{
    fontFamily : 'open-sans-bold',
    fontSize: 20,
    textAlign: 'left',
    marginHorizontal:20,
    marginTop:10,
    color: Color.secondColor
  },
  listItem:{
    marginVertical: 10,
    marginHorizontal:20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding:10
  }
});

export default MealDetailScreen;