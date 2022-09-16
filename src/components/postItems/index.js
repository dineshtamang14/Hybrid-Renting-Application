import { Text, View, Image, Pressable } from 'react-native';
import styles from "./styles";
import { useNavigation } from "@react-navigation/native"

const PostItems = (props) => {
  const singlePost = props.posts;
 
  const navigation = useNavigation();
    return (
        <Pressable onPress={() => {
          navigation.navigate('PostDetails');
        }} style={styles.container}>
          <View style={styles.postWrap}>
          <Image source={{uri: "https://picsum.photos/200/300"}} style={styles.postImage}></Image>
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