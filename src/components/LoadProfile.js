import React from 'react';
import { StepperContext } from '../contexts/stepperContext';
import { usePersonaProfile } from '../services/hooks';
import { ANIMATION_DIRECTION } from '../constants';
import { StyledInvisButton } from './pages/Page.styles';
import SelectProfileAvatar from './SelectProfileAvatar';

function LoadProfile({ otherProfile, size }) {
  const { dispatch } = React.useContext(StepperContext);
  const savedProfile = usePersonaProfile(otherProfile.profile_id);
  return (
    <StyledInvisButton
      onClick={() => {
        dispatch({
          type: 'setUserProfile',
          profile: savedProfile.profile,
        });
        dispatch({
          type: 'setPersona',
          persona: savedProfile.persona,
        });
        dispatch({
          type: 'setProfiles',
          profiles: savedProfile.profiles,
        });
        dispatch({
          type: 'setCurrentPage',
          currentPage: 4,
          animationDirection: ANIMATION_DIRECTION.FORWARD,
        });
      }}
      style={{ margin: '0 5px' }}
    >
      <SelectProfileAvatar
        id={`avatar${otherProfile.avatar_id.id}`}
        size={size}
      >
        {otherProfile.name}
      </SelectProfileAvatar>
    </StyledInvisButton>
  );
}

export default LoadProfile;
