import React from 'react';
import Color from './Color';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../Components/CustomHeaderButton';

const HeaderFavoriteScreen = props => {

      return {
          
            title: 'Your Favorites', 
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
                    </HeaderButtons>)
                
        }
 
 };
 export default HeaderFavoriteScreen;