import { StyleSheet } from 'react-native';
import { colors } from '../../modal/color';

const styles = StyleSheet.create({
    container: {
      flex: 1,
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
      backgroundColor: colors.white,
      marginHorizontal: 10,
      borderRadius: 10,
      shadowColor: colors.black,
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
      color: colors.primary,
      backgroundColor: colors.secondary,
      alignSelf: 'flex-start',
      padding: 5,
      borderRadius: 10
    },
  
    postTitle: {
      fontWeight: 'bold'
    },
  
    postPlace: {
      color: colors.grey
    },
  });
  
  export default styles;