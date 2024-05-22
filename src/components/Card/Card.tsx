import React from 'react'
import { Card as ChakraCard, CardHeader, CardBody, CardFooter, Heading, Box, Stack, StackDivider, Image, ButtonGroup, Divider, Button } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react';

interface Props {
    image: string,
    title: string,
    description: string
}

const Card = ({ image, title, description }: Props) => {
    return (
        <div>
            <div>
                <ChakraCard>
                    <CardBody>
                        <Image
                            src={image}
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>{title}</Heading>
                            <Text>
                                {description}
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                </ChakraCard>
            </div>
        </div>
    )
}

export default Card