import React from 'react';

import './countries-list.scss';

const CountriesList: React.FC<{ countriesList: any[], changeCountryName(name: string): void, currentNameCountry: string }> = ({ changeCountryName, currentNameCountry, countriesList }) => {
  const renderCountries = countriesList.map(({ name, code2Symbol }) => {
    const isActive = name === currentNameCountry ? 'countries-list-item-active' : '';

    return (
      <li key={name}
        onClick={() => changeCountryName(name)}
        data-country-name={name}
        className={`countries-list-item ${isActive}`}>
        {`${name} (${code2Symbol})`}
      </li>
    )
  })

  return (
    <ul className="countries-list">
      {renderCountries}
    </ul>
  );
};

export default CountriesList;