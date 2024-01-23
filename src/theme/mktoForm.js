import styled from 'styled-components';
import { baseButtonStyles, baseLabelStyles } from './globalStyle';
import { device } from '../device';

export const StyledForm = styled.form`
  display: none;
  .mktoFormRow {
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px;

    .mktoFormCol {
      flex: 0 0 auto;
      width: 100%;
      max-width: 100%;
      padding-left: 15px;
      padding-right: 15px;
      margin-bottom: 45px;

      @media ${device.breakUp768} {
        margin-bottom: 60px;
      }
      @media ${device.breakUp1024} {
        width: 50%;
        margin-bottom: 60px;
      }

      .mktoFieldWrap {
        .mktoLabel {
          ${baseLabelStyles}
          display: inline-block;
          .mktoAsterix {
            display: none;
          }
        }
        input[type='text'].mktoField,
        input[type='email'].mktoField {
          display: block;
          min-height: 40px;
          border: none;
          border-bottom: 2px solid ${(props) => props.theme.darkBlue};
          width: 100%;
          font-size: 14px;
          line-height: 18px;
          text-align: left;
          color: #10069f;
          @media ${device.breakUp768} {
            font-size: 16px;
            line-height: 19px;
          }
          &::placeholder {
            color: ${(props) => props.theme.gray};
            font-size: 14px;
            line-height: 18px;
            @media ${device.breakUp768} {
              font-size: 16;
              line-height: 19px;
            }
          }
          &:focus {
            border-color: rgba(16, 6, 159, 0.8);
            box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset,
              0 0 0 1px rgba(16, 6, 159, 0.6);
            outline: 0 none;
          }
          &.hasError {
            border-bottom-color: #d93b00;
          }
        }
        .mktoError {
        }
      }
    }
    &:nth-child(2) {
      .mktoFormCol {
        width: 100%;
      }
    }
    &:nth-child(4) {
      flex-wrap: nowrap;
      margin: 0;
      .mktoFormCol {
        flex: 0 0 auto;
        width: auto;
        padding: 0;
        margin: 0;
      }
      .mktoFieldWrap {
        display: flex;
        margin-right: 15px;
      }
    }
    &:nth-child(5) {
      .mktoFormCol {
        flex: 0 0 auto;
        width: auto;
        padding-left: 50px;
      }
    }
  }
  .mktoButtonRow {
    display: flex;
    justify-content: center;
    .mktoButton {
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

      :disabled {
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
    }
  }
`;
