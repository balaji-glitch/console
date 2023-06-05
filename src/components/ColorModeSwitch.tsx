import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { useState } from "react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const [intial, final] = useState("Dark Mode");
  const toggle = () => {
    final("Light Mode");
  };
  return (
    <>
      <HStack>
        <Switch
          isChecked={colorMode == "dark"}
          onChange={toggleColorMode}
          onChangeCapture={() => toggle}
        ></Switch>

        <Text whiteSpace={"nowrap"}>{intial}</Text>
      </HStack>
    </>
  );
};

export default ColorModeSwitch;
