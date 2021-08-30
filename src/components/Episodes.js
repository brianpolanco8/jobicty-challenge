import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  NavigationHelpersContext,
  useNavigation,
} from "@react-navigation/native";

import { Tab, TabView } from "react-native-elements";
import { BLACK, WHITE, YELLOW } from "../utils/colors";

// DIMENSIONS
const { width, height } = Dimensions.get("window");

const Episodes = ({ episodes, seasons }) => {
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const episodesBySeason = episodes?.filter((ep) => ep.season === index + 1);

  return (
    <View style={{ flex: 1 }}>
      {/* <Tab.Item title={"asd"} /> */}
      <Tab value={index} onChange={setIndex}>
        {seasons?.map((season, i) => (
          <Tab.Item
            title={season?.number}
            key={i}
            style={styles.seasonContainer}
            titleStyle={styles.seasonTitle}
            containerStyle={{
              backgroundColor: BLACK,
              borderBottomColor: YELLOW,
            }}
          />
        ))}
      </Tab>
      <FlatList
        data={episodesBySeason}
        renderItem={({ item, i }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("EpisodeDetail", { episode: item })
            }
          >
            <View style={styles.episodeRowContainer}>
              <Image
                source={{ uri: item?.image?.original }}
                style={styles.episodeImage}
              />
              <View style={styles.episodeTextContainer}>
                <Text style={styles.episodeTitle}>
                  {item.number} - {item.name}
                </Text>
                <Text style={styles.episodeAirDate}>{item.airdate}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Episodes;

const styles = StyleSheet.create({
  episodeImage: {
    height: height * 0.15,
    width: height * 0.1,
  },
  seasonContainer: {
    borderBottomColor: BLACK,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  seasonTitle: {
    color: BLACK,
    backgroundColor: YELLOW,
  },
  episodeRowContainer: {
    flexDirection: "row",
  },
  episodeTextContainer: {
    justifyContent: "center",
    marginHorizontal: 10,
  },
  episodeTitle: {
    color: WHITE,
    fontSize: 15,
    fontWeight: "bold",
  },
  episodeAirDate: {
    color: WHITE,
    fontSize: 12,
    fontWeight: "300",
  },
});
