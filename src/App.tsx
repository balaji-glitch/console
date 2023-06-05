import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/NavBar/Navbar";

import Genrelist from "./components/Genrelist";
import Gamegrid from "./Gamegrid";
import { useState } from "react";
import { Genre } from "./hooks/useGeners";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatform";
import SortButton from "./components/SortButton";
import TitileHeading from "./components/TitileHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  Search: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
          <Navbar
            onSearch={(Search) => setGameQuery({ ...gameQuery, Search })}
          ></Navbar>
        </GridItem>
        <Show above="lg">
          <GridItem padding={"10px"} area="aside" bg="">
            <Genrelist
              selectedGenre={gameQuery.genre}
              onselectedgenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem area="main" bg="">
          <TitileHeading gameQuery={gameQuery} />
          <HStack paddingBottom={2}>
            <PlatformSelector
              onselectplatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortButton
              SortSelector={gameQuery.sortOrder}
              onSortSelect={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>

          <Gamegrid gameQuery={gameQuery}></Gamegrid>
        </GridItem>
      </Grid>
    </>
  );
}
export default App;
