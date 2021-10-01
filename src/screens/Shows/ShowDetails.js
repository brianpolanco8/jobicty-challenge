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
import { includes } from "ramda";

import { BLACK, WHITE, WHITE_FOR_TEXT, YELLOW } from "../../utils/colors";
import { fetch, removeHTMLTags } from "../../utils/helpers";
import { api } from "../../app/api";
import { Episodes, GenresList } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import {
  selectState,
  setFavShows,
  removeFromFavShows,
} from "../../app/store/slices/appSlice";

const notFoundImage = require("../../../assets/notFound.jpg");

// DIMENSIONS
const { width, height } = Dimensions.get("window");

const ShowDetailsScreen = ({ route }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { favShows } = useSelector(selectState);
  const [showDetails, setShowDetails] = useState({});
  const [showEpisodes, setShowEpisodes] = useState([]);
  const [showSeasons, setShowSeasons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState({});

  const addToFavorites = (show) => {
    dispatch(setFavShows(show));
  };

  const removeFromFavs = (show) => {
    setAlertMessage({
      title: "Oh oh!",
      message: "Are you sure you want to delete this from your favorites?",
    });
    setShowAlert(true);
  };

  const isInFavs = includes(showDetails, favShows);

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
              {removeHTMLTags(showDetails?.summary)?.length > 0 ? removeHTMLTags(showDetails?.summary)?.length > 0 : "No description information"}
              {}
            </Text>
          </View>
        </View>

        {/* Favorites Button*/}
        <Button
          title={isInFavs ? "Added to favorites" : "Add to favorites"}
          style={styles.button}
          buttonStyle={
            isInFavs
              ? { backgroundColor: WHITE_FOR_TEXT }
              : { backgroundColor: YELLOW }
          }
          titleStyle={{ color: BLACK }}
          icon={
            <AntIcon
              style={{ marginHorizontal: 5 }}
              name={isInFavs ? "check" : "star"}
              size={20}
              color={BLACK}
            />
          }
          onPress={() =>
            isInFavs ? removeFromFavs(showDetails) : addToFavorites(showDetails)
          }
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
            {showDetails?.rating?.average ? showDetails?.rating?.average : "No rating information"}
          </Text>
        </View>
        {/* SEASONS */}
        {/* <View style={styles.episodesContainer}> */}
        {showSeasons?.length > 0 && (
          <Episodes episodes={showEpisodes} seasons={showSeasons} />
        )}

        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title={alertMessage?.title}
          message={alertMessage?.message}
          closeOnTouchOutside={true}
          onDismiss={() => setShowAlert(false)}
          closeOnHardwareBackPress={false}
          showCancelButton={isInFavs ? true : false}
          showConfirmButton={true}
          confirmText="Yes"
          confirmButtonColor={YELLOW}
          onCancelPressed={() => {
            setShowAlert(false);
          }}
          onConfirmPressed={() => {
            setShowAlert(false);
            dispatch(removeFromFavShows(showDetails));
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
