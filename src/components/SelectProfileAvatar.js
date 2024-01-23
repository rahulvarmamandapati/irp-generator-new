import React from 'react';
import styled from 'styled-components/macro';
import clsx from 'clsx';
import { device } from '../device';

const StyledProfileImage = styled.svg`
  width: 200px;
  height: 200px;
  margin-bottom: ${(props) => props.theme.spacing35};
  border-radius: 100%;
  position: relative;

  &.x120 {
    width: 120px;
    height: 120px;
  }
  &.x150 {
    width: 150px;
    height: 150px;
  }
  &.x120x115x135x70 {
    width: 73px;
    height: 73px;
    margin-bottom: 0;

    @media ${device.breakUp768} {
      width: 135px;
      height: 135px;
    }
    @media ${device.breakUp1024} {
      width: 115px;
      height: 115px;
    }
    @media ${device.breakUp1440} {
      width: 120px;
      height: 120px;
    }
  }

  &.x70 {
    width: 70px;
    height: 70px;
    margin-bottom: 0;
  }

  &.x70x50 {
    width: 50px;
    height: 50px;
    margin-bottom: 0;

    @media ${device.breakUp1024} {
      width: 70px;
      height: 70px;
    }
  }

  .label {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    text-indent: -999em;
    user-select: none;
    z-index: -1;
  }
`;

function ProfileAvatar({ size, id, selected }) {
  const [hover, setHover] = React.useState(false);
  return (
    <StyledProfileImage
      overflow="auto"
      className={clsx('styledProfileImage', size, id, selected && 'selected')}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      {selected && <use xlinkHref={`#${id}_hover`} />}
      {!selected && <use xlinkHref={hover ? `#${id}_hover` : `#${id}`} />}
    </StyledProfileImage>
  );
}

export default ProfileAvatar;
