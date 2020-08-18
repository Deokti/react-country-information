import React, { useState, useEffect } from 'react';
import CountryServices from '../../Services/country-services';
import Spinner from '../spinner';
import TemplateCountry from '../template-country';
import TemplateCountryItem from '../template-country-item';
import {
  getRandomNumber,
  addNumberDescriptionForPopulation
} from '../utils/additional-functions';
import { useGetCountryData } from '../get-country-data/get-country-data';

import './random-country.scss';
import '../../styles/repear-style/country.scss';

const RandomCountry: React.FC = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState({});

  const { getAllCountries } = new CountryServices();
  const { getCountry, loading, error } = useGetCountryData(getAllCountries);

  useEffect(() => {
    setCountries(getCountry);
    setCountry(countries[20]);
  }, [getCountry, countries]);


  const getRandomCountry = () => {
    const number = getRandomNumber(0, countries.length - 1);
    setCountry(countries[number]);
  }

  useEffect(() => {
    const timeout = setInterval(getRandomCountry, 5000);
    return () => clearInterval(timeout);
  });

  const spinner = loading ? <Spinner /> : null;
  const content = !spinner && !error ? <Country country={country} /> : null;

  return (
    <div className="random-country">
      {spinner}
      {content}
    </div>
  );
};

const Country = ({ country = {} }: any) => {
  const {
    population,
    flag,
    name,
    region,
    currencySymbol,
    capital,
    currencyName,
    code2Symbol
  } = country;

  return (
    <TemplateCountry flag={flag} imgAlt={name} countryName={name} additialName={code2Symbol}>
      <TemplateCountryItem title="Population:" subtitle={addNumberDescriptionForPopulation(population)} />
      <TemplateCountryItem title="Region:" subtitle={region} />
      <TemplateCountryItem title="Capital:" subtitle={capital} />
      <TemplateCountryItem title="Currencies:" subtitle={`${currencyName} (${currencySymbol || '???'})`} />
    </TemplateCountry>
  );
}

export default RandomCountry;