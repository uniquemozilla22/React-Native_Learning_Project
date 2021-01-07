import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import ComponentScreens from './src/screens/ComponentScreens'
import HomeScreen from "./src/screens/HomeScreen"
import ListScreen from './src/screens/ListScreen'
import ImageScreen from './src/screens/ImageScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components:ComponentScreens,
    List:ListScreen,
    Image:ImageScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
