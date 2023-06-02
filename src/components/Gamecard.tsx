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
import {
  Card,
  CardBody,
  HStack,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { Games } from "../hooks/useGames";
import { IconType } from "react-icons";

interface Props {
  game: Games;
}
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
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default Gamecard;
