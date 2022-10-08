import React, { useState, useEffect } from "react";
import { Auth, API } from "aws-amplify";
import { View, FlatList, Text, Platform } from "react-native";
import { listRentOrders } from "../../graphql/queries";
import BorrowerHeadScreen from "../../components/BorrowerHead";
import AsyncStorage from '@react-native-async-storage/async-storage';

const BorrowerScreen = () => {
  const [newItems, setNewItems] = useState([]);
  const [userID, setUserID] = useState("");
  const [email, setEmail] = useState("");
  const [dataPresent, setDataPresent] = useState(true);
  const [substrEmail, setSubStrEmail] = useState("");

  const checkUser = () => {
    Auth.currentAuthenticatedUser()
    .then((user) => {
      setUserID(user.attributes.sub);
      setEmail(user.attributes.email);
      setSubStrEmail(email.substr(0, email.indexOf("@")));
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
  }

  const fetchAll = async () => {
    try {
      const orderList = await API.graphql({
        query: listRentOrders,
        variables: {
          filter: {
            borrowerUserId: { eq: userID },
          },
        },
      });

      setNewItems(orderList.data.listRentOrders.items);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if(!userID) {
      checkUser();
    }
      const data = newItems.length > 0 ? true : false;
      if(!data){
        AsyncStorage.getItem("borrow-data").then(value => {
          setNewItems(JSON.parse(value));
        });
        if(Platform.OS === "web"){
          fetchAll();
        }
      }
      setDataPresent(data);
  });

  return (
    <View>
    {dataPresent ? 
      <FlatList
        data={newItems}
        renderItem={({ item }) => <BorrowerHeadScreen BorrowerHead={item} />}
      />: 
        <View>
        <Text style={{display: "flex", justifyContent: "center", textAlign: "center", fontWeight: "bold"}}> {substrEmail ? "No Borrowing done yet by the user" : "please login first"}</Text>
      </View>}
    </View>
  );
};
export default BorrowerScreen;
