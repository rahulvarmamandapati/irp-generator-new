import * as React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';

const StyledProgressBarContainer = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 0;
`;

const StyledSegment = styled.div`
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.orange};
  border-radius: 5px;
  width: 50px;
  height: 10px;
  margin-left: 6px;
  margin-right: 6px;
  &.filled {
    background-color: ${(props) => props.theme.orange};
  }
`;

function Progressbar({ currentPage }) {
  return (
    <StyledProgressBarContainer>
      <StyledSegment className={clsx({ filled: currentPage === 1 })} />
      <StyledSegment className={clsx({ filled: currentPage === 2 })} />
      <StyledSegment className={clsx({ filled: currentPage === 3 })} />
    </StyledProgressBarContainer>
  );
}

export default Progressbar;
