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
import AwesomeAlert from "react-native-awesome-alerts";

import { BLACK, WHITE, YELLOW } from "../utils/colors";
import { fetch, removeHTMLTags } from "../utils/helpers";
import { api } from "../app/api";
import { Episodes, GenresList } from "../components";

const notFoundImage = require("../../assets/notFound.jpg");

// DIMENSIONS
const { width, height } = Dimensions.get("window");

const ShowDetailsScreen = ({ route }) => {
  const navigation = useNavigation();
  const [showDetails, setShowDetails] = useState({});
  const [showEpisodes, setShowEpisodes] = useState([]);
  const [showSeasons, setShowSeasons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      fetch(api.search.getShowDetail, setShowDetails, route?.params?.id),
      fetch(api.search.getShowEpisodes, setShowEpisodes, route?.params?.id),
      fetch(api.search.getShowSeasons, setShowSeasons, route?.params?.id),
    ]).then((result) => {
      navigation.setOptions({ title: showDetails.name });
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
            <Text style={styles.title}>{showDetails.name}</Text>

            {/* IMAGE */}
            <Image
              style={styles.image}
              source={{
                uri: showDetails?.image?.original,
              }}
            />
          </View>
          <View style={styles.headerViewTextContainer}>
            {/* GENRES Component */}
            <GenresList genres={showDetails?.genres} />
            {/* Description */}
            <Text style={styles.showSummary}>
              {removeHTMLTags(showDetails?.summary)}
            </Text>
          </View>
        </View>
        {/* Favorites */}
        <Button
          title="Add to favorites"
          style={styles.button}
          buttonStyle={{ backgroundColor: YELLOW }}
          titleStyle={{ color: BLACK }}
          icon={
            <AntIcon
              style={{ marginHorizontal: 5 }}
              name="star"
              size={20}
              color={BLACK}
            />
          }
          onPress={() => setShowAlert(true)}
        />
        {/* RATING */}
        <View style={styles.ratingContainer}>
          <AntIcon
            name="star"
            size={30}
            color={YELLOW}
            style={{ marginRight: 10 }}
          />
          <Text style={{ color: WHITE, fontSize: 20 }}>
            {showDetails?.rating?.average}
          </Text>
        </View>
        {/* SEASONS */}
        {/* <View style={styles.episodesContainer}> */}
        {showSeasons?.length > 0 && (
          <Episodes episodes={showEpisodes} seasons={showSeasons} />
        )}

        {/* </View> */}
        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="Didn't got to finish this. Sorry!!!"
          message="😔!"
          closeOnTouchOutside={true}
          onDismiss={() => setShowAlert(false)}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="Cancel"
          confirmText="Yes"
          confirmButtonColor={YELLOW}
          onCancelPressed={() => {
            setShowAlert(false);
          }}
          onConfirmPressed={() => {
            setShowAlert(false);
          }}
        />
      </View>
    );
  }
};

export default ShowDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLACK,
    color: WHITE,
    paddingHorizontal: 5,
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
  headerView: { flexDirection: "row" },
  headerViewTextContainer: {
    paddingHorizontal: 10,
    flexShrink: 1,
  },
  showSummary: { color: WHITE, flexShrink: 1 },
  button: {
    marginVertical: 15,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
