import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box} from "@chakra-ui/react"

function FAQ() {
    return (
        <div style={{ color: "black" }}>
            <h1 style={{ textAlign: 'center' }}>Câu hỏi thường gặp</h1>
            <Accordion allowToggle>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex="1" textAlign="center">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, adipisci?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} textAlign="center">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis alias dignissimos autem provident praesentium culpa dolor veritatis labore, ipsa consequuntur?
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex="1" textAlign="center">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, ipsa!
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} textAlign="center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempore perferendis saepe, magni ratione enim iure quibusdam eius quo voluptatibus?
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default FAQ;