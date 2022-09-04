import { StyleSheet } from 'react-native';
import { colors } from '../../modal/color';

const styles = StyleSheet.create({
  listing_imgupload: {
      backgroundColor: colors.white,
      display: 'flex',
      justifyContent: "center",
      alignItems: 'center',
      marginVertical: 20,
      height: 150,
      width: 150,
      borderWidth: 1,
      borderStyle: "dashed",
      borderRadius: 30,
  },

  listing_cat: {
      display: 'flex',
      justifyContent: "space-between",
      alignItems: 'center',
      flexDirection: 'row',
      marginBottom: 20,
      paddingVertical: 10,
      backgroundColor: colors.white,
      borderRadius: 30,
      paddingLeft: 10,
      paddingRight: 5
  },

  inputText: {
    paddingVertical: 10,
    backgroundColor: colors.white,
    borderRadius: 30,
    paddingLeft: 20,
    paddingRight: 10,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center"
  },

  post_adv: {
    margin: 10,
    borderRadius: 30,
    backgroundColor: colors.secondary,
    alignItems: "center",
    paddingLeft: 20,
    elevation: 5,
  },

  post_adv_text: {
    color: colors.white,
    paddingVertical: 12,
    fontSize: 14.5,
    fontWeight: "bold"
  }
});
  
  export default styles;