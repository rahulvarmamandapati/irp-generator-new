import React from 'react';
import styled from 'styled-components/macro';
import { device } from '../device';

const StyledContainer = styled.section`
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
  width: 100%;
  background-color: transparent;
  position: relative;

  @media ${device.breakUp768} {
    padding-left: 60px;
    padding-right: 60px;
  }
  @media ${device.breakUp1440} {
    width: 1314px; // 1194 + 60 + 60
  }
`;

function Container({ children, ...rest }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <StyledContainer {...rest}>{children}</StyledContainer>;
}

export default Container;
