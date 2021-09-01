import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens";
import AntIcon from "react-native-vector-icons/AntDesign";
import { BLACK, YELLOW } from "../utils/colors";
import ShowStackNavigator from "./ShowStackNavigator";
import PeopleStackNavigator from "./PeopleStackNavigator";
import FavoritesStackNavigator from "./FavoritesStackNavigator";
import SettingsStackNavigator from "./SettingsStackNavigator";

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
          tabBarIcon: ({ color, size }) => (
            <AntIcon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={ShowStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntIcon name="search1" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="People"
        component={PeopleStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntIcon name="user" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesStackNavigator}
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <AntIcon name="hearto" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntIcon name="setting" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
