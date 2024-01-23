import React from 'react';
import styled from 'styled-components/macro';
import { StepperContext } from '../../contexts/stepperContext';
import { StyledButton } from '../../theme/globalStyle';
import { ANIMATION_DIRECTION } from '../../constants';
import { device } from '../../device';
import ProfileLimitModalWrapper from '../ProfileLimitModalWrapper';
import logo from '../../images/mindtickle-logo-white.svg';
import heroImagBgLeft from '../../images/hero-imag-bg-001.png';
import heroImagBgRight from '../../images/hero-imag-bg-002.png';
import iconBtnArrow from '../../images/icon-button-arrow-right.svg';
import iconArrowThinRed from '../../images/icon-arrow-thin-red.svg';
import theBuyer from '../../images/the-buyer-001@2x.png';
import theSeller from '../../images/the-seller-001@2x.png';

const StyledContainer = styled.section`
  padding-left: 20px;
  padding-right: 20px;
  margin: auto;
  width: 100%;
  background-color: #10069f;
  overflow: hidden;
  @media ${device.breakUp768} {
    padding: 0;
    padding-bottom: 50px;
  }
`;

const StyledLogo = styled.img`
  width: 140px;
  height: 20px;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 40px;
  display: block;
  @media ${device.breakUp768} {
    width: 195px;
    height: 30px;
    margin-top: 40px;
  }
  @media ${device.breakUp1024} {
    margin-bottom: 75px;
  }
  @media ${device.breakUp1440} {
    margin-bottom: 115px;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 550px;
  margin: auto;

  @media ${device.breakUp768} {
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-left: 60px;
    padding-right: 60px;
    min-height: 700px;
  }
  @media ${device.breakUp1024} {
    min-height: auto;
  }
  @media ${device.breakUp1440} {
    padding-left: 120px;
    padding-right: 120px;
  }
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  @media ${device.breakUp768} {
    flex-direction: row;
  }
  @media ${device.breakUp1024} {
    flex-wrap: nowrap;
  }
`;

const StyledColOneThirdsMdUp = styled.div`
  flex: 1 0 0%;
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  &.order-mdUp-1 {
    @media ${device.breakUp1024} {
      order: 1;
    }
  }
  &.order-mdUp-2 {
    flex: 0 0 auto;
    width: 100%;

    @media ${device.breakUp1024} {
      order: 2;
      width: 42.23%;
    }

    @media ${device.breakUp1440} {
      width: 49.6999%;
    }
  }
  &.order-mdUp-3 {
    @media ${device.breakUp1024} {
      order: 3;
    }
  }
`;

const StyledCenterCol = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  max-width: 480px;
  margin: auto;
`;

const StyledH2 = styled.h2`
  text-align: center;
  font-size: 30px;
  line-height: 36px;
  font-weight: bold;
  color: ${(props) => props.theme.white};
  margin-top: 0;
  margin-bottom: 20px;
  @media ${device.breakUp768} {
    font-size: 50px;
    line-height: 61px;
  }
  @media ${device.breakUp1024} {
    margin-bottom: 60px;
  }
  @media ${device.breakUp1440} {
    margin-bottom: 20px;
  }
`;

const StyledSubheading = styled.p`
  text-align: center;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0px;
  color: #ffffff;
  margin-top: 0;
  margin-bottom: 30px;
  @media ${device.breakUp768} {
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 25px;
  }
`;

const ReStyledButton = styled(StyledButton)`
  margin-bottom: 50px;
  @media ${device.breakUp768} {
    margin-bottom: 60px;
  }
  @media ${device.breakUp1024} {
    margin-bottom: 80px;
  }
  @media ${device.breakUp1440} {
    margin-bottom: 95px;
  }
`;

const StyledTagLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  line-height: 15px;
  font-weight: bold;
  color: #ffffff;
  text-transform: uppercase;
  margin-bottom: 50px;
  @media ${device.breakUp768} {
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 20px;
  }
  @media ${device.breakUp1024} {
    margin-bottom: 50px;
  }
  @media ${device.breakUp1440} {
    margin-bottom: 160px;
  }
  .leftArrow,
  .rightArrow {
    margin: 0 10px;
    display: none;
    @media ${device.breakUp768} {
      display: block;
    }
  }
  .rightArrow {
    transform: rotate(180deg);
  }
`;

const StyledProfileEx = styled.div`
  position: relative;
  z-index: 1;
  margin: 0 auto 60px;
  width: 100%;

  @media ${device.breakUp768} {
    max-width: 265px;
  }
  @media ${device.breakUp1440} {
    max-width: none;
  }

  &.left {
    @media ${device.breakUp768} {
      margin-left: 0;
      margin-right: auto;
    }
  }
  &.right {
    @media ${device.breakUp768} {
      margin-left: auto;
      margin-right: 0;
    }
  }

  &.left::before,
  &.right::after {
    content: '';
    position: absolute;
    z-index: -1;
    width: 235px;
    height: 365px;
    top: 0;
    background-repeat: no-repeat;
    background-position: top;
    background-size: 100% 100%;

    @media ${device.breakUp768} {
      width: 315px;
      height: 420px;
    }
    @media ${device.breakUp1440} {
      width: 395px;
      height: 538px;
    }
  }
  &.left::before {
    background-image: url(${heroImagBgLeft});
    top: -15px;
    left: -10px;
    background-position: center left;
    @media ${device.breakUp768} {
      top: -70px;
      left: -60px;
    }
    @media ${device.breakUp1024} {
      top: -60px;
      left: -50px;
    }
    @media ${device.breakUp1440} {
      top: -170px;
      left: -110px;
    }
  }
  &.right::after {
    background-image: url(${heroImagBgRight});
    top: -5px;
    right: 0;
    background-position: center right;
    @media ${device.breakUp768} {
      top: -20px;
      right: -70px;
    }
    @media ${device.breakUp1440} {
      top: -150px;
      right: -115px;
    }
  }

  img {
    display: block;
    margin: auto;
    width: 240px;
    @media ${device.breakUp768} {
      width: 230px;
    }
    @media ${device.breakUp1440} {
      width: 260px;
    }
  }
  .caption {
    border-radius: 15px;
    background-color: #fff;
    margin-top: -80px;
    position: relative;
    z-index: 2;
    padding: 15px 30px;
    text-align: center;
    font-size: 16px;
    line-height: 19px;
    color: #10109f;
    max-width: 260px;
    margin-left: auto;
    margin-right: auto;

    @media ${device.breakUp1440} {
      max-width: none;
    }

    .label {
      font-size: 17px;
      line-height: 20px;
      font-weight: bold;
      color: #fe5000;
      display: block;
    }
  }
`;

function LandingHero() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const { state: { profiles }, dispatch } = React.useContext(StepperContext);
  return (
    <StyledContainer>
      <ProfileLimitModalWrapper
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
      />
      <StyledLogo src={logo} alt="logo" />
      <StyledWrapper>
        <StyledRow>
          <StyledColOneThirdsMdUp className="order-mdUp-2">
            <StyledCenterCol>
              <StyledH2>Build My Ideal Rep Profile</StyledH2>
              <StyledSubheading>
                An IRP Generator from Mindtickle
              </StyledSubheading>
              <ReStyledButton
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
                <span>Build My IRP</span>
                {' '}
                <img src={iconBtnArrow} alt="" />
              </ReStyledButton>
              <StyledTagLine>
                <img src={iconArrowThinRed} alt="" className="leftArrow" />
                EVERY DEAL HAS TWO SIDES
                <img src={iconArrowThinRed} alt="" className="rightArrow" />
              </StyledTagLine>
            </StyledCenterCol>
          </StyledColOneThirdsMdUp>
          <StyledColOneThirdsMdUp className="order-mdUp-1">
            <StyledProfileEx className="left">
              <img src={theBuyer} alt="" width="260" />
              <div className="caption">
                <span className="label">The Buyer</span>
                <span>You know your ideal customer profile.</span>
              </div>
            </StyledProfileEx>
          </StyledColOneThirdsMdUp>
          <StyledColOneThirdsMdUp className="right order-mdUp-3">
            <StyledProfileEx className="right">
              <img src={theSeller} alt="" width="260" />
              <div className="caption">
                <span className="label">The Seller</span>
                <span>But do you know your ideal rep profile?</span>
              </div>
            </StyledProfileEx>
          </StyledColOneThirdsMdUp>
        </StyledRow>
      </StyledWrapper>
    </StyledContainer>
  );
}

export default LandingHero;
