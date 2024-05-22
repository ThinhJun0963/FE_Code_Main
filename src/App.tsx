import './App.css'
import Header from './components/Header/Header'
import { Box, Stack, StackDivider } from '@chakra-ui/react'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import Card from './components/Card/Card'
import Carousel from './components/Carousel/Carousel'
import SimpleThreeColumns from './components/SimpleThreeColumns/SimpleThreeColumns'
import FAQ from './components/Accordion/Accordion'

function App() {
  return (
    <Box bg="gray.200" minH="100vh">
      <Stack divider={<StackDivider />}>
        <Header />
        <Hero />
        <Carousel />
        <FAQ/>
        <SimpleThreeColumns/>
        <Footer />
      </Stack>
    </Box>
  )
}

export default App