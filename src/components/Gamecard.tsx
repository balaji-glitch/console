import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Games } from "../hooks/useGames";

import CriticScore from "./CriticScore";
import IconList from "./IconList";
import GetcropedImageUrl from "../service/GetcropedIamge";

interface Props {
  game: Games;
}

const Gamecard = ({ game }: Props) => {
  return (
    <>
      <Card borderRadius={10} overflow={"hidden"}>
        <Image src={GetcropedImageUrl(game.background_image)} />
        <CardBody>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
          <HStack justifyContent={"space-between"}>
            <IconList
              platform={game.parent_platforms.map((data) => data.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default Gamecard;
