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
                <Stack divider={<StackDivider />}>
                    <Header />
                    <Hero />
                    <Carousel />
                    <FAQ />
                    <SimpleThreeColumns />
                    <Footer />
                </Stack>
            </Box>
        </>
    )
}

export default HomePage