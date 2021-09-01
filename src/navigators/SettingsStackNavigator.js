import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ChangePasscode, SettingsScreen } from "../screens";
import { BLACK, WHITE } from "../utils/colors";

const SettingsStackNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen
        name="ChangePasscode"
        component={ChangePasscode}
        options={{
          headerShown: false,
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

export default SettingsStackNavigator;
