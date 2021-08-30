import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { GRAY, WHITE } from "../utils/colors";
import { useNavigation } from "@react-navigation/native";

// DIMENSIONS
const { width, height } = Dimensions.get("window");

const PeopleSearchResult = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("PeopleDetail", {
          id: item?.person?.id,
          name: item?.person?.name,
        })
      }
    >
      <View style={styles.personContainer}>
        <Image
          source={
            item?.person?.image?.original
              ? {
                  uri: item?.person?.image?.original,
                }
              : require("../../assets/notFound.jpg")
          }
          style={styles.personImage}
        />
        <View style={styles.personTextContainer}>
          <Text style={styles.personTitle}>{item?.person?.name}</Text>
          <Text style={styles.personDescription}>
            {item?.person?.country?.name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PeopleSearchResult;

const styles = StyleSheet.create({
  personContainer: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    borderBottomColor: GRAY,
  },
  personImage: {
    height: height * 0.15,
    width: height * 0.1,
  },
  personTextContainer: {
    margin: 5,
    flexShrink: 1,
  },
  personTitle: {
    color: WHITE,
    fontWeight: "bold",
  },
  personDescription: {
    color: WHITE,
    fontSize: 12,
    fontWeight: "300",
  },
});
