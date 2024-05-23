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
                        Không, dịch vụ đăng ký khám online hoàn toàn miễn phí. Bạn chỉ cần chọn thời gian và bác sĩ phù hợp để đặt lịch hẹn một cách tiện lợi.
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
                                    Sử dụng ứng dụng đăng ký khám bệnh mang lại nhiều lợi ích như: tiết kiệm thời gian, dễ dàng chọn lựa bác sĩ và thời gian khám phù hợp, nhận nhắc nhở lịch hẹn, và truy cập thông tin khám chữa bệnh một cách thuận tiện.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Flex>
        </div>
    )
}

export default FAQ;