import React, { useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HeaderForDesktop from "../components/headerForDesktop";
import MenuDetailsForDesktop from "../components/menuDetailsForDesktop";
import BorrowerScreen from "../screens/borrower";
import LenderScreen from "../screens/Lender";

const Tab = createMaterialTopTabNavigator();

const LendBorrowerNavScreen = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <>
      <HeaderForDesktop setMenuToggle={setMenuToggle} menuToggle={menuToggle} />
      <Tab.Navigator sceneContainerStyle={{ paddingTop: 10 }}>
        <Tab.Screen name={"BorrowerScreen"} component={BorrowerScreen} />
        <Tab.Screen name={"LenderScreen"} component={LenderScreen} />
      </Tab.Navigator>
      <MenuDetailsForDesktop menuToggle={menuToggle} top={59} right={"7.8%"} />
    </>
  );
};
export default LendBorrowerNavScreen;
