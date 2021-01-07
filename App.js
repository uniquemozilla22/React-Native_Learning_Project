import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import ComponentScreens from './src/screens/ComponentScreens'
import HomeScreen from "./src/screens/HomeScreen"
import ListScreen from './src/screens/ListScreen'
import ImageScreen from './src/screens/ImageScreen'
import ValueChanger from './src/screens/ValueChanger'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components:ComponentScreens,
    List:ListScreen,
    Image:ImageScreen,
    Value : ValueChanger
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
