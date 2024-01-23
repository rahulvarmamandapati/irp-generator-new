import React from 'react';
import clsx from 'clsx';
import { ANIMATION_DIRECTION } from '../constants';
import { StepperContext } from '../contexts/stepperContext';
import { addNewProfile, updateProfile } from '../services/hooks/write';
import {
  StyledButton,
} from '../theme/globalStyle';
import iconBtnArrow from '../images/icon-button-arrow-right.svg';
import iconBtnArrowRed from '../images/icon-button-arrow-right-red.svg';

function SaveButton({ btnType }) {
  const {
    state: { currentPage, profile, persona },
    dispatch,
  } = React.useContext(StepperContext);
  const [saving, setSaving] = React.useState(false);
  const isSave = btnType === 'save';

  const save = async () => {
    setSaving(false);
    try {
      const fbProfile = await addNewProfile(profile, persona);
      dispatch({ type: 'LOAD_PERSONA', savedPersona: fbProfile });
      setSaving(!!fbProfile.profile.profile_id);
    } catch (error) {
      setSaving(false);
      console.log(error);
    }
  };

  const update = async () => {
    setSaving(false);
    try {
      const fbProfile = await updateProfile(profile, persona);
      dispatch({
        type: 'setUserProfile',
        profile: fbProfile.profile,
      });
      setSaving(!!fbProfile.profile.profile_id);
    } catch (error) {
      setSaving(false);
      console.log(error);
    }
  };

  React.useEffect(() => {
    if (saving) {
      dispatch({
        type: 'setCurrentPage',
        currentPage: 6,
        animationDirection: ANIMATION_DIRECTION.FORWARD,
      });
    }
  }, [saving, dispatch, currentPage]);
  return (
    <StyledButton
      type="button"
      className={clsx(isSave ? 'orange' : 'blue')}
      style={{
        marginRight: '15px',
        marginBottom: '15px',
      }}
      onClick={() => {
        if (persona.id) {
          if (profile.profile_id) {
            update();
          } else {
            save();
          }
        } else {
          dispatch({
            type: 'setCurrentPage',
            currentPage: 5,
            animationDirection: ANIMATION_DIRECTION.FORWARD,
          });
        }
      }}
    >
      <span>{isSave ? 'Save' : 'Download / Share'}</span>
      {' '}
      <img src={isSave ? iconBtnArrow : iconBtnArrowRed} alt="" />
    </StyledButton>
  );
}

export default SaveButton;
