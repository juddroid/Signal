import { useEffect, useState } from 'react';
import xml2js from 'xml2js';

const useFetch = (url: string, deps: any[]): any => {
  const [response, setResponse] = useState(null);

  const fetchData = async () => {
    const res = await fetch(url);

    const xmlData = await res.text();
    const jsonData = await xml2js.parseStringPromise(xmlData);
    setResponse(jsonData);
  };

  useEffect(() => {
    fetchData();
  }, deps);

  return response;
};

export default useFetch;
