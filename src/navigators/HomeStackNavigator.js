import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { EpisodeDetail, ErrorScreen, Home, LockScreen, ShowDetails } from "../screens";
import { BLACK, WHITE } from "../utils/colors";
import BottomTabNavigator from "./BottomTabNavigator";
import {ErrorBoundary} from 'react-error-boundary'


const HomeStackNavigator = () => {
  const Stack = createStackNavigator();

  return (
    // <ErrorBoundary FallbackComponent={ErrorScreen}>
    <Stack.Navigator
      initialRouteName="LockScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="LockScreen" component={LockScreen} />
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
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
    // </ErrorBoundary>
  );
};

export default HomeStackNavigator;
