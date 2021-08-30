import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Search } from "../screens";
import AntIcon from "react-native-vector-icons/AntDesign";
import { BLACK, DARKGREEN, YELLOW } from "../utils/colors";
import ShowStackNavigator from "./ShowStackNavigator";
import PeopleStackNavigator from "./PeopleStackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
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
        component={ShowStackNavigator}
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <AntIcon name="search1" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="People"
        component={PeopleStackNavigator}
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <AntIcon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
