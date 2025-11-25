import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function useFetch(path, deps = []) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState('');
  const getData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BURL}/${path}`);
      //console.log(response.data);
      setData(response.data);
    } catch (err) {
      //console.log(err.message);
      setIsError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, deps);

    return {data, isLoading, isError}
  
}
