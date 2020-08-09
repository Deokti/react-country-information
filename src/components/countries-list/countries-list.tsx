import React, { useState, useEffect } from 'react';

import CountryServices from '../../Services/country-services';

import './countries-list.scss';

const CountriesList: React.FC<{ changeCountryName(name: string): void, currentNameCountry: string }> = ({ changeCountryName, currentNameCountry }) => {
  const countryServices = new CountryServices();

  const [countries, setCountries] = useState([])

  useEffect(() => {
    countryServices.getAllCountries()
      .then(response => setCountries(response.slice(0, 7)));
  }, []);

  const renderCountries = (array: any[]) => {
    return array.map(({ name, code2Symbol }) => {
      const isActive = name === currentNameCountry ? 'countries-list-item-active' : '';

      return (
        <li key={name}
          onClick={() => changeCountryName(name)}
          data-country-name={name}
          className={`countries-list-item ${isActive}`}>
          {`${name} (${code2Symbol})`}
        </li>
      );
    });
  };

  return (
    <ul className="countries-list">
      {renderCountries(countries)}
    </ul>
  );
};

export default CountriesList;