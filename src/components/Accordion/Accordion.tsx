import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    VStack
} from '@chakra-ui/react'


const BookingStep = () => {
    return (
        <Accordion allowToggle>
            <Box mb={5}>
                <AccordionItem pb={4} backgroundColor="white" borderRadius="lg">
                    <h2>
                        <AccordionButton>
                            <Box as='span' flex='1' textAlign="left" color="black">
                                1. Chọn hình thức khám
                            </Box>
                            <AccordionIcon color="black" />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <VStack spacing={4} align="stretch" color="black">
                            <Box as='span'>Khám tổng quát</Box>
                            <Box as='span'>Khám theo dịch vụ</Box>
                            <Box as='span'>Khám định kì</Box>
                        </VStack>
                    </AccordionPanel>
                </AccordionItem >
            </Box>

            <Box mb={5}>
                <AccordionItem backgroundColor="white" borderRadius="lg">
                    <h2>
                        <AccordionButton>
                            <Box as='span' flex='1' textAlign="left" color="black">
                                2. Chọn ngày khám
                            </Box>
                            <AccordionIcon color="black" />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    </AccordionPanel>
                </AccordionItem>
            </Box>

            <Box mb={5}>
                <AccordionItem backgroundColor="white" borderRadius="lg">
                    <h2>
                        <AccordionButton>
                            <Box as='span' flex='1' textAlign="left" color="black">
                                3. Chọn giờ khám
                            </Box>
                            <AccordionIcon color="black" />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    </AccordionPanel>
                </AccordionItem>
            </Box>

            <Box mb={5}>
                <AccordionItem backgroundColor="white" borderRadius="lg">
                    <h2>
                        <AccordionButton>
                            <Box as='span' flex='1' textAlign="left" color="black">
                                4. Xác nhận thông tin
                            </Box>
                            <AccordionIcon color="black" />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    </AccordionPanel>
                </AccordionItem>
            </Box>

            <Box mb={5}>
                <AccordionItem backgroundColor="white" borderRadius="lg">
                    <h2>
                        <AccordionButton>
                            <Box as='span' flex='1' textAlign="left" color="black">
                                5. Thanh toán
                            </Box>
                            <AccordionIcon color="black" />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    </AccordionPanel>
                </AccordionItem>
            </Box>
        </Accordion>
    )
}

export default BookingStep;