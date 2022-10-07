import React, { useState, useEffect } from "react";
import { Auth, API } from "aws-amplify";
import { View, FlatList, Text } from "react-native";
import { listRentOrders } from "../../graphql/queries";
import BorrowerHeadScreen from "../../components/BorrowerHead";
const BorrowerScreen = () => {
  const [newItems, setNewItems] = useState([]);
  const [userID, setUserID] = useState("");
  const [email, setEmail] = useState("");

  Auth.currentAuthenticatedUser()
    .then((user) => {
      setUserID(user.attributes.sub);
      setEmail(user.attributes.email);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

    const substrEmail = email.substr(0, email.indexOf("@"));

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
    fetchAll();
  }, []);

  const [dataPresent, setDataPresent] = useState(newItems.length > 0 ? true: false);

  return (
    <View>
    {dataPresent ? 
      <FlatList
        data={newItems}
        renderItem={({ item }) => <BorrowerHeadScreen BorrowerHead={item} />}
      />: 
        <View>
        <Text style={{display: "flex", justifyContent: "center", textAlign: "center", fontWeight: "bold"}}>No Borrowing done yet by {substrEmail}</Text>
      </View>}
    </View>
  );
};
export default BorrowerScreen;
