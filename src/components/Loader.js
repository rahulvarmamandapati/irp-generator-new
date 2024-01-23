import React from 'react';
import styled from 'styled-components';

const LoaderStyled = styled.div`
  animation:spin 1s infinite linear;
  border:solid 2vmin transparent;
  border-radius:50%;
  border-right-color:#0d9ed8;
  border-top-color:#0d9ed8;
  box-sizing:border-box;
  height:20vmin;
  left:calc(50% - 10vmin);
  position:fixed;
  top:calc(50% - 10vmin);
  width:20vmin;
  z-index:1;
  &:before {
    animation:spin 2s infinite linear;
    border:solid 2vmin transparent;
    border-radius:50%;
    border-right-color:#5dbeeb;
    border-top-color:#5dbeeb;
    box-sizing:border-box;
    content:"";
    height:16vmin;
    left:0;
    position:absolute;
    top:0;
    width:16vmin;
  }
  &:after {
    animation:spin 3s infinite linear;
    border:solid 2vmin transparent;
    border-radius:50%;
    border-right-color:#93d0ec;
    border-top-color:#93d0ec;
    box-sizing:border-box;
    content:"";
    height:12vmin;
    left:2vmin;
    position:absolute;
    top:2vmin;
    width:12vmin;
  }
  @keyframes spin {
    100% {
      transform:rotate(360deg);
    }
  }
`;

const Loader = () => <LoaderStyled />;

export default Loader;
