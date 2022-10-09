import React, { useState, useEffect } from "react";
import { Auth, API } from "aws-amplify";
import { View, Text, Platform , Alert} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../modal/color"

const Profile = () => {
  const [userID, setUserID] = useState("");
  const [email, setEmail] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [signIn, setSignIn] = useState();
  const navigation = useNavigation();


const checkUser = async () => {
  try {
    const user = await Auth.currentAuthenticatedUser({bypassCache: true});
    setEmail(user.attributes.email);
    setSignIn(true);
    const substrEmail = email.substr(0, email.indexOf("@"));
    setCurrentUser(substrEmail);
  } catch (error) {
    console.log(error);
  }
}

  useEffect(() => {
    checkUser();
  })

  const signOut = () => {
    if(signIn){
      Auth.signOut();
      setSignIn(false);
      Alert.alert("your sign out successfully");
      navigation.navigate("Home", { screen: "Explore" });
    } else {
      navigation.navigate("Home", { screen: "Listing" });
    }
  }

  return (
        <View style={{flex: 1, position: "relative"}}>
        <View style={{
          alignItems: "center", 
          top: 80, 
          flexDirection: "row",
          left: 13
        }}>
            <View
              style={{
                backgroundColor: colors.secondary,
                height: 50,
                width: 50,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 50,
                paddingRight: 5,
                marginRight: 10,
              }}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  color: colors.primary,
                }}>
                {" "}
                {currentUser.charAt(0).toUpperCase()}
              </Text>
            </View>
            <View>
              <Text style={{ color: colors.grey }}>Owned by</Text>
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                {currentUser}
              </Text>
            </View>
            </View>
            <Text 
              onPress={signOut}
            style={{
              width: "100%",
              textAlign: "center",
              color: "red",
              marginTop: "auto",
              marginVertical: 20,
              fontSize: 20
            }}>
              {signIn ? "Sign out" : "Sign in"}
            </Text>
        </View>
  );
};
export default Profile;
