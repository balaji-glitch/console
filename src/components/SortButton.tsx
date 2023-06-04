import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortButton = () => {
  return (
    <Menu>
      <MenuButton
        borderRadius={"10px"}
        as={Button}
        rightIcon={<BsChevronDown />}
      >
        Order By: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Release Date</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Lastly Added</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortButton;
