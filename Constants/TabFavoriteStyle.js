import React from 'react';
import {Text,Platform} from 'react-native';
import Color from './Color';
import {Ionicons} from '@expo/vector-icons';


const TabFavoriteStyle = () => {

   
    return {
      tabBarIcon: () => {
             return <Ionicons name='ios-star' size={25} color={Color.secondColor} />;
      },
      tabBarLabel: Platform.OS === 'android' ?  <Text style={{fontFamily:'open-sans-bold'}}>Favorites</Text> : 'Favorites'
        
     };

    }; 


  

  export default TabFavoriteStyle;