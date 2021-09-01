import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { EpisodeDetail, ShowDetails, ShowSearch } from "../screens";
import { BLACK, WHITE } from "../utils/colors";

const ShowStackNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="ShowSearch"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="ShowSearch" component={ShowSearch} />
      <Stack.Screen
        name="ShowDetails"
        component={ShowDetails}
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
      <Stack.Screen
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
      />
    </Stack.Navigator>
  );
};

export default ShowStackNavigator;
