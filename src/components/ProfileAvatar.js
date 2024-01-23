import React from 'react';
import styled from 'styled-components/macro';
import lottie from 'lottie-web';
import { device } from '../device';
import avatar01 from '../data/avatar01.json';
import avatar02 from '../data/avatar02.json';
import avatar03 from '../data/avatar03.json';
import avatar04 from '../data/avatar04.json';
import avatar05 from '../data/avatar05.json';
import avatar06 from '../data/avatar06.json';
import avatar07 from '../data/avatar07.json';
import avatar08 from '../data/avatar08.json';
import avatar09 from '../data/avatar09.json';
import avatar10 from '../data/avatar10.json';
import avatar11 from '../data/avatar11.json';
import avatar12 from '../data/avatar12.json';
import avatar13 from '../data/avatar13.json';
import avatar14 from '../data/avatar14.json';
import avatar15 from '../data/avatar15.json';

const StyledProfileImage = styled.div`
  width: 150px;
  height: 150px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  border-radius: 100%;
  background-color: #fff;
  position: relative;

  @media ${device.breakUp768} {
    margin: 0 0 35px;
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
  &.x150x120 {
    width: 120px;
    height: 120px;

    @media ${device.breakUp1440} {
      width: 150px;
      height: 150px;
    }
  }
  &.x120x64 {
    width: 64px;
    height: 64px;
    margin-bottom: 0;

    @media ${device.breakUp1024} {
      width: 120px;
      height: 120px;
    }
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
`;

function Avatar01() {
  const element = React.useRef(null);
  const lottieInstance = React.useRef();
  React.useEffect(() => {
    if (element.current) {
      lottieInstance.current = lottie.loadAnimation({
        animationData: avatar01,
        container: element.current,
        loop: false,
        autoplay: true,
      });
    }
  }, []);

  return (
    <div
      className="lottie"
      style={{ width: '100%', height: '100%' }}
      ref={element}
    />
  );
}

function Avatar02() {
  const element = React.useRef(null);
  const lottieInstance = React.useRef();
  React.useEffect(() => {
    if (element.current) {
      lottieInstance.current = lottie.loadAnimation({
        animationData: avatar02,
        container: element.current,
        loop: false,
        autoplay: true,
      });
    }
  }, []);

  return (
    <div
      className="lottie"
      style={{ width: '100%', height: '100%' }}
      ref={element}
    />
  );
}

function Avatar03() {
  const element = React.useRef(null);
  const lottieInstance = React.useRef();
  React.useEffect(() => {
    if (element.current) {
      lottieInstance.current = lottie.loadAnimation({
        animationData: avatar03,
        container: element.current,
        loop: false,
        autoplay: true,
      });
    }
  }, []);

  return (
    <div
      className="lottie"
      style={{ width: '100%', height: '100%' }}
      ref={element}
    />
  );
}
function Avatar04() {
  const element = React.useRef(null);
  const lottieInstance = React.useRef();
  React.useEffect(() => {
    if (element.current) {
      lottieInstance.current = lottie.loadAnimation({
        animationData: avatar04,
        container: element.current,
        loop: false,
        autoplay: true,
      });
    }
  }, []);

  return (
    <div
      className="lottie"
      style={{ width: '100%', height: '100%' }}
      ref={element}
    />
  );
}
function Avatar05() {
  const element = React.useRef(null);
  const lottieInstance = React.useRef();
  React.useEffect(() => {
    if (element.current) {
      lottieInstance.current = lottie.loadAnimation({
        animationData: avatar05,
        container: element.current,
        loop: false,
        autoplay: true,
      });
    }
  }, []);

  return (
    <div
      className="lottie"
      style={{ width: '100%', height: '100%' }}
      ref={element}
    />
  );
}
function Avatar06() {
  const element = React.useRef(null);
  const lottieInstance = React.useRef();
  React.useEffect(() => {
    if (element.current) {
      lottieInstance.current = lottie.loadAnimation({
        animationData: avatar06,
        container: element.current,
        loop: false,
        autoplay: true,
      });
    }
  }, []);

  return (
    <div
      className="lottie"
      style={{ width: '100%', height: '100%' }}
      ref={element}
    />
  );
}
function Avatar07() {
  const element = React.useRef(null);
  const lottieInstance = React.useRef();
  React.useEffect(() => {
    if (element.current) {
      lottieInstance.current = lottie.loadAnimation({
        animationData: avatar07,
        container: element.current,
        loop: false,
        autoplay: true,
      });
    }
  }, []);

  return (
    <div
      className="lottie"
      style={{ width: '100%', height: '100%' }}
      ref={element}
    />
  );
}
function Avatar08() {
  const element = React.useRef(null);
  const lottieInstance = React.useRef();
  React.useEffect(() => {
    if (element.current) {
      lottieInstance.current = lottie.loadAnimation({
        animationData: avatar08,
        container: element.current,
        loop: false,
        autoplay: true,
      });
    }
  }, []);

  return (
    <div
      className="lottie"
      style={{ width: '100%', height: '100%' }}
      ref={element}
    />
  );
}
function Avatar09() {
  const element = React.useRef(null);
  const lottieInstance = React.useRef();
  React.useEffect(() => {
    if (element.current) {
      lottieInstance.current = lottie.loadAnimation({
        animationData: avatar09,
        container: element.current,
        loop: false,
        autoplay: true,
      });
    }
  }, []);

  return (
    <div
      className="lottie"
      style={{ width: '100%', height: '100%' }}
      ref={element}
    />
  );
}
function Avatar10() {
  const element = React.useRef(null);
  const lottieInstance = React.useRef();
  React.useEffect(() => {
    if (element.current) {
      lottieInstance.current = lottie.loadAnimation({
        animationData: avatar10,
        container: element.current,
        loop: false,
        autoplay: true,
      });
    }
  }, []);

  return (
    <div
      className="lottie"
      style={{ width: '100%', height: '100%' }}
      ref={element}
    />
  );
}
function Avatar11() {
  const element = React.useRef(null);
  const lottieInstance = React.useRef();
  React.useEffect(() => {
    if (element.current) {
      lottieInstance.current = lottie.loadAnimation({
        animationData: avatar11,
        container: element.current,
        loop: false,
        autoplay: true,
      });
    }
  }, []);

  return (
    <div
      className="lottie"
      style={{ width: '100%', height: '100%' }}
      ref={element}
    />
  );
}
function Avatar12() {
  const element = React.useRef(null);
  const lottieInstance = React.useRef();
  React.useEffect(() => {
    if (element.current) {
      lottieInstance.current = lottie.loadAnimation({
        animationData: avatar12,
        container: element.current,
        loop: false,
        autoplay: true,
      });
    }
  }, []);

  return (
    <div
      className="lottie"
      style={{ width: '100%', height: '100%' }}
      ref={element}
    />
  );
}
function Avatar13() {
  const element = React.useRef(null);
  const lottieInstance = React.useRef();
  React.useEffect(() => {
    if (element.current) {
      lottieInstance.current = lottie.loadAnimation({
        animationData: avatar13,
        container: element.current,
        loop: false,
        autoplay: true,
      });
    }
  }, []);

  return (
    <div
      className="lottie"
      style={{ width: '100%', height: '100%' }}
      ref={element}
    />
  );
}
function Avatar14() {
  const element = React.useRef(null);
  const lottieInstance = React.useRef();
  React.useEffect(() => {
    if (element.current) {
      lottieInstance.current = lottie.loadAnimation({
        animationData: avatar14,
        container: element.current,
        loop: false,
        autoplay: true,
      });
    }
  }, []);

  return (
    <div
      className="lottie"
      style={{ width: '100%', height: '100%' }}
      ref={element}
    />
  );
}

function Avatar15() {
  const element = React.useRef(null);
  const lottieInstance = React.useRef();
  React.useEffect(() => {
    if (element.current) {
      lottieInstance.current = lottie.loadAnimation({
        animationData: avatar15,
        container: element.current,
        loop: false,
        autoplay: true,
      });
    }
  }, []);

  return (
    <div
      className="lottie"
      style={{ width: '100%', height: '100%' }}
      ref={element}
    />
  );
}

function ProfileAvatar({ children, id, size }) {
  return (
    <StyledProfileImage className={size}>
      {id === 'avatar01' && <Avatar01 />}
      {id === 'avatar02' && <Avatar02 />}
      {id === 'avatar03' && <Avatar03 />}
      {id === 'avatar04' && <Avatar04 />}
      {id === 'avatar05' && <Avatar05 />}
      {id === 'avatar06' && <Avatar06 />}
      {id === 'avatar07' && <Avatar07 />}
      {id === 'avatar08' && <Avatar08 />}
      {id === 'avatar09' && <Avatar09 />}
      {id === 'avatar10' && <Avatar10 />}
      {id === 'avatar11' && <Avatar11 />}
      {id === 'avatar12' && <Avatar12 />}
      {id === 'avatar13' && <Avatar13 />}
      {id === 'avatar14' && <Avatar14 />}
      {id === 'avatar15' && <Avatar15 />}
      <span className="label">{children}</span>
    </StyledProfileImage>
  );
}

export default ProfileAvatar;
