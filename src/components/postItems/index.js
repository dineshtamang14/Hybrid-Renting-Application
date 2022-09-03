import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import styles from "./styles";

const PostItems = () => {
    return (
        <View style={styles.container}>
        <StatusBar style="auto" backgroundColor='#fec85c60' />
          <View style={styles.postWrap}>
          <Image source={{uri: "https://picsum.photos/200/300"}} style={styles.postImage}></Image>
          <View style={styles.postContainWrap}>
            <View>
              <Text style={styles.postTitle}>Taj Hotel</Text>
              <Text style={styles.postPlace}>Mumbai</Text>
            </View>
            <Text style={styles.priceTag}>$100 / Day</Text>
          </View>
          </View>
        </View>
    )
}

export default PostItems;