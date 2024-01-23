import React, { useState } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import { baseButtonStyles, baseInputStyles } from '../theme/globalStyle';

const DropDownContainer = styled('div')`
`;

const DropDownHeader = styled('button')`
  ${baseButtonStyles}
  ${baseInputStyles}
  margin-top: 10px;
  text-align: left;
  color: #57514b;
  position: relative;
  &::after {
    content: '';
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #fe5000;
    position: absolute;
    top: 45%;
    right: 0;
  }
`;

const DropDownListContainer = styled('div')`
  visibility: hidden;
  margin-top: -2px;
  position: relative;
  text-align: left;
  &.show {
    visibility: visible;
  }
`;

const DropDownList = styled('ul')`
  padding: 0;
  margin: 0;
  list-style: none;
  background-color: #ffffff;
  box-shadow: 0px 0px 6px #00000029;
  border-radius: 0px 0px 5px 5px;
  border-bottom: 1px solid #d8d7d7;

  li:last-child {
    border-bottom: none;
  }
`;

const ListItem = styled('li')`
  list-style: none;
  padding: 24px 30px;
  color: #57514b;
  font-weight: normal;
  text-transform: none;
  border-bottom: 1px solid #d8d7d7;
  cursor: pointer;
  &:hover {
    color: #fe5000;
  }
`;

function DropdownSelect({ labeledby, options, selectedRole, handleSelected }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  return (
    <DropDownContainer>
      <DropDownHeader
        role="button"
        aria-labelledby={labeledby}
        tabIndex="0"
        onKeyUp={toggling}
        onClick={toggling}
      >
        {selectedRole.name || options[0].name}
      </DropDownHeader>
      <DropDownListContainer
        aria-expanded={isOpen}
        className={clsx(isOpen && 'show')}
      >
        <DropDownList role="list">
          {options.map((role) => (
            <ListItem
              role="button"
              tabIndex="0"
              onKeyUp={() => {
                toggling();
                handleSelected(role);
              }}
              onClick={() => {
                toggling();
                handleSelected(role);
              }}
              key={Math.random()}
            >
              {role.name}
            </ListItem>
          ))}
        </DropDownList>
      </DropDownListContainer>
    </DropDownContainer>
  );
}

export default DropdownSelect;
