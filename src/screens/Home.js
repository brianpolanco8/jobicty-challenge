import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { api } from "../app/api";
import { SearchBar, SearchResult } from "../components";
import { useAuthentication } from "../hooks";
import { BLACK, DARKGREEN, WHITE } from "../utils/colors";
import { fetch } from "../utils/helpers";

const Home = () => {
  const [shows, setShows] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(api.search.shows, setShows, "girls", setIsLoading).then((result) =>
      setIsLoading(false)
    );
  }, []);

  useAuthentication();

  return (
    <View style={styles.container}>
      {isLoading && (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size="large" color={WHITE} />
        </View>
      )}

      {!isLoading && (
        <View>
          <Text style={styles.text}>Feature Shows</Text>
          <FlatList
            data={shows}
            keyExtractor={(item, i) => `${i}`}
            renderItem={({ item }) => <SearchResult item={item} />}
          />
        </View>
      )}

      <SearchResult />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: BLACK,
  },
  text: {
    padding: 10,
    color: WHITE,
    fontSize: 30,
    fontWeight: "bold",
  },
});
