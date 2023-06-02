import { HStack, Image } from "@chakra-ui/react";
import logo from "../NavBar/logo.webp";
import ColorModeSwitch from "../ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default Navbar;
