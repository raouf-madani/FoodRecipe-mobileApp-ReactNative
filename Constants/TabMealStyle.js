import React from 'react';
import Color from './Color';
import {Text, Platform} from 'react-native';
import {Ionicons} from '@expo/vector-icons';


const TabMealStyle = () => {

    return ({
      tabBarIcon: () => {
        return <Ionicons name='ios-restaurant' size={25} color={Color.secondColor}  />;
      },
      tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily:'open-sans-bold'}}>Meals</Text> : 'Meals'

    }); 
  }

  export default TabMealStyle;