import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SettingsRow } from "../../components";
import { BLACK, WHITE } from "../../utils/colors";

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings</Text>
      <SettingsRow
        title="Change Passcode"
        iconName="lock"
        navigateTo="ChangePasscode"
      />
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLACK,
  },
  text: {
    color: WHITE,
    fontSize: 30,
    fontWeight: "bold",
    margin: 20,
  },
});
