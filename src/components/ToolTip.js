import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import toolTip from '../images/icon-tool-tip.svg';
import iconClose from '../images/icon-close.svg';
import { size as deviceSize } from '../device';

const StyledToolTip = styled.div`
  display: inline-block;
  position: relative;

  .tool-tip {
    box-shadow: 3px 3px 7px rgb(0, 0, 0, 0.12);
    padding: 30px 54px 30px 30px;
    width: 0;
    height: 0;
    opacity: 0;
    position: absolute;
    bottom: 32px;
    right: 8px;
    background-color: rgba(254, 80, 0, 0.9);
    font-size: 14px;
    font-weight: 900;
    color: #fff;
    line-height: 22px;
    overflow: hidden;
    z-index: -1;
    transform-origin: bottom left;
    transition: all 0.2s ease-in-out;
    &.show {
      @media ${`(max-width: ${deviceSize.tablet})`} {
        width: 385px;
        height: auto;
        z-index: 1;
        opacity: 1;
        &.lg {
          height: 192px;
        }
        &.sm {
          height: 125px;
        }
        .description {
          opacity: 1;
        }
      }
    }
  }
  .description {
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }
  .trigger {
    background-color: transparent;
    border: none;
    padding: 0;
    margin-left: 5px;
    display: flex;
    cursor: pointer;
    &:hover {
      ~ .tool-tip {
        width: 385px;
        height: auto;
        z-index: 1;
        opacity: 1;
        &.lg {
          height: 192px;
        }
        &.sm {
          height: 125px;
        }
        .description {
          opacity: 1;
        }
      }
    }
  }
  .close {
    background-color: transparent;
    border: none;
    margin: 0;
    width: 14px;
    height: 14px;
    position: absolute;
    top: 20px;
    right: 20px;
    display: block;
    padding: 0;
  }
`;

const ToolTip = ({ size, description }) => {
  const [showToolTip, setToolTip] = React.useState(false);
  const wrapperRef = React.useRef(null);

  React.useEffect(() => {
    if (wrapperRef.current && showToolTip) wrapperRef.current.focus();
  }, [showToolTip]);

  return (
    <StyledToolTip>
      <button
        type="button"
        className="trigger"
        onClick={() => {
          setToolTip(!showToolTip);
        }}
      >
        <img src={toolTip} alt="" width="20" height="20" />
      </button>
      <div
        tabIndex="0"
        role="textbox"
        ref={wrapperRef}
        className={clsx('tool-tip', size, showToolTip && 'show')}
        onBlur={() => setToolTip(false)}
      >
        <button
          type="button"
          className="close"
          onClick={() => setToolTip(!showToolTip)}
        >
          <img src={iconClose} alt="" width="14" height="14" />
        </button>
        <span className="description">{description}</span>
      </div>
    </StyledToolTip>
  );
};

export default ToolTip;
