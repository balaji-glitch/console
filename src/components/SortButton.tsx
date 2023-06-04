import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSortSelect: (Sortorder: string) => void;
}

const SortButton = ({ onSortSelect }: Props) => {
  const Sortorder = [
    { value: "", label: "Relevance" },
    { value: "-released", label: "Released Date" },
    { value: "name", label: "Name" },
    { value: "-added", label: "Recently Added" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  return (
    <>
      <Menu>
        <MenuButton
          borderRadius={"10px"}
          as={Button}
          rightIcon={<BsChevronDown />}
        >
          Order By: Relevance
        </MenuButton>
        <MenuList>
          {Sortorder.map((data) => (
            <MenuItem
              key={data.value}
              value={data.value}
              onClick={() => onSortSelect(data.value)}
            >
              {data.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default SortButton;
