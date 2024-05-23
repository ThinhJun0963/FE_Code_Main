import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Flex } from "@chakra-ui/react"

function FAQ() {
    return (
        <div style={{ color: "black" }}>
            <h1 style={{ textAlign: 'center' }}>Câu hỏi thường gặp</h1>
            <Flex justifyContent="center" alignItems="center" >
                <Accordion allowToggle>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box textAlign="left" w={800}>
                                    Đăng kí khám bệnh qua ứng dụng có tốn phí không?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} textAlign="left" w={800}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis alias dignissimos autem provident praesentium culpa dolor veritatis labore, ipsa consequuntur?
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box textAlign="left" w={800}>
                                    Tôi được lợi ích gì khi sử dụng ứng dụng đăng kí khám bệnh?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} textAlign="left" w={800}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempore perferendis saepe, magni ratione enim iure quibusdam eius quo voluptatibus?
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Flex>
        </div>
    )
}

export default FAQ;