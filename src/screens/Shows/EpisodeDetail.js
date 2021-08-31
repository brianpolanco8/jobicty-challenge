import React, { useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { GenresList } from "../../components";
import {
  BLACK,
  WHITE,
  WHITE_FOR_BORDERS,
  WHITE_FOR_TEXT,
  YELLOW,
} from "../../utils/colors";
import { removeHTMLTags } from "../../utils/helpers";

// DIMENSIONS
const { width, height } = Dimensions.get("window");

const EpisodeDetail = ({ route }) => {
  const { episode } = route.params;
  return (
    <View style={styles.container}>
      {/* SEASON -> EPISODE */}
      <View style={styles.seasonEpisodeContainer}>
        <View style={styles.seasonContainer}>
          <Text style={styles.textTitle}>Season</Text>
          <Text style={styles.text}>{episode.season}</Text>
        </View>
        <View style={styles.episodeContainer}>
          <Text style={styles.textTitle}>Episode</Text>
          <Text style={styles.text}>{episode.number}</Text>
        </View>
      </View>

      {/* IMAGE */}
      {episode?.image?.original && (
        <Image
          style={styles.image}
          source={{
            uri: episode?.image?.original,
          }}
        />
      )}

      {/* </View> */}
      <View style={styles.headerViewTextContainer}>
        {/* GENRES Component */}
        <GenresList genres={episode?.genres} />
        {/* Description */}

        <Text style={styles.episodeTitle}>{episode.name}</Text>

        <Text style={styles.showSummary}>
          {removeHTMLTags(episode?.summary)}
        </Text>
      </View>
    </View>
  );
};

export default EpisodeDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: BLACK,
  },
  seasonEpisodeContainer: {
    flexDirection: "row",
    marginTop: height * 0.05,
    marginBottom: 10,
  },
  textTitle: {
    color: WHITE_FOR_TEXT,
  },
  seasonContainer: {
    alignItems: "center",
    marginRight: 30,
  },
  episodeContainer: {
    alignItems: "center",
  },
  text: {
    color: BLACK,
    backgroundColor: YELLOW,
    margin: 5,
    width: 50,
    textAlign: "center",
  },
  episodeTitle: {
    marginTop: 20,
    fontSize: 25,
    color: WHITE,
    fontWeight: "bold",
    alignSelf: "center",
    borderWidth: 2,
    borderColor: YELLOW,
    borderRadius: 5,
    padding: 5,
  },
  image: {
    height: height * 0.25,
    width: height * 0.2,
  },
  headerView: { flexDirection: "row" },
  headerViewTextContainer: {
    paddingHorizontal: 10,
    flexShrink: 1,
  },
  showSummary: {
    color: WHITE_FOR_TEXT,
    flexShrink: 1,
    marginTop: 10,
  },
});
