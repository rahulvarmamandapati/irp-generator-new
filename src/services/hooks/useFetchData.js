import * as React from 'react';
import { db } from '../../firebase';

export const useFetchAppData = (dataType) => {
  const [data, setFetchData] = React.useState({
    isLoading: false,
    isError: false,
    data: [],
  });

  React.useEffect(() => {
    let isCancelled = false;
    const fetchData = async () => {
      setFetchData({ isLoading: true, isError: false });
      try {
        const getData = db.collection(dataType);
        const res = await getData.get();
        const newData = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFetchData({
          isLoading: false,
          isError: false,
          data: newData,
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
  }, [dataType]);
  return [data, setFetchData];
};
