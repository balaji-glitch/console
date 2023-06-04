import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

import usePlatform, { Platform } from "../hooks/usePlatform";

interface Props {
  onSelectPlatform: (platforms: Platform) => void;
  onselectplatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, onselectplatform }: Props) => {
  const { data } = usePlatform();

  return (
    <Menu>
      <MenuButton
        marginX={2}
        width={"250px"}
        borderRadius={"10px"}
        as={Button}
        rightIcon={<BsChevronDown />}
      >
        Filter By : {onselectplatform?.name}
      </MenuButton>
      <MenuList>
        {data.map((data) => (
          <MenuItem onClick={() => onSelectPlatform(data)} key={data.id}>
            {data.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
