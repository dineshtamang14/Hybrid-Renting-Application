import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Home from "../screens/Home"
import PostDetails from "../screens/postDetails";
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
        </stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;