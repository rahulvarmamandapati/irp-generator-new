import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components/macro';
import LoadProfile from './LoadProfile';
import { StepperContext } from '../contexts/stepperContext';
import { CloseButton } from '../theme/globalStyle';
import { device } from '../device';
import iconClose from '../images/icon-close.svg';
import 'animate.css';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(16, 6, 159, 0.9)',
  },
  content: {
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
    inset: 'auto',
    padding: '0',
    margin: '0',
    border: 'none',
    borderRadius: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const StyledContainer = styled.section`
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
  width: 100%;
  background-color: transparent;
  position: relative;

  @media ${device.breakUp768} {
    width: 665px;
  }
  @media ${device.breakUp1440} {
    width: 665px;
  }
`;

const StyledProfiles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 -5px;
`;

const StyledH2 = styled.h2`
  text-align: center;
  font-family: ${(props) => props.theme.sansSerif};
  font-size: 30px;
  line-height: 40px;
  font-weight: bold;
  color: #fff;
  margin: 0;
  margin-bottom: 20px;
  @media ${device.breakUp768} {
    font-size: 35px;
    line-height: 43px;
    margin-bottom: 25px;
  }
`;

const StyledP = styled.p`
  text-align: center;
  font-family: ${(props) => props.theme.sansSerif};
  font-size: 17px;
  line-height: 26px;
  color: #fff;
  margin: 0;
  margin-bottom: 30px;
  @media ${device.breakUp768} {
    font-size: 20px;
    line-height: 29px;
    margin-bottom: 35px;
  }
  @media ${device.breakUp1440} {
    margin-bottom: 20px;
  }
`;

const ProfileLimitModalWrapper = ({ modalIsOpen, setIsOpen }) => {
  const {
    state: { profiles },
  } = React.useContext(StepperContext);

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        appElement={document.getElementById('root' || undefined)}
      >
        <StyledContainer>
          <CloseButton
            type="button"
            style={{ position: 'absolute', right: '20px', top: '-20px' }}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <img src={iconClose} alt="close" />
          </CloseButton>
          <StyledH2>We’re glad you’re enjoying the IRP generator.</StyledH2>
          <StyledP style={{ color: '#FFF' }}>
            You’ve hit the maximum profile limit, but you can edit or delete one
            of your profiles to make a new one by clicking on their avatar
            below.
          </StyledP>
          <StyledProfiles>
            {profiles.map((otherProfile) => (
              <LoadProfile
                key={otherProfile.profile_id}
                otherProfile={otherProfile}
                size="x70"
              />
            ))}
          </StyledProfiles>
        </StyledContainer>
      </Modal>
    </div>
  );
};

export default ProfileLimitModalWrapper;
