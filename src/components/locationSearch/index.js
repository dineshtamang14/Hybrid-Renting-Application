import React, { useState } from "react";
import {
  Text,
  ScrollView,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { colors } from "../../modal/color";
const LocationSearch = () => {
  const navigation = useNavigation();

  const [locState, setLocState] = useState({
    names: [
      {
        id: 0,
        name: "Mumbai",
      },
      {
        id: 1,
        name: "Pune",
      },
      {
        id: 2,
        name: "Banglore",
      },
      {
        id: 3,
        name: "Kolkata",
      },
      {
        id: 4,
        name: "Hydrabad",
      },
    ],
  });

  return (
    <ScrollView>
      <Text style={{ fontSize: 20, margin: 20 }}>Select a Location</Text>
      {locState.names.map((item, index) => (
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
                locID: item.id,
                locName: item.name,
              },
            });
          }}>
          <Text>{item.name}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default LocationSearch;
