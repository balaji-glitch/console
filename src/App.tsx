import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/NavBar/Navbar";
import Gamegrid from "./Gamegrid";
import Genrelist from "./components/Genrelist";

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
          <GridItem area="aside" bg="">
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
