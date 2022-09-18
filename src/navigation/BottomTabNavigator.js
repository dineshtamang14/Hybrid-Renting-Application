import { Entypo, FontAwesome, MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { colors } from "../modal/color";
import Home from "../screens/Home";
import Listing from "../screens/Listing";
import { Dimensions } from "react-native";
import LendBorrowerNavScreen from "./LendBorrNav";

const BottomTabNav = () => {
    const windowWidth = Number(Dimensions.get("window").width);

    const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{ 
        //tabBarActiveBackgroundColor: colors.primary, 
        tabBarActiveTintColor: colors.secondary, 
        tabBarStyle: { backgroundColor: colors.primary, height: 50, display: windowWidth > 800 ? "none" : "flex" } 
        }} 
        sceneContainerStyle={{backgroundColor: colors.backgroundColor}}>
        <Tab.Screen name={"Explore"} component={Home} options={{
            tabBarIcon: ({color}) => (
                <FontAwesome name="home" size={25} color={colors.secondary} />
            ),
            headerShown: false,
        }} />
                <Tab.Screen name={"Listing"} component={Listing} options={{
            tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="clipboard" size={24} color="black" />
            ),
            headerShown: false,
        }} />
                <Tab.Screen name={"Journal"} component={LendBorrowerNavScreen} options={{
            tabBarIcon: ({color}) => (
                <FontAwesome5 name="journal-whills" size={24} color="black" />
            ),
            headerShown: false,
        }} />
                <Tab.Screen name={"Profile"} component={Home} options={{
            tabBarIcon: ({color}) => (
                <FontAwesome name="user-circle" size={24} color="black" />
            ),
        }} />
    </Tab.Navigator>
  );
}

export default BottomTabNav;