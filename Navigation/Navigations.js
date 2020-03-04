import React from 'react';
import {Platform} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoriesScreen from '../Screens/CategoriesScreen';
import CategoryMealsScreen from '../Screens/CategoryMealsScreen';
import MealDetailScreen from '../Screens/MealDetailScreen';
import FavouritesScreen from '../Screens/FavouritesScreen';
import FiltersScreen from '../Screens/FiltersScreen';
import HeaderCategoriesScreen from '../Constants/HeaderCategoriesScreen';
import HeaderMealsScreen from '../Constants/HeaderMealsScreen';
import HeaderMealDetailsScreen from '../Constants/HeaderMealDetailsScreen';
import HeaderFavoriteScreen from '../Constants/HeaderFavoriteScreen';
import HeaderFiltersScreen from '../Constants/HeaderFiltersScreen';
import TabMealStyle from '../Constants/TabMealStyle';
import TabFavoriteStyle from '../Constants/TabFavoriteStyle';
import Color from '../Constants/Color';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Tab2 = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

const PrimaryNavigation = () => {

    return (
        
          <Stack.Navigator initialRouteName="Categories">
            <Stack.Screen name="Categories" component={CategoriesScreen} options={HeaderCategoriesScreen} />
            <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} options={HeaderMealsScreen} />
            <Stack.Screen name="MealDetail" component={MealDetailScreen} options={HeaderMealDetailsScreen} />
          </Stack.Navigator>
 
      );
};

//For the header of favorite screen
const FavoriteNavigationScreen = () =>{

    return(
         <Stack.Navigator>
            <Stack.Screen name="Favorite" component={FavouritesScreen} options={HeaderFavoriteScreen} />
          </Stack.Navigator>
    );

};



const tabIos = <Tab.Navigator
                activeColor={Color.secondColor}
                inactiveColor ='transparent'
               >
                <Tab.Screen name="Meals" component={PrimaryNavigation} options={TabMealStyle}/>
                <Tab.Screen name="Favorite" component={FavouritesScreen} options={TabFavoriteStyle} />    
             </Tab.Navigator>;

const tabAndroid = <Tab2.Navigator
                    activeColor="#f0edf6"
                    inactiveColor = 'transparent'
                    barStyle={{ backgroundColor: Color.primaryColor }}
                    >
                        <Tab2.Screen name="Meals" component={PrimaryNavigation} options={TabMealStyle}/>
                        <Tab2.Screen name="Favorite" component={FavoriteNavigationScreen} options={TabFavoriteStyle} />    
                   </Tab2.Navigator>;

const FiltersNavigation = () =>{
    return(
        <Stack.Navigator>
           <Stack.Screen name="Filters" component={FiltersScreen} options={HeaderFiltersScreen} />
         </Stack.Navigator>
   );

};                   

const tabNavigation = () =>{

   const tabNav = Platform.OS === 'android' ? tabAndroid : tabIos;
   return tabNav;

};                


const Navigations = () => {

   return (
        <NavigationContainer>
            <Drawer.Navigator
            drawerStyle={{
                backgroundColor: Color.primaryColor,
                width: 240,
              }}
              drawerContentOptions={{
                activeTintColor: 'white',
                inactiveTintColor : 'black',
                fontFamily: 'open-sans-bold'
              }}  
            >
                <Drawer.Screen name="Meals" component={tabNavigation} />
                <Drawer.Screen name="Filters" component={FiltersNavigation  } />
           </Drawer.Navigator>  
        </NavigationContainer>
    );
};

export default Navigations;