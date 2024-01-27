import DetailScreenComponent from "@/components/DetailScreenComponent";
import { useGlobalSearchParams } from "expo-router";
import { gql, useQuery } from "@apollo/client";
import { Text, View } from "../../components/Themed";

const GET_MOVIE_BY_ID = gql`
  query movieById($id: Int!) {
    movie(id: $id) {
      id
      title
      image
      genre
      imdb
      movieTrailerLink
      description
    }
  }
`;

const Detailed = () => {
  const { id } = useGlobalSearchParams();

  const { loading, error, data } = useQuery(GET_MOVIE_BY_ID, {
    variables: {
      id: +id,
    },
  });

  if (loading)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  if (error)
    return (
      <View>
        <Text>{error.message}</Text>
      </View>
    );

  const movie = data?.movie;

  if (!movie) {
    return <Text>Movie {id} not found</Text>;
  }

  return (
    <>
      <DetailScreenComponent movie={movie} />
    </>
  );
};

export default Detailed;
