import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
interface Props {
  gameQuery: GameQuery;
}
const TitileHeading = ({ gameQuery }: Props) => {
  const selectHeader = `${gameQuery.genre?.name || ""} ${
    gameQuery.platform?.name || ""
  } Games`;
  return (
    <Heading marginX={2} as="h1">
      {selectHeader}
    </Heading>
  );
};

export default TitileHeading;
