import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import {Categories} from '../Data/dummy-data';



/*inside navigattion.navigate, the first parm is where to go. 
2nd param is sending the id of our category to CategoryMeals screen*/
const CategoriesScreen = props => {

   let TouchableCmp = TouchableOpacity;
   if(Platform.OS === 'android' && Platform.Version >= 21){
     TouchableCmp = TouchableNativeFeedback;
   }
  
  const renderGridItem = itemData => {// this function renders our categories list and we forward it to renderItem prop inside our FlatList component
      return (
      <View style={styles.gridItem}>
        <TouchableCmp  style={styles.flexy} onPress={() => props.navigation.navigate('CategoryMeals',{categoryID:itemData.item.id})}>
          <View style={{...styles.container,...{backgroundColor: itemData.item.color}}}>
            <Text style={styles.title} numberOfLines={2}>{itemData.item.title}</Text> 
          </View>
        </TouchableCmp>
      </View>  
    );
};


  return (
    <FlatList keyExtractor={(item,index) => item.id} renderItem={renderGridItem} numColumns={2} data={Categories} />
  );
}


const styles = StyleSheet.create({
    gridItem: {
    flex: 1,
    margin:15,
    height:150,
    elevation:5,
    borderRadius: 10,
    overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible'
  },
  flexy:{
    flex:1
  },
  container:{
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height:2},
    shadowRadius: 10,
    padding:15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  title:{
    fontSize:18,
    fontFamily: 'open-sans-bold',
    textAlign: 'right'
  }
});

export default CategoriesScreen;