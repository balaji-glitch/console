import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/NavBar/Navbar";

import Genrelist from "./components/Genrelist";
import Gamegrid from "./Gamegrid";
import { useState } from "react";
import { Genre } from "./hooks/useGeners";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatform";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedplatform, setselectedplatform] = useState<Platform | null>(
    null
  );

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav ""main "`,
          lg: `"nav nav""aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "210px 1fr",
        }}
      >
        <GridItem area="nav" bg="">
          <Navbar></Navbar>
        </GridItem>
        <Show above="lg">
          <GridItem padding={"10px"} area="aside" bg="">
            <Genrelist
              selectedGenre={selectedGenre}
              onselectedgenre={(genre) => setSelectedGenre(genre)}
            />
          </GridItem>
        </Show>
        <GridItem area="main" bg="">
          <PlatformSelector
            onselectplatform={selectedplatform}
            onSelectPlatform={(data) => setselectedplatform(data)}
          />
          <Gamegrid
            selectedPlatform={selectedplatform}
            selectedgenre={selectedGenre}
          ></Gamegrid>
        </GridItem>
      </Grid>
    </>
  );
}
export default App;
