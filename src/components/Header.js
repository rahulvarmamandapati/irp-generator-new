import React from 'react';
import styled from 'styled-components';
import { StepperContext } from '../contexts/stepperContext';
import { ANIMATION_DIRECTION } from '../constants';
import logo from '../images/mindtickle-logo-white.svg';
import { ReactComponent as IconArrowLeftSm } from '../images/icon-arrow-left-sm.svg';
import iconClose from '../images/icon-close.svg';
import { CloseButton } from '../theme/globalStyle';
import { device } from '../device';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
  position: relative;
  @media ${device.breakUp768} {
    padding: 35px 0;
  }
`;

StyledHeader.defaultProps = {
  'data-id': 'StyledHeader',
};

const StyledLogo = styled.img`
  width: 140px;
  height: 20px;
  margin: auto;
  @media ${device.breakUp768} {
    width: 195px;
    height: 30px;
  }
`;

StyledLogo.defaultProps = {
  'data-id': 'StyledLogo',
};

const StyledAbsoluteBtn = styled.div`
  position: absolute;
`;

const StyledIcon = styled.div`
  display: inline-block;
  margin-right: 10px;
  & svg {
    color: #ffffff;
  }
`;

const StyledBtnText = styled.span`
  display: none;
  @media ${device.breakUp768} {
    display: inline-block;
  }
`;

function Header() {
  const { state: { currentPage }, dispatch } = React.useContext(StepperContext);
  return (
    <StyledHeader>
      {currentPage !== 5 && (
        <StyledAbsoluteBtn>
          <CloseButton
            onClick={() => {
              dispatch({
                type: 'setCurrentPage',
                currentPage: currentPage === 6 ? 4 : 0,
                animationDirection: ANIMATION_DIRECTION.BACKWARD,
              });
            }}
          >
            <StyledIcon>
              <IconArrowLeftSm width="14" height="12" />
            </StyledIcon>
            {currentPage !== 6 && <StyledBtnText>HOME</StyledBtnText>}
            {currentPage === 6 && <StyledBtnText>BACK TO MY IRP</StyledBtnText>}
          </CloseButton>
        </StyledAbsoluteBtn>
      )}
      <StyledLogo src={logo} alt="logo" />
      {currentPage === 5 && (
        <CloseButton
          type="button"
          style={{ position: 'absolute', right: '0' }}
          onClick={() => {
            dispatch({
              type: 'setCurrentPage',
              currentPage: 4,
              animationDirection: ANIMATION_DIRECTION.BACKWARD,
            });
          }}
        >
          <img src={iconClose} alt="close" />
        </CloseButton>
      )}
    </StyledHeader>
  );
}

export default Header;
