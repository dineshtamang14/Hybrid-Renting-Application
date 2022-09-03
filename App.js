import { StyleSheet, SafeAreaView, Platform } from 'react-native';
import Header from './src/components/headerForMobile';
import PostItems from "./src/components/postItems";
import { colors } from './src/modal/color';

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaViewForDroid}>
      <Header />
      <PostItems />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaViewForDroid: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    backgroundColor: colors.background
  }
});