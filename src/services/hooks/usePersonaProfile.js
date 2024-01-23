import * as React from 'react';
import {
  doc,
  getDoc,
} from 'firebase/firestore';
import { db } from '../../firebase';

// get single profile from parameter profile id
export const usePersonaProfile = (profileId) => {
  const [savedProfile, setSavedProfile] = React.useState({
    isLoading: false,
    isError: false,
  });
  const fetchProfile = async (id) => {
    const resProfile = doc(db, 'profiles', id);
    const profileData = await getDoc(resProfile);
    return profileData.data();
  };

  React.useEffect(() => {
    if (!profileId) return;
    const isCancelled = false;
    const fetchPersona = async () => {
      setSavedProfile({ isLoading: true, isError: false });
      try {
        const profile = await fetchProfile(profileId);
        if (!profile) return;
        const resPersona = doc(db, 'personas', profile.persona_id);
        const personasData = await getDoc(resPersona);
        const persona = personasData.data();
        const profiles = await Promise.all(
          persona.profiles.map(async (id) => fetchProfile(id)),
        );

        setSavedProfile({
          isLoading: false,
          isError: false,
          profile,
          profiles,
          persona: {
            ...persona,
            id: profile.persona_id,
            profiles: persona.profiles,
          },
        });
      } catch (e) {
        if (!isCancelled) {
          setSavedProfile({ isLoading: false, isError: true, data: e });
        }
      }
    };
    fetchPersona();
  }, [profileId]);
  return savedProfile;
};
