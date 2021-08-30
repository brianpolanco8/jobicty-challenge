import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { WHITE, WHITE_FOR_BORDERS } from "../utils/colors";

const GenresList = ({ genres }) => {
  return (
    <View style={styles.container} horizontal={true}>
      {genres?.map((genre, i) => (
        <View style={styles.itemContainer} key={i}>
          <Text style={styles.text}>{genre}</Text>
        </View>
      ))}
    </View>
  );
};

export default GenresList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 5,
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: WHITE_FOR_BORDERS,
    marginRight: 5,
    padding: 3,
  },
  text: { color: WHITE, fontSize: 15, fontWeight: "bold" },
});
