import { StyleSheet, SafeAreaView, Platform, View, Text, TextInput } from 'react-native';
import PostItems from "./src/components/postItems";
import { Feather } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaViewForDroid}>
      <View style={{
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: "#fec85c",
        alignItems: 'center'
        }}>
        <View style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          margin: 10,
          padding: 10,
          borderRadius: 5
        }}>
          <Feather name='search' size={24} color='black' />
          <TextInput placeholder='search in Rent.com' style={{
            width: "100%",
            marginLeft: 5
          }} multiline={false} />
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          paddingVertical: 10
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text>Location</Text>
          <Text style={{fontWeight: 'bold', marginLeft: 5}}>Mumbai</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>Category</Text>
          <Text style={{fontWeight: 'bold', marginLeft: 5}}>Vehicle</Text>
        </View>
        </View>
      </View>
      <PostItems />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaViewForDroid: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0
  }
});