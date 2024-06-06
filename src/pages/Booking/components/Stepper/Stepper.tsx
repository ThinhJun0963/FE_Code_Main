import { Stepper, Step, StepLabel, Typography } from '@mui/material';

const steps = ['Chọn hình thức khám', 'Chọn ngày khám', 'Chọn giờ khám', 'Xác nhận thông tin', 'Thanh toán'];

interface BookingStepperProps { 
  activeStep: number;
}

export default function BookingStepper({activeStep}: BookingStepperProps) {
  return (
    <Stepper activeStep={activeStep} alternativeLabel>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}