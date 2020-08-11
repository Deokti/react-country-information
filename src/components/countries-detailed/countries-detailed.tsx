import React from 'react';

import CountryServices from '../../Services/country-services';
import TemplateCountry from '../template-country';
import TemplateCountryItem from '../template-country-item';

import {
  addNumberDescriptionForPopulation,
  splitTheNumber
} from '../utils/additional-functions';

import useGetCountryData from '../get-country-data';
import Spinner from '../spinner';

import './countries-detailed.scss';

const CountriesDetailed: React.FC<{ nameCountry: string }> = ({ nameCountry }) => {
  const { getCountryByName } = new CountryServices();
  const { getCountry, loading } = useGetCountryData(getCountryByName, nameCountry)

  const load = loading ? <Spinner /> : null;
  const visibleCountry = !load ? <CountryDetailedItem country={getCountry} /> : null;

  return (
    <div className="countries-detailed">
      {load}
      {visibleCountry}
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
    giniCoefficient
  } = country;

  return (
    <TemplateCountry flag={flag} imgAlt={name} countryName={name} additialName={capital}>
      <TemplateCountryItem title='Native name:' subtitle={nativeName} message="Name of the language in this country" />
      <TemplateCountryItem title='Population:' subtitle={addNumberDescriptionForPopulation(population)} message="The number of people living in the country" />
      <TemplateCountryItem title='Code:' subtitle={`${code2Symbol} or ${code3Symbol}`} />

      <TemplateCountryItem title='Gini coefficient:' subtitle={`${giniCoefficient || '???'}`}
        message="In economics, the Gini coefficient, sometimes called the Gini index or Gini ratio, is a measure of statistical dispersion intended to represent the income inequality or wealth inequality within a nation or any other group of people. It was developed by the Italian statistician and sociologist Corrado Gini and published in his 1912 paper Variability and Mutability"
        subtitleAdditional={<span>(<a href="https://en.wikipedia.org/wiki/Gini_coefficient" target="blank">Wiki</a>)</span>} />

      <TemplateCountryItem title='Area:' subtitle={`${splitTheNumber(area)}`} subtitleAdditional={<span>km<sup>2</sup></span>} />
    </TemplateCountry>
  );
}

export default CountriesDetailed;
