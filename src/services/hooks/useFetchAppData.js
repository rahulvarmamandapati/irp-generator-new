import * as React from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

export const useFetchAppData = () => {
  const [fetchAppData, setFetchData] = React.useState({
    isLoading: false,
    isError: false,
    data: {},
  });

  React.useEffect(() => {
    let isCancelled = false;
    const fetchData = async () => {
      setFetchData({ isLoading: true, isError: false });
      try {
        const [avatars, roles, qualities, categories, backgrounds] =
          await Promise.all([
            getDocs(collection(db, 'avatars')),
            getDocs(collection(db, 'roles')),
            getDocs(collection(db, 'qualities')),
            getDocs(collection(db, 'categories')),
            getDocs(collection(db, 'backgrounds')),
          ]);
        const newAvatar = avatars.docs.map((document) => ({
          id: document.id,
          ...document.data(),
        }));
        const newRole = roles.docs.map((document) => ({
          id: document.id,
          ...document.data(),
        }));
        const newQualities = qualities.docs.map((document) => ({
          id: document.id,
          ...document.data(),
        }));
        const newCategories = categories.docs.map((document) => ({
          id: document.id,
          ...document.data(),
        }));
        const newBackgrounds = backgrounds.docs.map((document) => ({
          name: document.id,
          json_data: document.data(),
        }));
        setFetchData({
          isLoading: false,
          isError: false,
          data: {
            // ...loadPersonas,
            avatars: newAvatar,
            roles: newRole,
            qualities: newQualities,
            categories: newCategories,
            backgrounds: newBackgrounds,
          },
        });
      } catch (e) {
        if (!isCancelled) {
          setFetchData({ isLoading: false, isError: true, data: e });
        }
      }
    };
    fetchData();
    return () => {
      isCancelled = true;
    };
  }, []);
  return fetchAppData;
};
