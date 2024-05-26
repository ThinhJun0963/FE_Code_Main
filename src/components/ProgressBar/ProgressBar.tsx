import { ChakraProvider, Step, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, Stepper, defineStyleConfig, extendTheme, useSteps } from '@chakra-ui/react';


const stepperTheme = defineStyleConfig({
    baseStyle: {
        step: {
            indicator: {
                borderRadius: '50%',
                borderWidth: '2px',
                borderColor: 'gray.200',
                bg: 'gray.200',
            },
        },
    },
    variants: {
        active: {
            step: {
                indicator: {
                    bg: 'blue.600',
                    color: 'white',
                    borderColor: 'blue.600',
                },
            },
        },
    },
});


const theme = extendTheme({
    components: {
        Stepper: stepperTheme,
    },
})

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


const ProgressBar = ({ activeStep }: { activeStep: number }) => {

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

