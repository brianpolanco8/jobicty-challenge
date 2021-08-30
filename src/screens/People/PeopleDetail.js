import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-elements";
import AntIcon from "react-native-vector-icons/AntDesign";

import { BLACK, WHITE, YELLOW } from "../../utils/colors";
import { fetch, removeHTMLTags } from "../../utils/helpers";
import { api } from "../../app/api";
import { Episodes, GenresList } from "../../components";

// DIMENSIONS
const { width, height } = Dimensions.get("window");

const PeopleDetailsScreen = ({ route }) => {
  const navigation = useNavigation();
  const [peopleDetails, setPeopleDetails] = useState({});
  const [isLoading, setIsLoading] = useState({});

  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      fetch(api.people.peopleDetail, setPeopleDetails, route?.params?.id),
    ]).then((result) => {
      navigation.setOptions({ title: peopleDetails.name });
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: BLACK,
        }}
      >
        <ActivityIndicator size="large" color={WHITE} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        {/* Header View*/}
        <View style={styles.headerView}>
          <View style={styles.imageContainer}>
            <Text style={styles.title}>{peopleDetails.name}</Text>

            {/* IMAGE */}
            <Image
              style={styles.image}
              source={{
                uri: peopleDetails?.image?.original,
              }}
            />
          </View>
          <View style={styles.headerViewTextContainer}>
            {/* Description */}
            <Text style={styles.peopleSummary}>
              {removeHTMLTags(peopleDetails?.summary)}
            </Text>
          </View>
        </View>

        <View style={styles.extraInfo}>
          {peopleDetails?.birthday && (
            <Text style={styles.text}>{peopleDetails?.birthday}</Text>
          )}

          {peopleDetails?.gender && (
            <Text style={styles.text}>{peopleDetails?.gender}</Text>
          )}

          {peopleDetails?.country?.name && (
            <Text style={styles.text}>{peopleDetails?.country?.name}</Text>
          )}
        </View>
      </View>
    );
  }
};

export default PeopleDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLACK,
    color: WHITE,
    paddingHorizontal: 5,
    alignItems: "center",
    // justifyContent: "center",
  },

  title: {
    color: WHITE,
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "stretch",
  },
  imageContainer: {},
  image: {
    height: height * 0.15,
    width: height * 0.1,
  },
  headerView: { flexDirection: "row", marginTop: 50 },
  headerViewTextContainer: {
    paddingHorizontal: 10,
    flexShrink: 1,
  },
  peopleSummary: { color: WHITE, flexShrink: 1 },
  extraInfo: {
    flexDirection: "row",
    padding: 5,
  },
  text: {
    color: WHITE,
    marginRight: 10,
    borderWidth: 1,
    borderColor: YELLOW,
    marginTop: 15,
    borderRadius: 5,
    padding: 20,
  },
});
