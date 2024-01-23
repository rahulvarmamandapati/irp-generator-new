import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import clsx from 'clsx';
import { theme1 } from '../theme/globalStyle';
import { StepperContext } from '../contexts/stepperContext';
import { ReactComponent as AvatarSprite } from '../images/AvatarSprite.svg';
import Footer from './Footer';
import Loader from './Loader';

const LandingPage = React.lazy(() => import('./pages/LandingPage'));
const Page1 = React.lazy(() => import('./pages/Page1'));
const Page2 = React.lazy(() => import('./pages/Page2'));
const Page3 = React.lazy(() => import('./pages/Page3'));
const Page4 = React.lazy(() => import('./pages/Page4'));
const Page5 = React.lazy(() => import('./pages/Page5'));
const Page6 = React.lazy(() => import('./pages/Page6'));
const Test = React.lazy(() => import('./pages/test'));
/* eslint-enable */

const renderCurrentPage = (currentPage) => {
  switch (true) {
    case currentPage === 0:
      return <LandingPage />;
    case currentPage === 1:
      return <Page1 />;
    case currentPage === 2:
      return <Page2 />;
    case currentPage === 3:
      return <Page3 />;
    case currentPage === 4:
      return <Page4 />;
    case currentPage === 5:
      return <Page5 />;
    case currentPage === 6:
      return <Page6 />;
    case currentPage === 7:
      return <Test />;
    default:
      return null;
  }
};

const StyledPage = styled.div`
  font-family: 'Montserrat', 'Trebuchet MS', Helvetica, sans-serif;
  -webkit-overflow-scrolling: touch;
  font-weight: 400;
  font-size: 16px;
  flex: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 0;
`;

StyledPage.defaultProps = {
  'data-id': 'StyledPage',
};

const AnimatedContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

AnimatedContainer.defaultProps = {
  'data-id': 'AnimatedContainer',
};

const Stepper = () => {
  const [reset, setReset] = React.useState(false);
  const { state } = React.useContext(StepperContext);
  const { currentPage, animationDirection } = state;

  React.useEffect(() => {
    setReset(true);
    setTimeout(() => setReset(false), 500);
  }, [currentPage]);

  if (state.isLoading || state.isError) return <Loader />;

  return (
    <React.Suspense fallback={null}>
      <AvatarSprite width="0" height="0" style={{ display: 'none' }} />
      <ThemeProvider theme={theme1}>
        <StyledPage>
          <AnimatedContainer
            className={clsx(reset && 'disabled_animate__animated', {
              [`disabled_animate__${animationDirection}`]: reset,
            })}
          >
            {renderCurrentPage(currentPage)}
          </AnimatedContainer>
          <Footer />
        </StyledPage>
      </ThemeProvider>
    </React.Suspense>
  );
};

export default Stepper;
