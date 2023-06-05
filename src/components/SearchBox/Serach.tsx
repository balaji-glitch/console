import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
interface Props {
  onSearch: (Search: string) => void;
}

const Serach = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <>
      <form
        style={{ width: "100%" }}
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) onSearch(ref.current.value);
        }}
      >
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
          <Input ref={ref} borderRadius={"15px"} placeholder="Serach" />
        </InputGroup>
      </form>
    </>
  );
};

export default Serach;
