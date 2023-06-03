import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/NavBar/Navbar";

import Genrelist from "./components/Genrelist";
import Gamegrid from "./Gamegrid";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav ""main "`,
          lg: `"nav nav""aside main"`,
        }}
      >
        <GridItem area="nav" bg="">
          <Navbar></Navbar>
        </GridItem>
        <Show above="lg">
          <GridItem padding={"10px"} area="aside" bg="">
            <Genrelist />
          </GridItem>
        </Show>
        <GridItem area="main" bg="">
          <Gamegrid></Gamegrid>
        </GridItem>
      </Grid>
    </>
  );
}
export default App;
