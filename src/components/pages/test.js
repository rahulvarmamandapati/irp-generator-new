import React from 'react';
import { ThemeProvider } from 'styled-components/macro';
import { StepperContext } from '../../contexts/stepperContext';
import 'animate.css';
import { PrintPdf } from '../GeneratedIrp';
import {
  theme1,
} from '../../theme/globalStyle';

function LandingPage() {
  const { state: { persona, profile } } = React.useContext(StepperContext);
  return (
    <ThemeProvider theme={theme1}>
      <PrintPdf persona={persona} profile={profile} />
    </ThemeProvider>
  );
}

export default LandingPage;
