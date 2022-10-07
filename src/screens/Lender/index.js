import React, { useState, useEffect } from "react";
import { Auth, API } from "aws-amplify";
import { View, FlatList, Text, Platform } from "react-native";
import { listRentOrders } from "../../graphql/queries";
import LenderHeadScreen from "../../components/LenderHead";
import AsyncStorage from '@react-native-async-storage/async-storage';

const LenderScreen = () => {
  const [newItems, setNewItems] = useState([]);
  const [userID, setUserID] = useState("");
  const [email, setEmail] = useState("");
  const [refresh, setRefresh] = useState(false);

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

    const substrEmail = email.substr(0, email.indexOf("@"));

  const fetchAll = async () => {
    try {
      const orderList = await API.graphql({
        query: listRentOrders,
        variables: {
          filter: {
            lenderUserID: { eq: userID },
          },
        },
      });

      setNewItems(orderList.data.listRentOrders.items);
      try {
        if(Platform.OS !== "web"){
          await AsyncStorage.setItem("lend-data", JSON.stringify(newItems));
        }
      } catch (err) {
        console.error(err);
        throw err;
      }
    } catch (err) {
      console.error(err);
      throw err;
    }
  };
  
  useEffect(() => {
    if(Platform.OS === "web"){
      fetchAll();
    }
    try {
      AsyncStorage.getItem("lend-data").then(value => {
        if(value === null){
          fetchAll();
        } else {
          setNewItems(JSON.parse(value));
        }
      })
    } catch (err) {
      console.error(err);
      throw err;
    }
  });
  
  const dataPresent = newItems.length > 0 ? true : false;

  return (
    <View>
      {dataPresent ? 
      <FlatList
        data={newItems}
        renderItem={({ item }) => <LenderHeadScreen BorrowerHead={item} />}
      /> : <View>
        <Text style={{display: "flex", justifyContent: "center", textAlign: "center", fontWeight: "bold"}}>No Lending done yet by {substrEmail}</Text>
      </View>}
    </View>
  );
};
export default LenderScreen;
