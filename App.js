import React, {useState} from 'react';
import { View, Text,Button } from 'react-native';
import Navigations from './Navigation/Navigations';
import * as Font from 'expo-font';//importing fonts
import {AppLoading} from 'expo';
import {enableScreens} from 'react-native-screens';
import {createStore, combineReducers} from 'redux';
import mealsReducer from './Store/reducers/meals';
import {Provider} from 'react-redux';
enableScreens();

const rootReducer = combineReducers({
     ourMealsReducer : mealsReducer
});
const ourStore = createStore(rootReducer);

const fetchFonts = () =>{
  return Font.loadAsync({
     'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
     'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);//Managing the font loading state

  if(!fontLoaded){//if fontLoaded is false, we call the fetchFonts function in startAsync prop
    return (
       <AppLoading 
         startAsync={fetchFonts}
         onFinish= {() => setFontLoaded(true)}
       />
       );
  }
  
  return (<Provider store={ourStore}> 
           <Navigations /> 
        </Provider>);
}