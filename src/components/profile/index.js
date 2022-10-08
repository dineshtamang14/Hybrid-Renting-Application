import React, { useState, useEffect } from "react";
import { Auth, API } from "aws-amplify";
import { View, Text, Platform } from "react-native";

const Profile = () => {
  const [newItems, setNewItems] = useState([]);
  const [userID, setUserID] = useState("");
  const [email, setEmail] = useState("");

  Auth.currentAuthenticatedUser()
    .then((user) => {
      //   console.log("user id is: ", user.attributes.sub);
      setUserID(user.attributes.sub);
      setEmail(user.attributes.email);
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });

  return (
    <View>
        <Text style={{display: "flex", justifyContent: "center", textAlign: "center", fontWeight: "bold"}}>Profile</Text>
        <Text>This is profile section</Text>
    </View>
  );
};
export default Profile;
