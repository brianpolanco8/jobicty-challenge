import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SearchBar } from "react-native-elements";
import { api } from "../app/api";
import { BLACK, YELLOW } from "../utils/colors";

const Searchbar = ({ onChange, value }) => {
  return (
    <View>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={(text) => onChange(text)}
        value={value}
        style={{ backgroundColor: BLACK }}
        inputStyle={{ backgroundColor: BLACK }}
        labelStyle={{ backgroundColor: BLACK }}
        containerStyle={{ backgroundColor: YELLOW, borderRadius: 10 }}
        inputContainerStyle={{ backgroundColor: BLACK }}
      />
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({});
