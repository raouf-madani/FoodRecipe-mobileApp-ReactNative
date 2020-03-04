import React, {useState, useEffect, useCallback} from 'react';
import { StyleSheet, Text, View, Switch, Platform } from 'react-native';
import Color from '../Constants/Color';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../Components/CustomHeaderButton';
import {useDispatch} from 'react-redux';
import {setFilters} from '../Store/actions/mealsActions';



const FilterSitch = props => {
   return(
    <View style={styles.filterContainer}>
        <Text style={styles.options}>{props.label}</Text>
        <Switch value={props.value} 
        onValueChange={props.onChange}
        trackColor={{true:Color.secondColor}}
        thumbColor={Platform.OS === 'android' ? Color.secondColor : ''}
        />
    </View>

   );


}

const FiltersScreen = props => {

  const [isGlutenFree, setGlutenFree] = useState(false);
  const [isLactoseFree, setLactoseFree] = useState(false);
  const [isVegan, setVegan] = useState(false);
  const [isVegetarian, setVegetarian] = useState(false);
  const dispatch =useDispatch();
  
  const saveFilters = useCallback(() =>{
      const appliedFilters = {
          Gluten : isGlutenFree,
          Lactose: isLactoseFree,
          Vegan: isVegan,
          Vegetarian: isVegetarian
      };
      dispatch(setFilters(appliedFilters));
  }, [isGlutenFree,isLactoseFree,isVegan,isVegetarian, dispatch]);

  useEffect(() =>{
       props.navigation.setOptions(saveFilters());
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters/Restrictions</Text>
      <FilterSitch label="Gluten-Free" value={isGlutenFree} onChange={previousValue => setGlutenFree(previousValue)} />
      <FilterSitch label="Lactose-Free" value={isLactoseFree} onChange={previousValue => setLactoseFree(previousValue)} />
      <FilterSitch label="Vegan" value={isVegan} onChange={previousValue => setVegan(previousValue)} />
      <FilterSitch label="Vegetarian" value={isVegetarian} onChange={previousValue => setVegetarian(previousValue)} />
    </View>
  );
}


const styles = StyleSheet.create({
    screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  title:{
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin:20,
    textAlign:'center'
  },
  filterContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems :'center',
    width: '80%',
    marginVertical:10
  },
  options:{
    fontFamily: 'open-sans',
    fontSize: 18
  }
});

export default FiltersScreen;