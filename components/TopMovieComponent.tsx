import { Link } from "expo-router";
import { View, Text } from "../components/Themed";
import { StyleSheet, Image, useWindowDimensions } from "react-native";

export type MovieProps = {
  id: string;
  title: string;
  image: string;
  genre: string;
  description: string;
};

type TopMovieComponentProps = {
  item: MovieProps;
};

const TopMovieComponent = ({ item }: TopMovieComponentProps) => {
  const width = useWindowDimensions().width; // NOTE

  return (
    <Link href={`./movie/${item.id}`}>
      <View style={[styles.container, { width: width - 180 }]}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: "#000",
  },
  image: {
    width: "100%",
    aspectRatio: 2 / 2.5,
    resizeMode: "cover",
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#eee",
  },
});

export default TopMovieComponent;
