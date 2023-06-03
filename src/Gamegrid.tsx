import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "./hooks/useGames";
import Gamecard from "./components/Gamecard";
import SkeletonCard from "./components/SkeletonCard";

const Gamegrid = () => {
  const { data, error, isloading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={3}
        padding={"5px"}
      >
        {isloading &&
          skeletons.map((skeletons) => <SkeletonCard key={skeletons} />)}
        {data.map((data) => (
          <Gamecard key={data.id} game={data} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default Gamegrid;
