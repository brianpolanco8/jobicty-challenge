import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";

import { BLACK, WHITE, YELLOW } from "../utils/colors";

const { height, width } = Dimensions.get("window");

const SettingsRow = ({
  title,
  iconName,
  iconSize = 25,
  iconColor = YELLOW,
  navigateTo,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(navigateTo)}>
      <View style={styles.container}>
        <AntIcon
          name={iconName}
          size={iconSize}
          iconColor={iconColor}
          style={styles.icon}
        />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SettingsRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    backgroundColor: YELLOW,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
  icon: {
    marginRight: 10,
  },
  title: {
    color: BLACK,
    fontSize: 18,
  },
});
