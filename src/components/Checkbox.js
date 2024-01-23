import React from 'react';
import styled from 'styled-components';
import { device } from '../device';

let nextId = 0;

function getNextId(prefix = 'checkbox') {
  // eslint-disable-next-line no-plusplus
  return `${prefix}-${nextId++}`;
}

const StyledSvg = styled.svg`
  @-webkit-keyframes ripple {
    0% {
      opacity: 0;
      r: 0;
    }
    50% {
      opacity: 0.18;
      r: 120%;
    }
    100% {
      opacity: 0;
      r: 140%;
    }
  }

  @keyframes ripple {
    0% {
      opacity: 0;
      r: 0;
    }
    50% {
      opacity: 0.18;
      r: 120%;
    }
    100% {
      opacity: 0;
      r: 140%;
    }
  }
  height: 18px;
  width: 18px;
  border-radius: 4px;
  border-style: solid;
  border-width: 2px;
  overflow: visible !important;
  border-color: #fff;
  background-color: transparent;

  .checkbox-indicator-bg {
    cx: 50%;
    cy: 50%;
    r: 50%;
    height: 0;
    width: 0;
    fill: ${(props) => props.theme.orange};
    opacity: 0;
    transition: 200ms ease-in-out opacity;
    will-change: opacity;
  }

  .checkbox-indicator-mark {
    fill: none;
    stroke: #fff;
    stroke-width: 2;
    transition: 200ms linear stroke-dashoffset;
  }

  .checkbox-indicator-ripple {
    fill: ${(props) => props.theme.orange};
    cx: 50%;
    cy: 50%;
    will-change: opacity, r;
  }
`;

const StyledLabel = styled.label`
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  justify-content: flex-start;
  user-select: none;
  padding-bottom: 10px;
  padding-left: 12px;
  width: 100%;
  margin-top: 5px;
  @media ${device.mobileL} {
    width: 45%;
  }
  @media ${device.desktop} {
    padding-bottom: 17px;
    width: 32%;
  }
`;

const CheckboxIndicator = () => {
  const markLength = 15.749618530273438;

  return (
    <StyledSvg viewBox="0 0 16 16" className="checkbox-indicator">
      <rect className="checkbox-indicator-bg" />
      <circle className="checkbox-indicator-ripple" />
      <path
        className="checkbox-indicator-mark jsMark"
        transform="translate(1, 2)"
        strokeDashoffset={markLength}
        strokeDasharray={markLength}
        d="M1.42420783 6.03075103 5.00322799 9.5725669 12.5960318 2.01301652"
      />
    </StyledSvg>
  );
};

const StyledInput = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  height: 22px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 24px;

  &:disabled ~ .checkbox-label {
    color: #b0b0b0;
  }

  &:focus ~ .checkbox-indicator .checkbox-indicator-ripple {
    animation: ripple 600ms;
  }

  &:checked ~ .checkbox-indicator {
    border-color: ${(props) => props.theme.orange};
  }

  &:checked ~ .checkbox-indicator .checkbox-indicator-bg {
    height: 100%;
    width: 100%;
    opacity: 1;
    transition: 200ms ease-in-out opacity;
  }

  &:checked ~ .checkbox-indicator .checkbox-indicator-mark {
    stroke-dashoffset: 0;
  }

  &:required ~ .checkbox-label:after {
    content: '*';
  }

  &:disabled ~ .checkbox-indicator {
    border-color: rgba(0, 0, 0, 0.38);
    background-color: transparent;
  }

  &:disabled ~ .checkbox-indicator .checkbox-indicator-bg {
    fill: rgba(0, 0, 0, 0.38);
  }
`;

const StyledCheckboxLabel = styled.span`
  padding: 0 12px;
  font-size: 3.5vw;
  @media ${device.tablet} {
    font-size: 16px;
  }
`;

const CheckboxLabel = ({ label }) =>
  label && (
    <StyledCheckboxLabel className="checkbox-label">
      {label}
    </StyledCheckboxLabel>
  );

function Checkbox({
  required,
  disabled,
  name,
  checked,
  label,
  value,
  onChange = () => {},
  onClick,
}) {
  const elementId = getNextId();
  const isDisabled = disabled ? 'disabled' : false;
  const isRequired = required ? 'required' : false;
  const isChecked = checked ? 'checked' : false;

  return (
    <StyledLabel htmlFor={elementId}>
      <StyledInput
        onChange={onChange}
        type="checkbox"
        name={name}
        value={value}
        required={isRequired}
        disabled={isDisabled}
        defaultChecked={isChecked}
        id={elementId}
        onClick={onClick}
      />
      <CheckboxIndicator />
      <CheckboxLabel label={label} />
    </StyledLabel>
  );
}

export default Checkbox;
