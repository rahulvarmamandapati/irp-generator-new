import * as React from 'react';
import { ANIMATION_DIRECTION } from '../constants';
import {
  useFetchAppData,
  usePersonaProfile,
  usePersona,
} from '../services/hooks';

const StepperContext = React.createContext(null);

export const initialState = {
  isLoading: false,
  isError: false,
  currentPage: 0,
  visitedPage: 0,
  animationDirection: '',
  persona: { id: '', profiles: [] },
  profiles: [],
  profile: {
    persona_id: '',
    profile_id: '',
    created_at: '',
    updated_at: '',
    avatar_id: { id: 15 },
    name: '',
    qualities: [],
    role_id: '',
    skills: [],
    new_goals: [],
    categories: [],
  },
  avatars: [],
  backgrounds: [{}],
  categories: [],
  qualities: [],
  roles: [],
};

const updateStateConfig = (state, key, value) => ({
  ...state,
  isLoading: false,
  isError: false,
  [key]: value,
});

export const stepperReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        ...action,
        isLoading: false,
        isError: true,
      };
    case 'LOAD_FETCH_DATA':
      return {
        ...state,
        ...action.data,
        isLoading: false,
        isError: false,
      };
    case 'LOAD_SHARE_PROFILE':
      return {
        ...state,
        profile: {
          ...state.profile,
          ...action.sharedProfile.profile,
          persona_id: '',
          profile_id: '',
          created_at: '',
        },
        isLoading: false,
        isError: false,
      };
    case 'LOAD_PERSONA':
      return {
        ...state,
        ...action.savedPersona,
        isLoading: false,
        isError: false,
      };
    case 'setCurrentPage':
      return {
        ...state,
        animationDirection: action.animationDirection,
        currentPage: action.currentPage,
      };
    case 'next':
      return {
        ...state,
        currentPage: state.currentPage + 1,
        visitedPage:
          state.visitedPage > state.currentPage
            ? state.visitedPage
            : state.visitedPage + 1,
        animationDirection: ANIMATION_DIRECTION.FORWARD,
      };
    case 'previous':
      if (state.currentPage > 0) {
        return {
          ...state,
          currentPage: state.currentPage - 1,
          animationDirection: ANIMATION_DIRECTION.BACKWARD,
        };
      }
    case 'setAvatars':
      return updateStateConfig(state, 'avatars', action.avatars);
    case 'setBackgrounds':
      return updateStateConfig(state, 'backgrounds', action.backgrounds);
    case 'setCategories':
      return updateStateConfig(state, 'categories', action.categories);
    case 'setPersona':
      return {
        ...state,
        persona: {
          ...state.persona,
          ...action.persona,
        },
      };
    case 'setProfiles':
      return updateStateConfig(state, 'profiles', action.profiles);
    case 'setQualities':
      return updateStateConfig(state, 'qualities', action.qualities);
    case 'setRoles':
      return updateStateConfig(state, 'roles', action.roles);
    case 'setUserProfile':
      return {
        ...state,
        profile: {
          ...state.profile,
          ...action.profile,
        },
      };
    case 'resetUserProfile':
      return {
        ...state,
        profile: {
          ...initialState.profile,
          persona_id: state.profile.persona_id,
        },
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

const StepperProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(stepperReducer, initialState);
  const sharedProfile = usePersonaProfile(params.profile);
  const savedPersona = usePersona(params.persona);
  const fetchAppData = useFetchAppData();

  const loading = [
    fetchAppData.isLoading, sharedProfile.isLoading, savedPersona.isLoading,
  ].some((l) => l === true);
  const error = [
    fetchAppData.isError, sharedProfile.isError, savedPersona.isError,
  ].some((l) => l === true);
  const loaded = !loading && !error;
  React.useEffect(() => {
    if (loading) {
      dispatch({ type: 'FETCH_INIT' });
    }
    if (error) {
      dispatch({ type: 'FETCH_FAILURE', ...fetchAppData });
    }
    if (loaded) {
      dispatch({ type: 'LOAD_FETCH_DATA', ...fetchAppData });
      if (params.profile) { dispatch({ type: 'LOAD_SHARE_PROFILE', sharedProfile }); }
      if (params.persona) { dispatch({ type: 'LOAD_PERSONA', savedPersona }); }
    }
    if (loaded && params.profile) {
      dispatch({
        type: 'setCurrentPage',
        currentPage: 4,
        animationDirection: ANIMATION_DIRECTION.FORWARD,
      });
    }
  }, [fetchAppData, dispatch, sharedProfile, savedPersona, loading, error, loaded]);
  const value = { state, dispatch };
  return (
    <StepperContext.Provider value={value}>{children}</StepperContext.Provider>
  );
};

export { StepperContext, StepperProvider };
