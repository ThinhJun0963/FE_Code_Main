const ProgressBar = ({ activeStep }: { activeStep: number }) => {

    return (
        <div>Hi</div>
        // <ChakraProvider theme={theme}>
        //     <Stepper size='lg' index={activeStep}>
        //         {steps.map((step, index) => (
        //             <Step key={index}>
        //                 <StepIndicator>
        //                     <StepStatus
        //                         complete={<StepIcon />}
        //                         incomplete={<StepNumber />}
        //                         active={<StepNumber />}
        //                     />
        //                 </StepIndicator>
        //                 <StepSeparator />
        //             </Step>
        //         ))}
        //     </Stepper>
        // </ChakraProvider>
    );
}

export default ProgressBar;
