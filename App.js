import { createAppContainer } from "react-navigation";
import { createStackNavigator, HeaderTitle } from "react-navigation-stack";
import ComponentScreens from "./src/screens/ComponentScreens";
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import ValueChanger from "./src/screens/ValueChanger";
import ColorScreens from "./src/screens/ColorScreens";
import ColorSquare from "./src/screens/colorSquareScreen";
import TextInputScreen from "./src/screens/TextInputScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreens,
    List: ListScreen,
    Image: ImageScreen,
    Value: ValueChanger,
    Sqaure: ColorSquare,
    Color: ColorScreens,
    TextInput: TextInputScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App ",
    },
  }
);

export default createAppContainer(navigator);
