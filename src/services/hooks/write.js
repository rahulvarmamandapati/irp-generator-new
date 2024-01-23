import {
  collection,
  doc,
  getDoc,
  addDoc,
  setDoc,
  updateDoc,
  Timestamp,
  arrayUnion,
  deleteDoc,
  arrayRemove,
  // query,
  // where,
} from 'firebase/firestore';
import { db } from '../../firebase';
import { initialState } from '../../contexts/stepperContext';

const fetchProfile = async (id) => {
  if (!id) return false;
  const resProfile = doc(db, 'profiles', id);
  const profileData = await getDoc(resProfile);
  return profileData.data();
};

export const addNewProfile = async (stateProfile, statePersona) => {
  let personaRef;
  let personaId;
  if (statePersona.id) {
    personaId = statePersona.id;
    personaRef = doc(db, 'personas', personaId);
  } else {
    personaRef = await addDoc(collection(db, 'personas'), {
      profiles: [],
    });
    personaId = personaRef.id;
  }

  const newProfileRef = doc(collection(db, 'profiles'));
  const profileData = {
    ...stateProfile,
    persona_id: personaId,
    profile_id: newProfileRef.id,
    created_at: Timestamp.now(),
  };
  await setDoc(newProfileRef, profileData); // saves profile data
  await updateDoc(personaRef, {
    profiles: arrayUnion(newProfileRef.id),
  });
  const personasDocRef = doc(db, 'personas', personaId);
  const personasDocSnap = await getDoc(personasDocRef);

  const personasDataRef = await getDoc(personaRef);
  const persona = personasDataRef.data();
  const profiles = await Promise.all(
    persona.profiles.map(async (id) => fetchProfile(id)),
  );
  const personaData = {
    ...statePersona,
    id: personaId,
    profiles: personasDocSnap.data().profiles,
    updated_at: Timestamp.now(),
  };
  await updateDoc(personasDocRef, personaData); // saves profile data
  return {
    profile: profileData,
    profiles,
    persona: personaData,
  };
};

export const updateProfile = async (stateProfile, statePersona) => {
  if (!stateProfile.persona_id && !stateProfile.profile_id) return false;
  const profileRef = doc(db, 'profiles', stateProfile.profile_id);
  const profileData = {
    ...stateProfile,
    updated_at: Timestamp.now(),
  };
  const personasRef = doc(db, 'personas', stateProfile.persona_id);
  const personaData = {
    ...statePersona,
    updated_at: Timestamp.now(),
  };
  await updateDoc(profileRef, profileData); // saves profile data
  await updateDoc(personasRef, personaData); // saves profile data

  return {
    profile: profileData,
    persona: personaData,
  };
};

export const removeProfile = async (savedProfile, savedPersona) => {
  // get profile doc to be deleted
  const profileRef = doc(db, 'profiles', savedProfile.profile_id);
  // get persona doc that holds profile id to be deleted
  const personaRef = doc(db, 'personas', savedPersona.id);
  // delete profile doc
  await deleteDoc(profileRef);
  // // Atomically remove deleted profile from the "profiles" array field.
  await updateDoc(personaRef, {
    profiles: arrayRemove(savedProfile.profile_id),
  });
  // NOT 100% SURE THIS WORKS - IF PROFILES ARRAY IS EMPTY, DELETE PERSONA DOC
  // const personaCol = await collection(db, personaRef);
  // const q = query(personaRef, where('profiles', '==', true));
  const personasData = await getDoc(personaRef);
  const persona = personasData.data();
  const profiles = await Promise.all(
    persona.profiles.map(async (id) => fetchProfile(id)),
  );
  if (!profiles?.length) {
    await deleteDoc(doc(db, 'personas', personaRef.id));
    return {
      profile: initialState.profile,
      profiles: initialState.profiles,
      persona: initialState.persona,
    };
  }
  return {
    profile: initialState.profile,
    profiles,
    persona: {
      ...savedPersona,
      id: savedPersona.id,
      profiles: persona.profiles,
    },
  };
};
