import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    safeAreaViewForDroid: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? 25 : 0
    },  
  
    container: {
      flex: 1,
      backgroundColor: '#fec85c60',
    },
  
    postImage: {
      width: 100,
      height: 100,
      borderRadius: 30,
      marginRight: 20,
      marginLeft: 10,
      marginVertical: 10
    },
  
    postWrap: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: 'white',
      marginHorizontal: 10,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.8,
      shadowRadius: 1,
      elevation: 5
    }, 
  
    postContainWrap: {
      justifyContent: 'space-around', 
      paddingVertical: 10
    },
  
    priceTag: {
      color: '#fec85c',
      backgroundColor: '#293241',
      alignSelf: 'flex-start',
      padding: 5,
      borderRadius: 10
    },
  
    postTitle: {
      fontWeight: 'bold'
    },
  
    postPlace: {
      color: 'grey'
    },
  });
  
  export default styles;