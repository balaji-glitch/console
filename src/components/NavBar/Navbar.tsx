import { HStack, IconButton, Image, Input, InputGroup } from "@chakra-ui/react";
import logo from "../NavBar/logo.webp";
import ColorModeSwitch from "../ColorModeSwitch";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} padding="8px">
      <Image src={logo} boxSize="60px" />
      <InputGroup width={"800px"}>
        <Input type="tel" placeholder="Search" />
        <IconButton aria-label="Search database" icon={<FaSearch />} />
      </InputGroup>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default Navbar;
