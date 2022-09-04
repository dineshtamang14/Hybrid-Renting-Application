import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Home from "../screens/Home"
import PostDetails from "../screens/postDetails";
import SelectCategoryScreen from "../screens/selectCategory";
import SelectLocationScreen from "../screens/selectLocation";
import SelectPhotosScreen from "../screens/selectPhotos";
import BottomTabNav from "./BottomTabNavigator";

const Route = () => {
    const stack = createStackNavigator();

  return (
    <NavigationContainer>
        <stack.Navigator screenOptions={{
            cardStyle: {
                backgroundColor: "#fec85c60"
            }
        }}>
            <stack.Screen name="Home" component={BottomTabNav} options={{headerShown: false}} />
            <stack.Screen name="PostDetails" component={PostDetails} options={{headerShown: false}} />
            <stack.Screen name="SelectPhotos" component={SelectPhotosScreen} options={{headerShown: false}} />
            <stack.Screen name="SelectCategory" component={SelectCategoryScreen} options={{headerShown: false}} />
            <stack.Screen name="SelectLocation" component={SelectLocationScreen} options={{headerShown: false}} />
        </stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;