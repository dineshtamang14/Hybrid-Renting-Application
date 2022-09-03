import { StyleSheet, SafeAreaView, Platform } from 'react-native';
import { colors } from './src/modal/color';
import { StatusBar } from 'expo-status-bar';
import Route from './src/navigation/Router';
import 'react-native-gesture-handler'

import Amplify, { Auth } from "aws-amplify";
import awsconfig from './src/aws-exports';
Amplify.configure(awsconfig);

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaViewForDroid}>
      <StatusBar style="auto" backgroundColor='#fec85c60' />
      <Route />
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