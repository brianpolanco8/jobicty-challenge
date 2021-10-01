import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";
import { useSelector } from "react-redux";
import { selectState } from "../../app/store/slices/appSlice";
import { FavoriteShowResult } from "../../components";
import { BLACK, WHITE } from "../../utils/colors";
import { sortFavsAlphabetically } from "../../utils/helpers";

const {height} = Dimensions.get('window')

const FavoritesShows = () => {
  const { favShows } = useSelector(selectState);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Favorites Shows</Text>

        {favShows.length === 0 && (
          <View style={styles.noFavorites}>
          <AntIcon
          style={{ marginHorizontal: 5 }}
          name={"frowno"}
          size={40}
          color={WHITE}
        />
        <Text style={[styles.text, {fontSize: 23}]}>No shows in favorites yet!</Text>
        </View>
        )}

        <FlatList
          data={sortFavsAlphabetically(favShows)}
          keyExtractor={(item, i) => `${i}`}
          renderItem={({ item }) =>
            favShows.length > 0 && <FavoriteShowResult item={item} />
          }
        />
      </View>
    </View>
  );
};

export default FavoritesShows;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: BLACK,
  },
  text: {
    color: WHITE,
    fontSize: 30,
    fontWeight: "bold",
    padding: 10,
  },
  noFavorites: {
    // flex:1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
    height: height * 0.6,
  }
});
