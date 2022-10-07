import React, { useState } from "react";
import {
  Text,
  ScrollView,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { colors } from "../../modal/color";
const SelectLocationScreen = () => {
  const navigation = useNavigation();

  const [locState, setLocState] = useState({
    names: [
      {
        id: 0,
        name: "All"
      },
      {
        id: 1,
        name: "Mumbai",
      },
      {
        id: 2,
        name: "Pune",
      },
      {
        id: 3,
        name: "Banglore",
      },
      {
        id: 4,
        name: "Kolkata",
      },
      {
        id: 5,
        name: "Hydrabad",
      },
      {
        id: 6,
        name: "Chennai"
      },
      {
        id: 7,
        name: "Ahmedabad"
      },
      {
        id: 8,
        name: "Visakhapatnam"
      },
      {
        id: 9,
        name: "Vadodara"
      },
      {
        id: 10,
        name: "Bhopal"
      },
      {
        id: 11,
        name: "Lucknow"
      },
      {
        id: 12,
        name: "Indore"
      },
      {
        id: 13,
        name: "Surat"
      },
      {
        id: 14,
        name: "Jaipur"
      },
      {
        id: 15,
        name: "Patna"
      }
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
            navigation.navigate("Listing", {
              locID: item.id,
              locName: item.name,
            });
          }}>
          <Text>{item.name}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default SelectLocationScreen;