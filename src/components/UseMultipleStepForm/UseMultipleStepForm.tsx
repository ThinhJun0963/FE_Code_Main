import { ReactElement, useState } from 'react'

const UseMultipleStepForm = (steps: ReactElement[]) => {
    const [currentStep, setCurrentStep] = useState(0);

    function next() {
        setCurrentStep(i => {
            if (i >= steps.length - 1) return i;
            return i + 1;
        })
    }

    function back() {
        setCurrentStep(i => {
            if (i <= 0) return i;
            return i - 1;
        })
    }

    function goTo(step: number) {
        setCurrentStep(step);
    }


    return {
        step: steps[currentStep],
        currentStep,
        next,
        back,
        isFirstStep: currentStep === 0,
        isFinalStep: currentStep === steps.length - 1,
        goTo,
        steps
    }
}

export default UseMultipleStepForm