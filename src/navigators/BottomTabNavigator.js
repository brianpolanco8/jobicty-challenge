import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Search } from "../screens";
import AntIcon from "react-native-vector-icons/AntDesign";
import { BLACK, DARKGREEN, YELLOW } from "../utils/colors";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Search"
      screenOptions={{
        // tabBarActiveBackgroundColor: "yellow",
        tabBarActiveTintColor: YELLOW,
        tabBarStyle: {
          backgroundColor: BLACK,
          justifyContent: "center",
          alignItems: "center",
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <AntIcon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <AntIcon name="search1" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
