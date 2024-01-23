import React from 'react';
import { ThemeProvider } from 'styled-components/macro';
import { StepperContext } from '../../contexts/stepperContext';
import 'animate.css';
import {
  theme1,
} from '../../theme/globalStyle';
import UserBar from '../LandingPage/UserBar';
import LandingHero from '../LandingPage/LandingHero';
import InfoSection from '../LandingPage/InfoSection';
import FeatureSection from '../LandingPage/FeatureSection';
import CallToActionSection from '../LandingPage/CallToActionSection';

function LandingPage() {
  const {
    state: { persona },
  } = React.useContext(StepperContext);
  return (
    <ThemeProvider theme={theme1}>
      {!!persona.profiles.length && <UserBar />}
      <LandingHero />
      <InfoSection />
      <FeatureSection />
      <CallToActionSection />
    </ThemeProvider>
  );
}

export default LandingPage;
