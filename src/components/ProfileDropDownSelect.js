import React, { useState } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import { device } from '../device';
import SelectProfileAvatar from './SelectProfileAvatar';
import { baseButtonStyles, baseInputStyles } from '../theme/globalStyle';
import { ReactComponent as IconCheckmark } from '../images/icon-checkmark-circle-orange.svg';

const DropDownContainer = styled('div')`
  margin-bottom: 40px;
`;

const DropDownHeader = styled('button')`
  ${baseButtonStyles}
  ${baseInputStyles}
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  margin-top: 10px;
  text-align: left;
  color: #fe5000;
  position: relative;
  background-color: #fff;
  padding: 17px 20px;
  &::after {
    content: '';
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #fe5000;
    position: absolute;
    top: 45%;
    right: 10px;
  }
`;

const DropDownListContainer = styled('div')`
  display: none;
  margin-top: -2px;
  position: relative;
  text-align: left;
  &.show {
    display: block;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 11px 20px;
  color: #57514b;
  font-weight: normal;
  text-transform: none;
  border-bottom: 1px solid #d8d7d7;
  cursor: pointer;
  @media ${device.breakUp768} {
    padding: 16px 20px;
  }

  &:hover {
    color: #fe5000;
  }
  .styledProfileImage {
  }
  .name {
    display: block;
    margin-left: 15px;
    margin-right: auto;
    color: #bbbbbb;
  }
  .checkmark {
    width: 30px;
    height: 30px;
    border: 1px solid #d8d7d7;
    border-radius: 100%;
    svg {
      display: none;
    }
  }
  &:hover {
    .name {
      color: #10069f;
    }
  }
  &.selected {
    .name {
      color: #10069f;
    }
    .checkmark {
      border-color: transparent;
      svg {
        display: block;
      }
    }
  }
`;

function DropdownSelect({
  labeledby,
  options,
  shareProfile,
  handleSelected,
  cssClass,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const toggleProfiles = (profiles, profile) => {
    if (profiles.some((p) => p.profile_id === profile.profile_id)) {
      return profiles.filter((p) => p.profile_id !== profile.profile_id);
    }
    return [...profiles, profile];
  };

  return (
    <DropDownContainer className={cssClass}>
      <DropDownHeader
        role="button"
        aria-labelledby={labeledby}
        tabIndex="0"
        onKeyUp={toggling}
        onClick={toggling}
      >
        CHOOSE THE PROFILES YOU’D LIKE TO SHARE
      </DropDownHeader>
      <DropDownListContainer
        aria-expanded={isOpen}
        className={clsx(isOpen && 'show')}
      >
        <DropDownList role="list">
          {options.map((otherProfile) => (
            <ListItem
              role="button"
              className={clsx(
                shareProfile.some(
                  (p) => p.profile_id === otherProfile.profile_id,
                ) && 'selected',
              )}
              tabIndex="0"
              onKeyUp={() => {
                handleSelected(toggleProfiles(shareProfile, otherProfile));
              }}
              onClick={() => {
                handleSelected(toggleProfiles(shareProfile, otherProfile));
              }}
              key={otherProfile.profile_id}
            >
              <SelectProfileAvatar
                id={`avatar${otherProfile.avatar_id.id}`}
                size="x70x50"
              />
              <span className="name">{otherProfile.name}</span>
              <div className="checkmark">
                <IconCheckmark width="30" height="30" />
              </div>
            </ListItem>
          ))}
        </DropDownList>
      </DropDownListContainer>
    </DropDownContainer>
  );
}

export default DropdownSelect;
