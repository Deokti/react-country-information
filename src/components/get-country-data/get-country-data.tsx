import { useState, useEffect, useCallback, useMemo } from "react";


const makeRequestAndGetCountries = (getData: any, countryName?: string) => getData(countryName)
  .then((country: any) => country);

const useDataFromCountry = (request: any, countryName?: string) => {
  const baseState = useMemo(() => ({
    getCountry: [],
    loading: true,
    error: false,
  }), []);

  const [getData, setGetData] = useState(baseState);

  useEffect(() => {
    setGetData(baseState);
    request(countryName)
      .then((getCountry: any) => setGetData({
        getCountry,
        loading: false,
        error: false
      }))
      .catch(setGetData({
        getCountry: [],
        loading: false,
        error: true
      }));
  }, [countryName, baseState]);

  return getData;
};

export const useGetCountryData = (getData: any, countryName?: string) => {
  const request = useCallback(() => makeRequestAndGetCountries(getData, countryName), [getData, countryName]);
  return useDataFromCountry(request, countryName);
};

export default useGetCountryData;
