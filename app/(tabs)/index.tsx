import { ScrollView, StyleSheet} from "react-native";

import { View, Text } from "@/components/Themed";
import HeaderComponent from "@/components/HeaderComponent";
import MovieComponents from "@/components/MovieComponents";
import TopMovieComponents from "@/components/TopMovieComponents";
import FavoriteComponents from "@/components/FavoriteComponents";
import { useState } from "react";
import moviesData from "@/assets/data/moviesData";

export default function TabOneScreen() {

  const [searchTitle, setSearchTitle] = useState<string>("");
  const movies = moviesData.filter(movie => movie.title.includes(searchTitle))

  return (
    <ScrollView style={styles.container}>
      <HeaderComponent setSearchTitle = {setSearchTitle}/>

      <MovieComponents movies = {movies}/>

      <TopMovieComponents movies = {movies} />

      <FavoriteComponents movies = {movies} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
  }
})