'use client'
import { usePersistState } from '@/hooks/usePersistState';
import React, {  useState } from 'react'


interface StepperContextValue<T> {
  step: number;
  registeredSteps: number[],
  state?: T;

  nextStep: () => void;
  previousStep: () => void;

  setStep: React.Dispatch<React.SetStateAction<number>>;
  setRegisteredSteps: React.Dispatch<React.SetStateAction<number[]>>
  setState: React.Dispatch<React.SetStateAction<T>>;
}

interface IStepperHOCProps<T> {
  defaultValue?: T;
  persistState: boolean;
  // * Unique ID
  id: string;
}

const Context = React.createContext<StepperContextValue<any>>({
  state: {}, setState: () => { },
  step: 0, setStep: () => { },

  nextStep() { },
  previousStep() { },


  setRegisteredSteps: () => { },
  registeredSteps: [],

});

const StepperHOC = <T,>({ defaultValue, id, persistState }: IStepperHOCProps<T>, Component: React.FC<any>) => {
  const stepKey: undefined | `@${string}` = persistState ? `@stepper_${id}-step` : undefined;
  const stateKey: undefined | `@${string}` = persistState ? `@stepper_${id}-state` : undefined;
  return (props: any) => {
    const [state, setState] = usePersistState<T>(stateKey, defaultValue);
    const [step, setStep] = usePersistState<number>(stepKey, 0);
    const [registeredSteps, setRegisteredSteps] = useState<number[]>([]);


    const nextStep = () => {
      setStep((prev) => prev < registeredSteps.length - 1 ? prev + 1 : prev);
    }

    const previousStep = () => {
      setStep((prev) => prev > 0 ? prev - 1 : prev);
    }

    return (
      <Context.Provider value={{
        state, setState,
        step: step ?? 0, setStep,

        nextStep,
        previousStep,
        registeredSteps, setRegisteredSteps
      }}>
        <Component {...props} />
      </Context.Provider>
    )
  }
}


function useStepper<T = any>() {
  return React.useContext<StepperContextValue<T>>(Context)
}

export { StepperHOC, useStepper }