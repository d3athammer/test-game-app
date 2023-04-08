import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './Conponents/NavBar'

function App() {

  return (
  <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`
  }}>
    <GridItem area='nav'>
      <NavBar />
    </GridItem>
    {/* above large means it will only appear when it's dimension is above large */}
    <Show above='lg'>
      <GridItem area='aside'>Side</GridItem>
    </Show>
    <GridItem area='main'>Main</GridItem>
  </Grid>
 )
}

export default App
