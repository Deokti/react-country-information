import React, { useState, useEffect } from 'react';

import CountryServices from '../../Services/country-services';
import { addNumberDescriptionForPopulation, splitTheNumber } from '../utils/additional-functions';
import Spinner from '../spinner';

import './countries-detailed.scss';

const CountriesDetailed: React.FC<{ nameCountry: string }> = ({ nameCountry }) => {
  const [getCountry, setGetCountry] = useState({});
  const [loading, setLoading] = useState<boolean>(true);
  const [checkService, setCheckService] = useState<boolean>(false);

  const { getCountryByName } = new CountryServices();

  useEffect(() => {
    setLoading(true);

    !checkService && getCountryByName(nameCountry)
      .then(country => {
        setGetCountry(country);
        setLoading(false);
      });

    return () => {
      setCheckService(false);
    };
  }, [nameCountry])

  const load = loading ? <Spinner /> : null;
  const content = !load ? <CountryDetailedItem country={getCountry} /> : null;

  return (
    <div className="countries-detailed">
      {load}
      {content}
    </div>
  );
};


const CountryDetailedItem = ({ country }: any) => {
  const {
    flag,
    code2Symbol,
    code3Symbol,
    population,
    name,
    nativeName,
    area,
    capital,
    languagesName,
    languagesNativeName,
    giniCoefficient
  } = country;

  return (
    <React.Fragment>
      <div className="countries-detailed-image">
        <img src={flag} alt={name} />
      </div>

      <div className="countries-detailed-information">
        <h1 className="country-header">{`${name} (${capital})`}</h1>

        <ul className="random-country-detailed country-detailed">
          <li className="random-country-information country-information" title="Name of the language in this country">
            <span className="random-country-title country-title">Native name: </span>
            <span className="random-country-subitlte country-subitlte">{nativeName}</span>
          </li>
          <li className="random-country-information country-information" title="The number of people living in the country.">
            <span className="random-country-title country-title">Population: </span>
            <span className="random-country-subitlte country-subitlte">{addNumberDescriptionForPopulation(population)}</span>
          </li>
          <li className="random-country-information country-information">
            <span className="random-country-title country-title">Code: </span>
            <span className="random-country-subitlte country-subitlte">{`${code2Symbol} or ${code3Symbol}`}</span>
          </li>
          <li
            className="random-country-information country-information"
            title="In economics, the Gini coefficient, sometimes called the Gini index or Gini ratio, is a measure of statistical dispersion intended to represent the income inequality or wealth inequality within a nation or any other group of people. It was developed by the Italian statistician and sociologist Corrado Gini and published in his 1912 paper Variability and Mutability">
            <span className="random-country-title country-title">Gini coefficient : </span>
            <span className="random-country-subitlte country-subitlte">
              {`${giniCoefficient || '???'}`} (<a href="https://en.wikipedia.org/wiki/Gini_coefficient" target="blank">Wiki</a>)
            </span>
          </li>
          <li className="random-country-information country-information">
            <span className="random-country-title country-title">Area: </span>
            <span className="random-country-subitlte country-subitlte">{`${splitTheNumber(area)}`} km<sup>2</sup></span>
          </li>
          <li className="random-country-information country-information" title='One of the possible'>
            <span className="random-country-title country-title">Languages: </span>
            <span className="random-country-subitlte country-subitlte">{`${languagesName} (${languagesNativeName})`}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default CountriesDetailed;