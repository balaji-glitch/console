import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGeners, { Genre } from "../hooks/useGeners";
import GetcropedImageUrl from "../service/GetcropedIamge";
interface Props {
  onselectedgenre: (genres: Genre) => void;
}

const Genrelist = ({ onselectedgenre }: Props) => {
  const { data, isloading } = useGeners();
  if (isloading) return <Spinner />;
  return (
    <>
      <List>
        {data.map((data) => (
          <ListItem key={data.id} padding={"2px"} mb={3}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={"10px"}
                src={GetcropedImageUrl(data.image_background)}
              />
              <Button variant={"link"} onClick={() => onselectedgenre(data)}>
                {" "}
                {data.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Genrelist;
