import React from 'react';
import Color from './Color';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../Components/CustomHeaderButton';


const HeaderFiltersScreen = props => {

    //const saveFilters = props.route.params.save;
   
    return{ 
       
            title: 'Meal Filters', 
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Color.primaryColor : 'white'
                },
            headerTitleStyle: {
                    fontFamily: 'open-sans-bold',
                  },     
            headerTintColor: Platform.OS === 'android' ? 'white' : Color.primaryColor,
            headerLeft : () =>(
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item title="Main" iconName="ios-menu"  onPress={() => props.navigation.toggleDrawer()} />
                </HeaderButtons>),
            /*headerRight : () =>(
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title="Save" iconName="ios-save"  onPress={saveFilters} />
            </HeaderButtons>)*/

       };
            
 };

 export default HeaderFiltersScreen;
