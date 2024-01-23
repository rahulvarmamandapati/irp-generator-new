import React from 'react';
import styled from 'styled-components/macro';
import { StepperContext } from '../../contexts/stepperContext';
import { ANIMATION_DIRECTION } from '../../constants';
import { device } from '../../device';
import { StyledButton } from '../../theme/globalStyle';
import bgBlueDots from '../../images/bg-blue-dots-pattern.jpg';

const StyledContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 50px 0;
  margin: auto;
  background-color: #10069f;
  background-image: url(${bgBlueDots});
  background-repeat: repeat;
  background-position: center center;

  @media ${device.breakUp768} {
    padding: 70px 0;
  }
  @media ${device.breakUp1024} {
    padding: 90px 0;
  }
`;

const StyledH3 = styled.h3`
  text-align: center;
  font-size: 24px;
  line-height: 29px;
  font-weight: bold;
  color: ${(props) => props.theme.white};
  color: #ffffff;
`;

function CallToActionSection() {
  const { dispatch } = React.useContext(StepperContext);
  return (
    <StyledContainer>
      <StyledH3>Ready to make your perfect salesperson?</StyledH3>
      <StyledButton
        type="button"
        onClick={() => {
          dispatch({ type: 'resetUserProfile' });
          dispatch({
            type: 'setCurrentPage',
            currentPage: 1,
            animationDirection: ANIMATION_DIRECTION.FORWARD,
          });
        }}
      >
        Build My IRP
      </StyledButton>
    </StyledContainer>
  );
}

export default CallToActionSection;
