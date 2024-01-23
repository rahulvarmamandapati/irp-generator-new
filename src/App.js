import React from 'react';
import 'animate.css';
import Stepper from './components/Stepper';
import { StepperProvider } from './contexts/stepperContext';

function App() {
  return (
    <StepperProvider>
      <Stepper />
    </StepperProvider>
  );
}

export default App;
