import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";

import moviesData from "@/assets/data/moviesData";
import MovieComponent, { MovieProps } from "./MovieComponent";

type MovieComponentsProp = {
  movies: MovieProps[]
}

const MovieComponents = ({ movies } : MovieComponentsProp) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Movies</Text>
      <FlatList
        data={movies.slice(0, 4)}
        keyExtractor={(e) => e.id}
        renderItem={({ item }) => <MovieComponent item={item} />}
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
export default MovieComponents;
