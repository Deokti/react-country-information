import React, { FC } from 'react';

import './countries-list.scss';

type TypeCountriesList = {
  countriesList: any[],
  changeCountryName(name: string): void,
  activeCurrentNameCountry: string
}

const CountriesList: React.FC<TypeCountriesList> = ({ changeCountryName, activeCurrentNameCountry, countriesList }) => {
  const renderCountries = countriesList.map(({ name, code2Symbol }) => {
    const isActive: string = name === activeCurrentNameCountry ? 'countries-list-item-active' : '';

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