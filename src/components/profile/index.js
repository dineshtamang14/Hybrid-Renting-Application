import React, { useState, useEffect } from "react";
import { Auth, API } from "aws-amplify";
import { View, Text, Platform } from "react-native";

const Profile = () => {
  const [newItems, setNewItems] = useState([]);
  const [userID, setUserID] = useState("");
  const [email, setEmail] = useState("");
  const [currentUser, setCurrentUser] = useState("");


const checkUser = () => {
  Auth.currentAuthenticatedUser()
    .then((user) => {
      //   console.log("user id is: ", user.attributes.sub);
      setUserID(user.attributes.sub);
      setEmail(user.attributes.email);
      const substrEmail = email.substr(0, email.indexOf("@"));
      setCurrentUser(substrEmail);
      console.log("user details: ", user.attributes);
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
}

  useEffect(() => {
    checkUser();
  }, [])

  return (
    <View>
        <Text style={{display: "flex", justifyContent: "center", textAlign: "center", fontWeight: "bold"}}>Profile</Text>
        <Text>This is profile section</Text>
    </View>
  );
};
export default Profile;
