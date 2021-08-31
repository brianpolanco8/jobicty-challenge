import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { EpisodeDetail, Home, ShowDetails, ShowSearch } from "../screens";
import { BLACK, WHITE, YELLOW } from "../utils/colors";
import FavoritesShows from "../screens/Favorites/FavoritesShows";

const FavoritesStackNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="FavoritesShows"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="FavoritesShows" component={FavoritesShows} />
    </Stack.Navigator>
  );
};

export default FavoritesStackNavigator;
