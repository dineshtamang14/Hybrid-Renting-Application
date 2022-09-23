import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Dimensions,
  Image,
  Pressable,
  Button,
} from "react-native";
import styles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../modal/color";
import { useNavigation } from "@react-navigation/native";
const HeaderForDesktop = (props) => {
  const navigation = useNavigation();
  const windowWidth = Number(Dimensions.get("window").width);
  const [inputSearchText, setInputSearchText] = useState("");
  function onSearchText() {
    props.setSearchText(inputSearchText);
  }
  return (
    <>
      <View
        style={[
          {
            display: windowWidth > 800 ? "flex" : "none",
            height: 80,
            backgroundColor: colors.primary,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            shadowColor: colors.black,
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.9,
            shadowRadius: 5,
            elevation: 5,
          },
        ]}>
        <View
          style={{
            width: "80%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}>
            <Pressable
              onPress={() => {
                navigation.navigate("Home", { screen: "Explore" });
              }}
              style={{
                height: 60,
                width: 200,
                justifyContent: "center",
                alignItems: "flex-start",
              }}>
              <Image
                resizeMode="contain"
                source={require("../../../assets/rent-logo.png")}
                style={{ width: "100%", height: "100%" }}
              />
            </Pressable>
            <View
              style={{
                marginLeft: 15,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <TextInput
                multiline={false}
                placeholder="Search Rent"
                onChangeText={(text) => setInputSearchText(text)}
                style={{
                  backgroundColor: colors.white,
                  height: 40,
                  width: 250,
                  padding: 5,
                  borderBottomLeftRadius: 5,
                  borderTopLeftRadius: 5,
                  borderWidth: 2,
                  borderColor: colors.secondary,
                }}
              />
              <Pressable
                onPress={() => {
                  onSearchText();
                }}>
                <Text
                  style={{
                    backgroundColor: colors.primary,
                    height: 40,
                    padding: 8.5,
                    borderBottomRightRadius: 5,
                    borderTopRightRadius: 5,
                    borderWidth: 2,
                    borderColor: colors.secondary,
                    marginLeft: -1.8,
                    fontWeight: "bold",
                    color: colors.secondary,
                  }}>
                  Search
                </Text>
              </Pressable>
            </View>
            <Pressable
              onPress={() => {
                navigation.navigate("LocationSearch");
              }}
              style={{
                flexDirection: "row",
                paddingVertical: 15,
                paddingHorizontal: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <MaterialIcons
                name="location-on"
                size={24}
                color={colors.secondary}
              />
              <Text style={{ color: colors.secondary }}>
                Location{" "}
                <Text style={{ fontWeight: "bold", color: colors.secondary }}>
                  {props.searchByLocation
                    ? props.searchByLocation.locationName
                    : "Mumbai"}
                </Text>
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <View>
              <Button
                onPress={() => {
                  navigation.navigate("Home", { screen: "Listing" });
                }}
                title="Add Property"
                color={colors.green}
              />
            </View>
            <View style={{ marginLeft: 10 }}>
              <Button
                title="Menu"
                color={colors.secondary}
                onPress={() => {
                  props.setMenuToggle(!props.menuToggle);
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
export default HeaderForDesktop;