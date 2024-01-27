import { View, Text, ScrollView, StyleSheet, Image, Pressable, Linking } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { MovieProps } from "./MovieComponent";

type MovieComponentProps = {
  movie: MovieProps
}

const DetailScreenComponent = ({ movie } : MovieComponentProps) => {

  const route = useRouter()

  const handleBack = () => {
    route.back()
  }

  return (
    <Link href={"./movie/id"} asChild>
      <ScrollView style={styles.container}>
        <Image
          source={{ uri: movie?.image }}
          style={styles.image}
        />

        <View style={styles.playBtnContainer}>
          <Pressable style={styles.playBtn} onPress={() => Linking.openURL(movie.movieTrailerLink)}>
            <AntDesign name="play" size={60} color={"rgba(255, 255, 255, 0.3)"} />
          </Pressable>
        </View>
  
        <Pressable style={styles.iconContainer} onPress={handleBack}>
          <AntDesign 
            name="left"
            size={24}
            color={"#fff"}
            style={styles.iconStyle}
          />
        </Pressable>
  
        <View style={styles.imdbContainer}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{movie.genre}</Text>
          </View>
        </View>
  
        <Text style={styles.title}>{movie.title}</Text>
  
        <View style={styles.description}>
          <Text style={styles.descriptionText}>
            {movie.description}
          </Text>
        </View>
      </ScrollView>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  image: {
    width: "100%",
    aspectRatio: 3 / 2,
    resizeMode: "cover",
    overflow: "hidden",
  },
  playBtnContainer: {
    position: "absolute",
    top: "25%",
    left: "50%",
    transform: [{ translateX: -20}, {translateY: -20 }],
    zIndex: 1
  }, 
  playBtn: {
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },  
  iconContainer: {
    position: "absolute",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  iconStyle: {
    width:50
  },
  imdbContainer: {
    padding: 10,
  },
  button: {
    width: 100,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3ce13",
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 50,
    marginVertical: 10,
  },
  buttonText: {
    fontWeight: "600",
  },
  title: {
    fontSize: 35,
    paddingLeft: 10,
    fontWeight: "bold",
    color: "#eee",
  },
  description: {
    padding: 10,
  },
  descriptionText: {
    color: "#eee",
  },

});

export default DetailScreenComponent;
