import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { PeopleSearch, PeopleDetail } from "../screens";
import { BLACK, WHITE, YELLOW } from "../utils/colors";

const PeopleStackNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="PeopleSearch"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="PeopleSearch" component={PeopleSearch} />
      <Stack.Screen
        name="PeopleDetail"
        component={PeopleDetail}
        options={{
          headerShown: true,
          headerStyle: {
            height: 80,
            backgroundColor: BLACK,
          },
          headerTitleStyle: { color: WHITE },
          headerBackTitleStyle: { color: WHITE },
          headerBackTitleVisible: false,
        }}
      />
      {/* <Stack.Screen
        name="EpisodeDetail"
        component={EpisodeDetail}
        options={{
          headerShown: true,
          headerStyle: {
            height: 80,
            backgroundColor: BLACK,
          },
          headerTitleStyle: { color: WHITE },
          headerBackTitleStyle: { color: WHITE },
          headerBackTitleVisible: false,
        }}
      /> */}
    </Stack.Navigator>
  );
};

export default PeopleStackNavigator;
