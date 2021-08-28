import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { GRAY, WHITE } from "../utils/colors";

// DIMENSIONS
const { width, height } = Dimensions.get("window");

const SearchResult = ({ item }) => {
  return (
    <View style={styles.showContainer}>
      <Image
        source={
          item?.show?.image?.original
            ? {
                uri: item?.show?.image?.original,
              }
            : require("../../assets/notFound.jpg")
        }
        style={styles.showImage}
      />
      <View style={styles.showTextContainer}>
        <Text style={styles.showTitle}>{item?.show?.name}</Text>
        <Text style={styles.showDescription}>
          {item?.show?.network?.name && item?.show?.genres[0]
            ? `${item?.show?.network?.name} - ${item?.show?.genres[0]}`
            : item?.show?.network?.name || item?.show?.genres[0] || ""}
        </Text>
        {/* <Text style={styles.showDescription}>
                {removeHTMLTags(item?.show?.summary)}
              </Text> */}
      </View>
    </View>
  );
};

export default SearchResult;

const styles = StyleSheet.create({
  showContainer: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    borderBottomColor: GRAY,
  },
  showImage: {
    height: height * 0.15,
    width: height * 0.1,
  },
  showTextContainer: {
    margin: 5,
    flexShrink: 1,
  },
  showTitle: {
    color: WHITE,
    fontWeight: "bold",
  },
  showDescription: {
    color: WHITE,
    fontWeight: "300",
  },
});
