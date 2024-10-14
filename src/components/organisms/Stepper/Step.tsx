'use client';
import React, { HTMLProps, useEffect, useMemo } from 'react';
import { useStepper } from '.';


export interface IStepperStepProps extends HTMLProps<any> {
  children: React.ReactNode | React.ReactNode[];
  value: number;
  as?: keyof React.ReactHTML;
}

export const Step: React.FC<IStepperStepProps> = ({ children, value, as = 'div', ...props }) => {
  const stepperState = useStepper();

  const isActiveStep = useMemo(() => {
    return stepperState.step === value;
  }, [stepperState.step]);

  useEffect(() => {
    stepperState.setRegisteredSteps((prev) => {
      return [...prev.filter((val) => val != value), value];
    });

    return () => {
      stepperState.setRegisteredSteps((prev) => {
        return [...prev.filter((val) => val != value)];
      });
    };
  }, []);

  const component = React.createElement(as, { ...props }, children);

  return isActiveStep && (
    <React.Fragment>
      {component}
    </React.Fragment>
  );
};