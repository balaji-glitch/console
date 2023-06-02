import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../NavBar/logo.webp";

const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>Source</Text>
    </HStack>
  );
};

export default Navbar;
