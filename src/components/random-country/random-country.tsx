import React, { useState, useEffect } from 'react';
import CountryServices from '../../Services/country-services';
import Spinner from '../spinner';

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
    <React.Fragment>
      <div className="random-country-left">
        <img src={flag} alt={name} className="random-country-left-image" />
      </div>
      <div className="random-country-right">
        <h1 className="random-country-header country-header">{`${name} (${code2Symbol})`}</h1>

        <ul className="random-country-detailed country-detailed">
          <li className="random-country-information country-information">
            <span className="random-country-title country-title">Population: </span>
            <span className="random-country-subitlte country-subitlte">{addNumberDescriptionForPopulation(population)}</span>
          </li>
          <li className="random-country-information country-information">
            <span className="random-country-title country-title">Region: </span>
            <span className="random-country-subitlte country-subitlte">{region}</span>
          </li>
          <li className="random-country-information country-information">
            <span className="random-country-title country-title">Capital: </span>
            <span className="random-country-subitlte country-subitlte">{capital}</span>
          </li>
          <li className="random-country-information country-information">
            <span className="random-country-title country-title">Currencies: </span>
            <span className="random-country-subitlte country-subitlte">{`${currencyName} (${currencySymbol || '???'})`}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default RandomCountry;