import { HStack, Image } from "@chakra-ui/react";
import logo from "../NavBar/logo.webp";
import ColorModeSwitch from "../ColorModeSwitch";
import Serach from "../SearchBox/Serach";

interface Props {
  onSearch: (Search: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack padding="8px">
      <Image src={logo} boxSize="60px" />
      <Serach onSearch={onSearch} />
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default Navbar;
