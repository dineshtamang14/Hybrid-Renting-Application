import { Text, View, Image, Pressable, RefreshControl, ScrollView } from 'react-native';
import styles from "./styles";
import { useNavigation } from "@react-navigation/native"
import React, { useState } from "react";

const PostItems = (props) => {
  const singlePost = props.posts;
  const [images, setImages] = useState(JSON.parse(singlePost.images));
 
  const navigation = useNavigation();
    return (
        <Pressable onPress={() => {
          navigation.navigate('PostDetails', {
            postInfo: singlePost,
            //id: singlePost.id
          });
        }} style={styles.container}>
          <View style={styles.postWrap}>
          <Image source={{uri: "https://d3qz0eunla69v9.cloudfront.net/fit-in/400x400/public/" + images[0].imageUrl}} style={styles.postImage}></Image>
          <View style={styles.postContainWrap}>
            <View>
              <Text style={styles.postTitle}>{singlePost.title}</Text>
              <Text style={styles.postPlace}>{singlePost.locationName}</Text>
            </View>
            <Text style={styles.priceTag}>₹{singlePost.rentValue} / Day</Text>
          </View>
          </View>
        </Pressable>
    )
}

export default PostItems;