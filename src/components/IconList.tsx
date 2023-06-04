interface Props {
  platform: Platform[];
}
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
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";

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

const IconList = ({ platform }: Props) => {
  return (
    <>
      <HStack>
        {platform.map((platform) => (
          <Icon
            as={iconmap[platform.slug]}
            color={"gray.500"}
            key={platform.id}
          ></Icon>
        ))}
      </HStack>
    </>
  );
};

export default IconList;
