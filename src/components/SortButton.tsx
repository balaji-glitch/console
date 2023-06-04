import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
interface Props {
  onSortSelect: (SelectSort: string) => void;
  SortSelector: string;
}

const SortButton = ({ onSortSelect, SortSelector }: Props) => {
  const Sortorder = [
    { value: "", label: "Relevance" },
    { value: "released", label: "Released Date" },
    { value: "name", label: "Name" },
    { value: "added", label: "Recently Added" },
    { value: "metacritic", label: "Popularity" },
    { value: "rating", label: "Average Rating" },
  ];
  const CurrentSortOrder = Sortorder.find(
    (order) => order.value === SortSelector
  );

  return (
    <>
      <Menu>
        <MenuButton
          borderRadius={"10px"}
          as={Button}
          rightIcon={<BsChevronDown />}
        >
          Order By:{CurrentSortOrder?.label || "Relevance"}
        </MenuButton>
        <MenuList>
          {Sortorder.map((sort) => (
            <MenuItem
              key={sort.value}
              value={sort.value}
              onClick={() => onSortSelect(sort.value)}
            >
              {sort.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default SortButton;
