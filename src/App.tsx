import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './Conponents/navbar'

function App() {

  return (
  <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`
  }}>
    <GridItem bg='white' area='nav'>
      <NavBar />
    </GridItem>
    {/* above large means it will only appear when it's dimension is above large */}
    <Show above='lg'>
      <GridItem bg='coral' area='aside'>Aside</GridItem>
    </Show>
    <GridItem bg='dodgerblue' area='main'>Main</GridItem>
  </Grid>
 )
}

export default App
