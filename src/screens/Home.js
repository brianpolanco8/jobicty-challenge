import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { api } from "../app/api";
import { SearchBar } from "../components";
import { BLACK, DARKGREEN } from "../utils/colors";

const Home = () => {
  const [search, setSearch] = useState({});

  const onChange = (value) => setSearch(value);

  const fetch = async () => {
    const response = await api.search.shows("girls");
    setSearch(response);
    console.log(search);
  };

  return (
    <View style={styles.container}>
      {/* SEARCH BAR */}
      <SearchBar onChange={onChange} value={search} />
      {/*  */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: BLACK,
  },
});
