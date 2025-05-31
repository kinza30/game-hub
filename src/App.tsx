
import {Grid, GridItem, Show} from "@chakra-ui/react"
import NavBar from "./component/NavBar"


function App() {
 return <Grid templateAreas={{
    base:`"nav" "main"`,
    lg:`"nav nav" "aside main"`
 }}>
    <GridItem area="nav">
      <NavBar/>
    </GridItem>
   
    <GridItem area="aside" bg="gold" display={{ base: "none", lg: "block" }}>
          Aside 
      </GridItem>
    <GridItem area="main" bg="dodgerblue">Main</GridItem>
 </Grid>
}
export default App
  //  display={{ base: "none", lg: "block" }} // hide on small screens, show on lg+