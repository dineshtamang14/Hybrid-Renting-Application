import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import PostDetails from "../screens/postDetails";
import SelectCategoryScreen from "../screens/selectCategory";
import SelectLocationScreen from "../screens/selectLocation";
import SelectPhotosScreen from "../screens/selectPhotos";
import BottomTabNav from "./BottomTabNavigator";
import LocationSearch from "../components/locationSearch";
import CategorySearch from "../components/categorySearch";

const Route = () => {
    const stack = createStackNavigator();

  return (
    <NavigationContainer
    linking={{
        prefixes: ["myapp://", "https://dineshtamang.tech", "https://*.dineshtamang.tech"],
        config: {
          screens: {
            Home: {
              screens: {
                Explore: "/Explore",
                Listing: "/Listing",
                Chat: "/Chat",
                Profile: "/Profile",
              },
            },
            SelectLocation: "/SelectLocation",
            PostDetails: "/PostDetails",
          },
        },
      }}>

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
            <stack.Screen name="LocationSearch" component={LocationSearch} options={{headerShown: false}} />
            <stack.Screen name="CategorySearch" component={CategorySearch} options={{headerShown: false}} />
        </stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;