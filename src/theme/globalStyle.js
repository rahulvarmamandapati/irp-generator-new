import styled, { css } from 'styled-components';
import { device } from '../device';

export const theme1 = {
  orange: '#FE5000',
  darkBlue: '#10069F',
  secondary: '#00A3E0',
  disabled: '#D8D7D7',
  gray: '#D8D7D7',
  gold: '#F1B434',
  teal: '#0093B2',
  magenta: '#CE0F69',
  blueGray: '#4D7CC7',
  paleBlueGray: '#DBE9F9',
  yellow: '#FFD043',
  paleYellow: '#FFF6D9',
  green: '#76D275',
  paleGreen: '#D7F4DE',
  yellowOrange: '#FFC168',
  paleYellowOrange: '#FFF3E1',
  redOrange: '#FF9169',
  paleRedOrange: '#FFE9E1',
  pink: '#FF6969',
  palePink: '#FFE1E1',
  purple: '#9013FE',
  palePurple: '#E9CDFF',
  forestGreen: '#129633',
  copy: '#57514b',
  darkGray: '#565656',
  gray1: '#2A2E36',
  gray2: '#606369',
  gray3: '#989CA6',
  gray4: '#BBBBBB',
  gray5: '#DDDDDD',
  gray6: '#E8EAED',
  gray7: '#F5F6F7',
  gray8: '#F9F9FA',
  white: '#FFFFFF',
  sansSerif: '"Montserrat","Trebuchet MS",Helvetica,sans-serif',
  font14: '14pt',
  font16: '16pt',
  font50: '50pt',
  font20: '20pt',
  font18: '18pt',
  spacing20: '20px',
  spacing25: '20px',
  spacing35: '35px',
};

export const baseButtonStyles = css`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;
  cursor: pointer;
  user-select: none;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
  font-weight: 400;
  font-style: 700;
  font-size: 16px;
  font-family: 'Montserrat', 'Trebuchet MS', Helvetica, sans-serif;
`;

export const baseInputStyles = css`
  font-family: ${(props) => props.theme.sansSerif};
  display: block;
  min-height: 40px;
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.darkBlue};
  width: 100%;
  &::placeholder {
    color: ${(props) => props.theme.gray};
    font-size: 16;
    line-height: 19px;
  }
`;

export const baseLabelStyles = css`
  display: block;
  font-family: ${(props) => props.theme.sansSerif};
  font-size: 14px;
  line-height: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.orange};
  text-transform: uppercase;
`;

export const removeIcon = css`
  display: inline-block;
  position: relative;
  width: 18px;
  height: 18px;
  background-color: #d8d7d7;
  border-radius: 100%;
  text-indent: -999em;
  margin: 6px 0;

  &::before,
  &::after {
    content: '';
    display: block;
    background-color: #fff;
    width: 8px;
    height: 2px;
    position: absolute;
    z-index: 1;
    transform: rotate(0deg);
    top: 50%;
    left: 50%;
    margin-top: -1px;
    margin-left: -4px;
    transition: all 0.25s ease-out;
  }
`;

export const StyledH2 = styled.h2`
  text-align: left;
  font-family: ${(props) => props.theme.sansSerif};
  font-size: 35px;
  line-height: 43px;
  font-weight: bold;
  color: ${(props) => props.theme.darkBlue};
  margin: 0;
  margin-bottom: 15px;
  @media ${device.breakUp768} {
    margin-bottom: 20px;
  }
  @media ${device.breakUp1024} {
    margin-bottom: 15px;
  }
  @media ${device.breakUp1440} {
    margin-bottom: 20px;
  }
`;

export const StyledH3 = styled.h3`
  text-align: left;
  font-family: ${(props) => props.theme.sansSerif};
  font-size: 20px;
  line-height: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.darkBlue};
  margin: 0;
  margin-bottom: 20px;

  @media ${device.breakUp1024} {
    font-size: 22px;
    line-height: 27px;
  }
  @media ${device.breakUp1440} {
    font-size: 24px;
    line-height: 29px;
  }
`;

export const StyledH4 = styled.h4`
  text-align: left;
  font-family: ${(props) => props.theme.sansSerif};
  font-size: 35px;
  line-height: 43px;
  font-weight: bold;
  color: ${(props) => props.theme.darkBlue};
  margin: 0;
  margin-bottom: 15px;
  @media ${device.breakUp768} {
    margin-bottom: 20px;
  }
  @media ${device.breakUp1024} {
    margin-bottom: 15px;
  }
  @media ${device.breakUp1440} {
    margin-bottom: 20px;
  }
`;

export const StyledH5 = styled.h5`
  margin-top: 0;
  margin-bottom: ${(props) => props.theme.spacing20};
  font-family: ${(props) => props.theme.sansSerif};
  font-weight: bold;
  font-style: normal;
  font-size: 20px;
  line-height: 24px;
  color: ${(props) => props.theme.darkBlue};
  span {
    font-weight: normal;
  }
`;

export const StyledP = styled.p`
  font-family: ${(props) => props.theme.sansSerif};
  font-size: 17px;
  line-height: 28px;
  font-weight: normal;
  letter-spacing: 0px;
  color: ${(props) => props.theme.copy};
`;

export const StyledLabel = styled.label`
  ${baseLabelStyles}
  &.hasError {
    color: ${(props) => props.theme.orange};
  }
`;

export const StyledInput = styled.input`
  font-family: ${(props) => props.theme.sansSerif};
  display: block;
  min-height: 40px;
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.darkBlue};
  width: 100%;
  font-size: 16px;
  line-height: 19px;
  color: #10069f;
  &::placeholder {
    font-family: ${(props) => props.theme.sansSerif};
    color: ${(props) => props.theme.gray};
    font-size: 16;
    line-height: 19px;
  }
  &:focus {
    border-color: rgba(16, 6, 159, 0.8);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset,
      0 0 0 1px rgba(16, 6, 159, 0.6);
    outline: 0 none;
  }
  &.hasError {
    border-bottom-color: ${(props) => props.theme.orange};
  }
`;

export const StyledFieldSet = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0;
  min-width: auto;
  margin-bottom: 25px;
`;

export const Button = styled.button`
  position: relative;
  font-size: 5vw;
  padding: 0 10vw;
  height: 13vw;
  border: 0;
  background: transparent;
  color: ${(props) => props.theme.darkBlue};
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 1;
  @media ${device.tablet} {
    padding: 0 35px;
    font-size: 24px;
    height: 74px;
    min-width: 257px;
  }
  &:disabled {
    background: ${(props) => props.theme.disabled};
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.35);
    transform: translateY(-1px);
  }
  &:not(:disabled):active {
    box-shadow: none;
    transform: translateY(0px);
  }
`;

export const StyledButton = styled.button`
  ${baseButtonStyles}
  background-color: #FE5000;
  border-radius: 25px;
  font-size: 16px;
  font-weight: bold;
  padding: 15px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.white};
  transition: all 0.2s ease;
  position: relative;
  z-index: 1;
  overflow: hidden;

  &:disabled {
    background: ${(props) => props.theme.disabled};
    cursor: not-allowed;
  }
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.35);

    &::after {
      width: 100%;
    }
    span {
      transform: translateX(-5px);
    }
    img {
      transform: translateX(5px);
    }
  }

  &::after {
    content: '';
    width: 0;
    position: absolute;
    background-color: #d93b00;
    top: 0;
    bottom: 0;
    left: 0;
    border-radius: 25px;
    transition: all 0.2s ease;
    z-index: -1;
  }

  &.orange {
    background-color: #fe5000;
    &::after {
      background-color: #d93b00;
    }
  }

  &.blue {
    background-color: #10069f;
    &::after {
      background-color: #080080;
    }
  }

  span {
    transition: all 0.2s ease;
  }
  img {
    margin-left: 8px;
    transition: all 0.2s ease;
  }
`;

export const StyledRemoveButton = styled.button`
  ${baseButtonStyles}
  .icon-remove {
    ${removeIcon}
    &::before {
      transform: rotate(-45deg);
    }
    &::after {
      transform: rotate(-135deg);
    }
  }
  &:hover {
    .icon-remove {
      background-color: #fe5000;
    }
  }
`;

export const StyledAddButton = styled.button`
  ${baseButtonStyles}
  background-color: #FE5000;
  border-radius: 25px;
  font-size: 16px;
  font-weight: bold;
  padding: 15px 20px;
  display: inline-block;
  color: ${(props) => props.theme.white};
  transition: all 0.2s ease;
  position: relative;
  z-index: 1;
  overflow: hidden;
  text-align: left;

  &:disabled {
    background: ${(props) => props.theme.disabled};
    cursor: not-allowed;
  }
  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.35);
    @media ${device.breakUp768} {
      width: 94px;
    }

    &::after {
      width: 100%;
    }
    .text {
      @media ${device.breakUp768} {
        opacity: 1;
        transform: translateX(15px);
      }
    }
  }

  &::after {
    content: '';
    width: 0;
    position: absolute;
    background-color: #d93b00;
    top: 0;
    bottom: 0;
    left: 0;
    border-radius: 25px;
    transition: all 0.2s ease;
    z-index: -1;
  }

  &.orange {
    background-color: #fe5000;
    &::after {
      background-color: #d93b00;
    }
  }

  &.blue {
    background-color: #10069f;
    &::after {
      background-color: #080080;
    }
  }

  &.outline {
    &:hover {
      background-color: white;
      box-shadow: inset 0 0 0 2px #fe5000;
      color: #fe5000;
      &::after {
        display: none;
      }
    }
  }

  .text {
    position: absolute;
    opacity: 0;
    transform: translateX(-5px);
    transition: all 0.1s ease;
  }
`;

export const LinkButton = styled.button`
  ${baseButtonStyles}
  display: inline-block;
  font-size: 16px;
  line-height: 19px;
  color: #fe5000;
  transition: all 0.2s ease;
  z-index: 1;

  .icon-remove {
    ${removeIcon}
  }
  &:hover {
    .icon-remove {
      background-color: #fe5000;
      &::before {
        transform: rotate(-45deg);
      }
      &::after {
        transform: rotate(-135deg);
      }
    }
  }
`;

export const CloseButton = styled.button`
  ${baseButtonStyles}
  line-height: 17;
  font: normal normal bold 14px/17px Montserrat;
  letter-spacing: 0px;
  color: #ffffff;
  text-transform: uppercase;
  opacity: 1;
  transition: transform 0.2s ease;
  &:hover {
  }
`;

CloseButton.defaultProps = {
  'data-id': 'CloseButton',
};

export const PrevButton = styled.button`
  ${baseButtonStyles}
  cursor: pointer;
  background-color: ${(props) => props.theme.orange};
  border-radius: 100%;
  width: 48px;
  height: 48px;
  padding-top: 5px;
  margin: 0 7px;
  transition: all 0.2s ease;
  & svg {
    stroke: ${(props) => props.theme.white} !important;
  }
  &:hover {
    background-color: ${(props) => props.theme.white};
    & svg {
      stroke: ${(props) => props.theme.orange} !important;
    }
  }
`;

PrevButton.defaultProps = {
  'data-id': 'PrevButton',
};

export const NextButton = styled.button`
  ${baseButtonStyles}
  cursor: pointer;
  background-color: ${(props) => props.theme.orange};
  background-size: 28px;
  border-radius: 100%;
  width: 48px;
  height: 48px;
  padding-top: 5px;
  margin: 0 7px;
  transition: all 0.2s ease;
  & svg {
    stroke: ${(props) => props.theme.white};
  }
  &:hover {
    background-color: ${(props) => props.theme.white};
    & svg {
      stroke: ${(props) => props.theme.orange};
    }
  }
  &:disabled,
  &.disabled {
    background: ${(props) => props.theme.disabled};
    cursor: not-allowed;
  }
`;

NextButton.defaultProps = {
  'data-id': 'NextButton',
};

export const ButtonPrimary = styled.button`
  ${baseButtonStyles}
  cursor: pointer;
  white-space: nowrap;
  padding: 12px 35px;
  border: 2px solid transparent;
  border-color: ${(props) => props.theme.whtie};
  border-radius: 24px;
  background-color: ${(props) => props.theme.orange};
  color: ${(props) => props.theme.white};
  font-weight: 700;
  transition: transform 0.2s ease;
  transform-origin: center;
  &:hover {
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.orange};
    border-color: ${(props) => props.theme.whtie};
  }
`;

ButtonPrimary.defaultProps = {
  'data-id': 'ButtonPrimary',
};

export const ButtonOutline = styled.button`
  ${baseButtonStyles}
  cursor: pointer;
  white-space: nowrap;
  padding: 12px 35px;
  border: 2px solid #ffffff;
  border-radius: 24px;
  background-color: transparent;
  color: ${(props) => props.theme.white};
  font-weight: 700;
  transition: transform 0.2s ease;
  transform-origin: center;
  &:hover {
    background-color: #ffffff;
    color: ${(props) => props.theme.darkBlue};
  }
`;

ButtonOutline.defaultProps = {
  'data-id': 'ButtonOutline',
};

export const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-left: -15px;
  margin-right: -15px;
`;

StyledRow.defaultProps = {
  'data-id': 'StyledRow',
};

export const StyledCol = styled.div`
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  @media ${device.breakUp1024} {
    flex: 1 0 0%;
  }
`;

StyledCol.defaultProps = {
  'data-id': 'StyledCol',
};

export const StyledColOneThirdsMdUp = styled.div`
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  @media ${device.breakUp1024} {
    flex: 0 0 auto;
    width: 36.65%;
  }
`;

StyledColOneThirdsMdUp.defaultProps = {
  'data-id': 'StyledColOneThirdsMdUp',
};

export const StyledColThreeThirdsMdUp = styled.div`
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  @media ${device.breakUp1024} {
    flex: 0 0 auto;
    width: 63.35%;
  }
`;

StyledColThreeThirdsMdUp.defaultProps = {
  'data-id': 'StyledColThreeThirdsMdUp',
};

export const StyledFluidImage = styled.img`
  display: block;
  width: 100%;
  max-width: 100%;
`;
