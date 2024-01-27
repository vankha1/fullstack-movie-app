import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";

import moviesData from "@/assets/data/moviesData";
import FavoriteComponent from "./FavoriteComponent";
import { MovieProps } from "./MovieComponent";

type MovieComponentsProp = {
  movies: MovieProps[]
}

const FavoriteComponents = ({ movies } : MovieComponentsProp) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>My favorite</Text>
      <FlatList
        data={movies.slice(8, 12)}
        keyExtractor={(e) => e.id}
        renderItem={({ item }) => <FavoriteComponent item={item} />}
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
export default FavoriteComponents;
