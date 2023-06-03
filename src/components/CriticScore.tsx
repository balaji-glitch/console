import { Badge, HStack } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score < 75 ? "yellow" : "";
  return (
    <>
      <HStack>
        <Badge colorScheme={color} paddingX={2}>
          {score}
        </Badge>
      </HStack>
    </>
  );
};

export default CriticScore;
