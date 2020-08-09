import React, { useState, useEffect } from 'react';

import './countries-detailed.scss';

import CountryServices from '../../Services/country-services';

const CountriesDetailed: React.FC<{ nameCountry: string }> = ({ nameCountry }) => {
  const [getCountry, setGetCountry] = useState({});

  const countryServices = new CountryServices();

  useEffect(() => {
    countryServices.getCountryByName(nameCountry)
      .then(country => setGetCountry(country))

  }, [nameCountry]);

  return (
    <div className="countries-detailed">
      <CountryDetailedTemplate country={getCountry} />
    </div>
  );
};


const CountryDetailedTemplate = ({ country }: any) => {
  const {
    flag,
    code2Symbol,
    code3Symbol,
    population,
    name,
    nativeName,
    area
  } = country;

  return (
    <React.Fragment>
      <div className="countries-detailed-image">
        <img src={flag} alt={name} />
      </div>

      <div className="countries-detailed-information">
        <h1 className="country-header">{`${name} (${nativeName})`}</h1>

        <ul className="random-country-detailed country-detailed">
          <li className="random-country-information country-information">
            <span className="random-country-title country-title">Native name: </span>
            <span className="random-country-subitlte country-subitlte">Российская Федерация</span>
          </li>
          <li className="random-country-information country-information">
            <span className="random-country-title country-title">Population: </span>
            <span className="random-country-subitlte country-subitlte">{population}</span>
          </li>
          <li className="random-country-information country-information">
            <span className="random-country-title country-title">Code: </span>
            <span className="random-country-subitlte country-subitlte">{`${code2Symbol} or ${code3Symbol}`}</span>
          </li>
          <li className="random-country-information country-information">
            <span className="random-country-title country-title">Area: </span>
            <span className="random-country-subitlte country-subitlte">{`${area}`} km<sup>2</sup></span>
          </li>
          <li className="random-country-information country-information">
            <span className="random-country-title country-title">Languages: </span>
            <span className="random-country-subitlte country-subitlte">Russian (Русский)</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default CountriesDetailed;