import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import { device } from '../device';
import Progressbar from './Progressbar';
import StepNavigation from './StepNavigation';

const StyledControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column-reverse;
  padding-bottom: 50px;
  @media ${device.breakUp768} {
    flex-direction: row;
  }
`;

StyledControls.defaultProps = {
  'data-id': 'StyledControls',
};

function PageControls({ currentPage, isValid, validate }) {
  return (
    <StyledControls className={clsx({ withoutProgress: currentPage < 2 })}>
      <Progressbar
        currentPage={currentPage}
        style={{ marginTop: '35px', marginBottom: '35px' }}
      />
      <StepNavigation
        currentPage={currentPage}
        isValid={isValid}
        validate={validate}
      />
    </StyledControls>
  );
}

export default PageControls;
