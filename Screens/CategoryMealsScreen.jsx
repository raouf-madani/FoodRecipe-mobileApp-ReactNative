import React from 'react';
import { StyleSheet, Text, View,FlatList,TouchableOpacity, ImageBackground } from 'react-native';
//import {Meals} from '../Data/dummy-data';
import {useSelector} from 'react-redux';



/*
 *we recieve the id from categoriesScreen by props.route.params
 * We check if our id exists inside the array of categoryIds of Meals
 * if yes, we display the details of this meal
 * every meal belongs to 0..n categories  
 */
const CategoryMealsScreen = props => {

  const cid = props.route.params.categoryID;
  const availableMeals = useSelector(state => state.ourMealsReducer.filteredMeals);
  const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(cid) >= 0);

  if(displayedMeals.length === 0){
    return (
         <View style={styles.textContainer}>
           <Text style={styles.text}>No meals found. Maybe check your filters?</Text>
         </View>
    );
  }

  const renderMealItem = itemData =>{// this function renders our Meals list and we forward it to renderItem prop inside our FlatList component
     return(
        <View style={styles.mealItem}>
         <TouchableOpacity onPress={() => props.navigation.navigate('MealDetail',{mealDetailID: itemData.item.id})}>
            <View>
              <View style={{...styles.mealHeader, ...styles.mealRow}}>
                <ImageBackground source={{uri: itemData.item.imageUrl}} style={styles.bgImg}>
                  <View style={styles.titleContainer}>
                    <Text style={styles.title} numberOfLines={1}>{itemData.item.title}</Text>
                  </View>   
                </ImageBackground>
              </View>
              <View style={{...styles.detailHeader, ...styles.mealRow}}>
                <Text style={styles.detailHeaderText}>{itemData.item.duration}m</Text>
                <Text style={styles.detailHeaderText}>{itemData.item.complexity.toUpperCase()}</Text>
                <Text style={styles.detailHeaderText}>{itemData.item.affordability.toUpperCase()}</Text>
              </View> 
            </View>
          </TouchableOpacity> 
        </View> 
     );

  };

  return (
    <View style={styles.screen}>
      <FlatList style={styles.flatlistWidth} data={displayedMeals} keyExtractor={(item,index)=>item.id} renderItem={renderMealItem}/>
    </View>
  ); 
}


const styles = StyleSheet.create({
    screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mealItem:{
     height:200,
     width: '100%',
     backgroundColor: '#f5f5f5',
     marginVertical:15,
     borderRadius: 10,
     overflow: 'hidden'
  },
  mealRow:{
    flexDirection:'row',
  },
  flatlistWidth:{
    width:'90%'
  },
  mealHeader:{
    height:'85%'
  },
  detailHeader:{
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height:'15%'
  },
  bgImg:{
    width:'100%',
    height:'100%',
    justifyContent: 'flex-end'
  },
  titleContainer:{
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical:5,
    paddingHorizontal: 8
  },
  title:{
    fontSize:20,
    color: 'white',
    fontFamily: 'open-sans-bold',
    textAlign:'center'
  },
  detailHeaderText:{
    fontFamily: 'open-sans'
  },
  textContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal:15
  },
  text:{
    fontFamily:'open-sans',
    fontSize:17,
    textAlign:'center'
  }
});

export default CategoryMealsScreen;