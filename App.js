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
import { Home, ShowSearch } from "./src/screens";
import { BLACK } from "./src/utils/colors";
import HomeStackNavigator from "./src/navigators/HomeStackNavigator";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persistor = persistStore(store);

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <SafeAreaView style={{ flex: 1, backgroundColor: BLACK }}>
              <StatusBar barStyle="light-content" />
              <HomeStackNavigator />
            </SafeAreaView>
          </PersistGate>
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
