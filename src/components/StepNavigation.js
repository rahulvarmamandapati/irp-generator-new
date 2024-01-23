import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import { device } from '../device';
import { ReactComponent as IconArrowLeft } from '../images/icon-arrow-left.svg';
import { ReactComponent as IconArrowRight } from '../images/icon-arrow-right.svg';
import { StyledButton, PrevButton, NextButton } from '../theme/globalStyle';
import { StepperContext } from '../contexts/stepperContext';
import iconBtnArrow from '../images/icon-button-arrow-right.svg';

const StyledNavButtons = styled.div`
  text-align: center;
  margin-top: 35px;
  display: flex;
  align-items: center;

  @media ${device.breakUp425} {
    text-align: right;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
  }
  &.last {
    flex-flow: column;
    @media ${device.breakUp425} {
      flex-flow: row;
    }
  }
`;

StyledNavButtons.defaultProps = {
  'data-id': 'StyledNavButtons',
};

function StepNavigation({ currentPage, isValid, validate }) {
  const { dispatch } = React.useContext(StepperContext);
  return (
    <StyledNavButtons className={clsx({ last: currentPage >= 3 })}>
      {currentPage > 1 && (
        <PrevButton
          style={{ marginBottom: '30px' }}
          onClick={() => {
            dispatch({ type: 'previous' });
          }}
        >
          <IconArrowLeft width="18" height="15" />
        </PrevButton>
      )}
      {currentPage < 3 && (
        <NextButton
          className={clsx(!isValid && 'disabled')}
          style={{ marginBottom: '30px' }}
          onClick={() => {
            if (isValid) {
              dispatch({ type: 'next' });
              return;
            }
            validate();
          }}
        >
          <IconArrowRight width="18" height="15" />
        </NextButton>
      )}
      {currentPage >= 3 && (
        <StyledButton
          disabled={!isValid}
          style={{ marginBottom: '30px' }}
          onClick={() => {
            dispatch({ type: 'next' });
          }}
        >
          <span>Generate IRP Now</span>
          {' '}
          <img src={iconBtnArrow} alt="" />
        </StyledButton>
      )}
    </StyledNavButtons>
  );
}

export default StepNavigation;
