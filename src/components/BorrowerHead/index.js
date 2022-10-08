import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
const BorrowerHeadScreen = (props) => {
  const navigation = useNavigation();
  const singlePost = props.BorrowerHead;
  console.log("singlePost: ", singlePost);
  const [images, setimages] = useState(JSON.parse(singlePost.listing.images));

  return (
    <View
      style={
        {
          // width: "100%",
          // justifyContent: "center",
          // alignItems: "center",
        }
      }>
      <Pressable
          onPress={() => {
            navigation.navigate("PostDetails", {
              postInfo: singlePost.listing,
            });
          }}

        style={[
          styles.container,
          // {
          //   width: "60%",
          //   alignItems: "center",
          // },
        ]}>
        <View style={styles.postWrap}>
          <Image
            source={{
              uri:
                "https://dtjhbqhj69dt.cloudfront.net/fit-in/400x400/public/" +
                images[0].imageUrl,
            }}
            style={styles.postImage}></Image>
          <View style={styles.postContentWrap}>
            <View>
              <Text style={styles.postTitle}>{singlePost.listing.title}</Text>
              <Text style={styles.postPlace}>
                {singlePost.listing.locationName}
              </Text>
            </View>
            <Text style={styles.postValue}>
              ₹{singlePost.listing.rentValue} / Day
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};
export default BorrowerHeadScreen;
