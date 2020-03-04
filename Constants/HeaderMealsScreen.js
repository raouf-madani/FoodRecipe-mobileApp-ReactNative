import {Categories} from '../Data/dummy-data';
import Color from './Color';


const HeaderMealsScreen = props => {

    const cid = props.route.params.categoryID;
    const selectedCategory = Categories.find(cat => cat.id === cid);
  
     
    return {

        title: selectedCategory.title, 
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Color.primaryColor : 'white'
            },
        headerTitleStyle: {
                fontFamily: 'open-sans-bold',
              },
        headerBackTitleStyle:{
                fontFamily: 'open-sans' 
        },        
        headerTintColor: Platform.OS === 'android' ? 'white' : Color.primaryColor

    }; 
  }

  export default HeaderMealsScreen;