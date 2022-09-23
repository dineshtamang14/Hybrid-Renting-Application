import React, { useState } from "react";
import {
  Text,
  View,
  Pressable,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";
import { colors } from "../../modal/color";
import { Auth } from "aws-amplify";

const MenuDetailsForDesktop = (props) => {
  const [logged, setLogged] = useState(false);
  Auth.currentAuthenticatedUser()
  .then((user) => {
      if(user.attributes.email){
        setLogged(true);
      } else {
        setLogged(false);
      }
  })
  .catch((err) => {
      console.log(err);
      throw err;
  })

  const navigation = useNavigation();
  const windowWidth = Number(Dimensions.get("window").width);
  return (
    <View style={{ position: "absolute", top: props.top, right: props.right }}>
      <View
        style={{
          display: props.menuToggle
            ? windowWidth > 800
              ? "flex"
              : "none"
            : "none",
          width: 200,
          backgroundColor: colors.secondary,
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
          padding: 20,
          shadowColor: colors.black,
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.9,
          shadowRadius: 5,
          elevation: 5,
        }}>
        <View>
          <Pressable
            onPress={() => {
              navigation.navigate("Home", { screen: "Journal" });
            }}
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              marginBottom: 10,
            }}>
            <FontAwesome5
              name="journal-whills"
              size={24}
              color={colors.white}
            />
            <Text style={{ color: colors.white, marginLeft: 10 }}>Journal</Text>
          </Pressable>
          <Pressable
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              marginBottom: 10,
            }}>
            <FontAwesome name="user-circle" size={24} color={colors.white} />
            <Text style={{ color: colors.white, marginLeft: 10 }}>Profile</Text>
          </Pressable>
          <Pressable
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              marginBottom: 10,
            }}
            onPress = {() => {
              if(logged){
                setLogged(false);
                Auth.signOut();
                alert("Your Signed Out...");
                navigation.navigate("Home", { screen: "Explore" });
              } else {
                navigation.navigate("Home", { screen: "Listing" });
              }
            }}
            >
            <AntDesign name="logout" size={24} color={colors.white} />
            <Text style={{ color: colors.white, marginLeft: 10 }}>{logged ? "Logout" : "Login"}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default MenuDetailsForDesktop;
