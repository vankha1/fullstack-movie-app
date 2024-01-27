import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";

import moviesData from "@/assets/data/moviesData";
import TopMovieComponent from "./TopMovieComponent";
import { MovieProps } from "./MovieComponent";

type MovieComponentsProp = {
  movies: MovieProps[]
}

const TopMovieComponents = ({ movies } : MovieComponentsProp) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Top 10 TV Movies</Text>
      <FlatList
        data={movies.slice(4, 8)}
        keyExtractor={(e) => e.id}
        renderItem={({ item }) => <TopMovieComponent item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  headerText: {
    color: "gray",
    marginLeft: 10,
    marginBottom: 10,
    fontWeight: "500",
    fontSize: 14
  },
});
export default TopMovieComponents;
