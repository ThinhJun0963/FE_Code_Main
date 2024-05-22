import { Box, Flex, Text, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons';

export default function Hero() {
    return (
        <Box
            h={'50vh'}
            backgroundColor={'#1975dc'}
            justifyContent={'center'} // Add this line
            alignItems={'center'} // And this line
        >
            <Box pt={30}>
                <Flex
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Box pt={20}>
                        <Text fontSize={40} fontWeight="bold">Ứng dụng đặt khám</Text>
                        <Text fontSize={25}>Đặt khám với hơn 100 phòng khám trên SmileCare
                            để có số thứ tự và khung giờ khám trước.
                        </Text>
                        <InputGroup>
                            <Input mt={4} placeholder="Triệu chứng, phòng khám" backgroundColor="white" sx={{ "::placeholder": { color: "black" } }} />
                            <InputRightElement
                                pointerEvents="none"
                                children={<SearchIcon color="gray.300" />}
                            />
                        </InputGroup>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}