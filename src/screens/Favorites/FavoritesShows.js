import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import { selectState } from "../../app/store/slices/appSlice";
import { FavoriteShowResult } from "../../components";
import { BLACK, WHITE } from "../../utils/colors";
import { sortFavsAlphabetically } from "../../utils/helpers";

const FavoritesShows = () => {
  const { favShows } = useSelector(selectState);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Favorites Shows</Text>
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
});
