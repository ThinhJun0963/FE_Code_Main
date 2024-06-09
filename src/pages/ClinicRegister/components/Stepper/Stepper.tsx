import { Stepper, Step, StepLabel, Typography } from '@mui/material';
import React, { useState } from 'react';

const steps = ['Thông tin cơ bản', 'Các dịch vụ của phòng khám', 'Các giấy chứng nhận cần thiết','Xác nhận thông tin'];

interface RegistingStepperProps { 
  activeStep: number;
}

export default function RegistingStepper({activeStep}: RegistingStepperProps) {
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