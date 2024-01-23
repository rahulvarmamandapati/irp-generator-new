import React from 'react';
import styled, { ThemeProvider } from 'styled-components/macro';
import 'animate.css';
import { ANIMATION_DIRECTION } from '../../constants';
import { StepperContext } from '../../contexts/stepperContext';
import { device } from '../../device';
import ProfileLimitModalWrapper from '../ProfileLimitModalWrapper';
import { theme1, StyledAddButton } from '../../theme/globalStyle';
import LoadProfile from '../LoadProfile';
import Container from '../Container';

export const StyledH5 = styled.h5`
  margin-top: 0;
  margin-bottom: 10px;
  font-family: ${(props) => props.theme.sansSerif};
  font-size: 17px;
  line-height: 20px;
  font-weight: bold;
  font-style: normal;
  color: ${(props) => props.theme.darkBlue};

  @media ${device.breakUp768} {
    font-size: 20px;
    line-height: 24px;
    margin-bottom: ${(props) => props.theme.spacing20};
  }
`;

const StyledUserBar = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  background-color: ${(props) => props.theme.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media ${device.breakUp768} {
    padding-top: 25px;
    flex-direction: row;
  }
`;

const StyledProfiles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 -5px;
`;

function UserBar() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const {
    state: { profiles, persona },
    dispatch,
  } = React.useContext(StepperContext);
  const welcome = persona.firstName
    ? `Welcome back, ${persona.firstName}!`
    : 'Welcome back!';

  return (
    <ThemeProvider theme={theme1}>
      <ProfileLimitModalWrapper
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
      />
      <Container>
        <StyledUserBar>
          <StyledH5
            style={{
              WebkitFontSmoothing: 'auto',
              MozOsxFontSmoothing: 'auto',
              fontWeight: 'normal',
            }}
          >
            {welcome}
          </StyledH5>
          <StyledProfiles>
            {profiles.map((otherProfile) => (
              <LoadProfile
                key={otherProfile.profile_id}
                otherProfile={otherProfile}
                size="x70x50"
              />
            ))}
            <div
              style={{
                display: 'inline-block',
                position: 'relative',
                width: '48px',
                height: '48px',
                margin: '0 5px',
              }}
            >
              <StyledAddButton
                type="button"
                style={{ position: 'absolute' }}
                onClick={() => {
                  if (profiles.length >= 5) {
                    setIsOpen(true);
                  } else {
                    dispatch({ type: 'resetUserProfile' });
                    dispatch({
                      type: 'setCurrentPage',
                      currentPage: 1,
                      animationDirection: ANIMATION_DIRECTION.FORWARD,
                    });
                  }
                }}
              >
                <span className="icon">+</span>
                {' '}
                <span className="text">Add</span>
              </StyledAddButton>
            </div>
          </StyledProfiles>
        </StyledUserBar>
      </Container>
    </ThemeProvider>
  );
}

export default UserBar;
