import { Box, ChakraProvider, Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper, defineStyleConfig, extendTheme, useSteps } from '@chakra-ui/react';

const stepperTheme = defineStyleConfig({
    baseStyle: {
        // select the indicator part
        indicator: {
            // change the default border radius to 0
            borderRadius: 10,
            boderWidth: 10,
            bg: 'blue.600'
        },
    },

})

const theme = extendTheme({
    components: {
        Stepper: stepperTheme,
    },
})


const ProgressBar = () => {

    const steps = [
        {},
        {},
        {},
        {},
        {}
    ]

    const { activeStep } = useSteps({
        index: 1,
        count: steps.length,
    })

    return (
            <ChakraProvider theme={theme}>
                <Stepper size='lg' index={activeStep}>
                    {steps.map((step, index) => (
                        <Step key={index}>
                            <StepIndicator>
                                <StepStatus
                                    complete={<StepIcon />}
                                    incomplete={<StepNumber />}
                                    active={<StepNumber />}
                                />
                            </StepIndicator>
                            <StepSeparator />
                        </Step>
                    ))}
                </Stepper>
            </ChakraProvider>
    );
}
export default ProgressBar;

