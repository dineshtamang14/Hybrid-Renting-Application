import { View, Text, TextInput, Dimensions } from 'react-native';
import styles from "./styles"
import { Feather, MaterialIcons } from '@expo/vector-icons';

const HeaderForMobile = () => {
  const windowWidth = Number(Dimensions.get("window").width);

  return(
    <>
    <View style={[
          styles.headerWrap,
          { display: windowWidth > 800 ? "none" : "flex" },
        ]}>
    <View style={styles.header_search}>
      <Feather name='search' size={24} color='black' />
      <TextInput placeholder='search in Rent.com' style={styles.header_search_input} multiline={false} />
    </View>
    <View style={styles.header_settings}>
    <View style={{flexDirection: 'row'}}>
    <MaterialIcons name="location-on" size={24} color="black" />
      <Text>Location</Text>
      <Text style={styles.location_text}>Mumbai</Text>
    </View>
    <View style={{flexDirection: 'row'}}>
    <MaterialIcons name="settings-input-composite" size={20} color="black" />
      <Text style={{marginLeft: 5}}>Category</Text>
      <Text style={styles.cat_text}>Vehicle</Text>
    </View>
    </View>
  </View>
  </>
  )
}

export default HeaderForMobile;