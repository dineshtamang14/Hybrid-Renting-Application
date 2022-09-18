import { View, Text, TextInput, Dimensions, Pressable } from 'react-native';
import styles from "./styles"
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const HeaderForMobile = (props) => {
  const navigation = useNavigation();
  const windowWidth = Number(Dimensions.get("window").width);
  function onSearch(e) {
    props.setSearchText(e);
  }

    return (
      <>
        <View
          style={[
            styles.headerWrap,
            { display: windowWidth > 800 ? "none" : "flex" },
          ]}>
          <View style={styles.searchByTextWrap}>
            <Feather name="search" size={24} color="black" />
            <TextInput
              placeholder="Search in Rent.com"
              style={[styles.searchPlaceholder, { width: "100%" }]}
              multiline={false}
              onSubmitEditing={(event) => onSearch(event.nativeEvent.text)}
            />
          </View>
          <View style={styles.locationCatSearchWrap}>
            <Pressable
              onPress={() => {
                navigation.navigate("LocationSearch");
              }}
              style={styles.locationSearchWrap}>
              <MaterialIcons name="location-on" size={24} color="black" />
              <Text>Location</Text>
              <Text style={styles.locationSearchText}>
                {props.searchByLocation.locationName}
              </Text>
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate("CategorySearch");
              }}
              style={{ flexDirection: "row" }}>
              <MaterialIcons name="settings-input-composite" size={20} color="black" />
              <Text style={styles.catText}>Category</Text>
              <Text style={styles.catDynText}>
                {props.searchByCategory.catName}
              </Text>
            </Pressable>
          </View>
        </View>
      </>
    );
  };
  export default HeaderForMobile;