import React, { useEffect, useState } from "react";
import HeaderForMobile from '../../components/headerForMobile';
import PostItems from "../../components/postItems";
import { API } from "aws-amplify";
import { getListingByCreatedAt, searchListings } from "../../graphql/queries";
import { FlatList } from "react-native";

const Home = () => {
  const [newItems, setNewItems] = useState([]);

  const fetchAll = async () => {
    try {
      const itemListByCommonID = await API.graphql({
        query: getListingByCreatedAt,
        variables: { commonID: "1", sortDirection: "DESC" },
        authMode: "AWS_IAM",
      });

      setNewItems(itemListByCommonID.data.getListingByCreatedAt.items);
      console.log(newItems)
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <>
      <HeaderForMobile />
      <FlatList 
        data = {newItems}
        renderItem = {({item}) => <PostItems posts={item} /> }
      />
    </>
  );
}

export default Home;