import { Card, CardBody, HStack, Heading, Icon, Image } from "@chakra-ui/react";
import { Games } from "../hooks/useGames";

import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import CriticScore from "./CriticScore";
const iconmap: { [key: string]: IconType } = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  mac: FaApple,
  linux: FaLinux,
  android: FaAndroid,
  ios: MdPhoneIphone,
  nintendo: SiNintendo,
  web: BsGlobe,
};
interface Props {
  game: Games;
}

const Gamecard = ({ game }: Props) => {
  return (
    <>
      <Card borderRadius={10} overflow={"hidden"}>
        <Image src={game.background_image} />
        <CardBody>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
          <HStack>
            {game.parent_platforms.map(({ platform }) => (
              <Icon as={iconmap[platform.slug]}></Icon>
            ))}
            <CriticScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default Gamecard;
