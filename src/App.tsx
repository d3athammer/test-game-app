import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./Conponents/GameGrid";
import GenreList from "./Conponents/GenreList";
import NavBar from "./Conponents/NavBar";
import { Genre } from "./Hooks/useGenres";

function App() {
  // Allows us to use selectedGenre as a boolean, where Genre returns truthy means yes
  // Because Genre is an object, you can change boolean to an object type.
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr"
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      {/* above large means it will only appear when it's dimension is above large */}
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
