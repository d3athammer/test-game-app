import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./Conponents/GameGrid";
import GenreList from "./Conponents/GenreList";
import NavBar from "./Conponents/NavBar";

function App() {
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
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
