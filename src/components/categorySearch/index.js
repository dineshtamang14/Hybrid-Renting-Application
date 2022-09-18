import React, { useMemo, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Alert,
  ScrollView,
  Pressable,
} from "react-native";
import { AssetsSelector } from "expo-images-picker";
import { MediaType } from "expo-media-library";
import { useNavigation } from "@react-navigation/native";
import { Entypo, Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import { colors } from "../../modal/color";
const CategorySearch = () => {
  const navigation = useNavigation();

  const [catState, setCatState] = useState({
    names: [
      {
        id: 0,

        fullIcon: (
          <Entypo style={styles.catIcon} name="home" size={24} color="black" />
        ),
        name: "Apartment",
      },
      {
        id: 1,
        fullIcon: (
          <Ionicons
            style={styles.catIcon}
            name="car-sport"
            size={24}
            color="black"
          />
        ),
        name: "Vehicle",
      },
      {
        id: 2,
        fullIcon: (
          <MaterialIcons
            style={styles.catIcon}
            name="room-preferences"
            size={24}
            color="black"
          />
        ),
        name: "Household Items",
      },
      {
        id: 3,
        fullIcon: (
          <Entypo style={styles.catIcon} name="book" size={24} color="black" />
        ),
        name: "Books",
      },
      {
        id: 4,
        fullIcon: (
          <AntDesign
            style={styles.catIcon}
            name="paperclip"
            size={24}
            color="black"
          />
        ),
        name: "Office Equipment",
      },
    ],
  });

  return (
    <ScrollView>
      <Text style={{ fontSize: 20, margin: 20 }}>Choose a Category</Text>
      {catState.names.map((item, index) => (
        <Pressable
          key={item.id}
          android_ripple={{ color: colors.grey }}
          style={{
            padding: 15,
            backgroundColor: colors.primary,
            alignItems: "center",
            justifyContent: "flex-start",
            flexDirection: "row",
            paddingLeft: 30,
            borderBottomWidth: 1,
            borderBottomColor: colors.grey,
          }}
          onPress={() => {
            navigation.navigate("Home", {
              screen: "Explore",
              params: {
                catID: item.id,
                catName: item.name,
              },
            });
          }}>
          {item.fullIcon}
          <Text>{item.name}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default CategorySearch;
