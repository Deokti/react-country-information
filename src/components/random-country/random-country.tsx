import React, { useState, useEffect } from 'react';
import CountryServices from '../../Services/country-services';
import Spinner from '../spinner';
import TemplateCountry from '../template-country';
import TemplateCountryItem from '../template-country-item';

import {
  getRandomNumber,
  addNumberDescriptionForPopulation
} from '../utils/additional-functions';



import './random-country.scss';
import '../../styles/repear-style/country.scss';

const RandomCountry: React.FC = () => {
  const countryServices = new CountryServices();

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    countryServices.getAllCountries()
      .then(response => {
        setCountries(response);
        setCountry(response[168]);
        setLoading(false);
      });
  }, []);

  const getRandomCountry = () => {
    const number = getRandomNumber(0, countries.length - 1);
    setCountry(countries[number]);
  }

  useEffect(() => {
    const timeout = setInterval(getRandomCountry, 5000);
    return () => clearInterval(timeout);
  });


  const spinner = loading ? <Spinner /> : null;
  const content = !spinner ? <Country country={country} /> : null;

  return (
    <div className="random-country">
      {spinner}
      {content}
    </div>
  );
};


const Country = ({ country }: any) => {
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
      <TemplateCountryItem title="Population:" subtitle={addNumberDescriptionForPopulation(population)} addedClass="random" />
      <TemplateCountryItem title="Region:" subtitle={region} />
      <TemplateCountryItem title="Capital:" subtitle={capital} />
      <TemplateCountryItem title="Currencies:" subtitle={`${currencyName} (${currencySymbol || '???'})`} />
    </TemplateCountry>
  );
}

export default RandomCountry;