import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color =score>75 ? 'Green': score <75? "Red"? "";
  return (
    
    <Badge colorScheme={color} fontSize={"12px"} marginX={"2px"}>
      {score}
    </Badge>
  );
};

export default CriticScore;
