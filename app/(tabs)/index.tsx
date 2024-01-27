import { ScrollView, StyleSheet } from "react-native";

import { View, Text } from "@/components/Themed";
import HeaderComponent from "@/components/HeaderComponent";
import MovieComponents from "@/components/MovieComponents";
import TopMovieComponents from "@/components/TopMovieComponents";
import FavoriteComponents from "@/components/FavoriteComponents";
import { useState } from "react";

import { gql, useQuery } from "@apollo/client";
import { MovieProps } from "@/components/MovieComponent";

const GET_MOVIES = gql`
  query allMovies {
    findAll {
      id
      title
      image
      genre
      imdb
      movieTrailerLink
    }
  }
`;

export default function TabOneScreen() {
  
  const [searchTitle, setSearchTitle] = useState<string>("");
  const { loading, error, data } = useQuery(GET_MOVIES);

  if (loading) return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
  if (error) return (
    <View>
      <Text>{error.message}</Text>
    </View>
  );

  // console.log(data?.findAll);
  const moviesDataGraphql = data?.findAll;

  const movies = moviesDataGraphql.filter((movie : MovieProps) =>
    movie.title.includes(searchTitle)
  );

  return (
    <ScrollView style={styles.container}>
      <HeaderComponent setSearchTitle={setSearchTitle} />

      <MovieComponents movies={movies} />

      <TopMovieComponents movies={movies} />

      <FavoriteComponents movies={movies} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
