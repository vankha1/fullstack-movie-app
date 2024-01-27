import DetailScreenComponent from "@/components/DetailScreenComponent";
import moviesData from "@/assets/data/moviesData";
import { useGlobalSearchParams } from "expo-router";

const Detailed = () => {

  const { id } = useGlobalSearchParams()

  return (
    <>
      <DetailScreenComponent movie={moviesData[+id]}/>
    </>
  );
};

export default Detailed;
