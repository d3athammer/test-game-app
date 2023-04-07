import { Grid, GridItem, Show } from '@chakra-ui/react'

function App() {

  return (
  <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`
  }}>
    <GridItem bg='orange' area='nav'>Nav</GridItem>
    {/* above large means it will only appear when it's dimension is above large */}
    <Show above='lg'>
      <GridItem bg='coral' area='aside'>Aside</GridItem>
    </Show>
    <GridItem bg='dodgerblue' area='main'>Main</GridItem>
  </Grid>
 )
}

export default App
