import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGeners from "../hooks/useGeners";
import GetcropedImageUrl from "../service/GetcropedIamge";

const Genrelist = () => {
  const { data } = useGeners();
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
              <Text>{data.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Genrelist;
