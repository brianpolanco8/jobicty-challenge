import "react-native-gesture-handler";
import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from "react-native";
import { TEST } from "@env";
import { SafeAreaProvider } from "react-native-safe-area-context";
import store from "./src/app/store";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./src/navigators/BottomTabNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Search } from "./src/screens";
import { BLACK } from "./src/utils/colors";

const height = Dimensions.get("window").height;

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Provider store={store}>
          <SafeAreaView style={{ flex: 1, backgroundColor: BLACK }}>
            <StatusBar barStyle="light-content" />
            <BottomTabNavigator />
          </SafeAreaView>
        </Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 1,
  },
});
