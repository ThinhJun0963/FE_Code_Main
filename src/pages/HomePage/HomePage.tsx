import { Box, Stack, StackDivider } from '@chakra-ui/react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import Carousel from '../../components/Carousel/Carousel'
import FAQ from '../../components/FAQ/Faq'
import SimpleThreeColumns from '../../components/SimpleThreeColumns/SimpleThreeColumns'
import Footer from '../../components/Footer/Footer'

const HomePage = () => {
    return (
        <>
            <Box bg="gray.200" minH="100vh">
                <Box>
                    <Header />
                </Box>
                <Box>
                    <Hero />
                </Box>
                <Box pt={10}>
                    <Carousel />
                </Box>
                <Box pt={10}>
                    <FAQ />
                </Box>
                <Box pt={10}>
                    <SimpleThreeColumns />
                </Box>
                <Footer />
            </Box>
        </>
    )
}

export default HomePage