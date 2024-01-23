import * as React from 'react';
import {
  doc,
  getDoc,
} from 'firebase/firestore';
import { db } from '../../firebase';

export const usePersona = (personaId) => {
  const [savedPersona, setSavedPersona] = React.useState({
    isLoading: false,
    isError: false,
  });
  const fetchProfile = async (id) => {
    const resProfile = doc(db, 'profiles', id);
    const profileData = await getDoc(resProfile);
    return profileData.data();
  };

  React.useEffect(() => {
    if (!personaId) return;
    const isCancelled = false;
    const fetchPersona = async () => {
      setSavedPersona({ isLoading: true, isError: false });
      try {
        const resPersona = doc(db, 'personas', personaId);
        const personasData = await getDoc(resPersona);
        const persona = personasData.data();
        if (!persona) return;
        const profiles = await Promise.all(
          persona.profiles.map(async (id) => fetchProfile(id)),
        );

        setSavedPersona({
          isLoading: false,
          isError: false,
          profiles,
          persona: {
            ...persona,
            id: personaId,
            profiles: persona.profiles,
          },
        });
      } catch (e) {
        if (!isCancelled) {
          setSavedPersona({ isLoading: false, isError: true, data: e });
        }
      }
    };
    fetchPersona();
  }, [personaId]);
  return savedPersona;
};
