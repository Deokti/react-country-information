import React, { useState } from 'react';
import CountriesList from '../countries-list';
import CountriesDetailed from '../countries-detailed';
import SearchCountry from '../search-country';

import CountryServices from '../../Services/country-services';
import useDataCountry from '../get-country-data';
import Row from '../row';

export const Countries = ({ func, countryName }: any) => {
  const [search, setSearch] = useState<string>('');
  const onChangeSearch = (label: string): void => setSearch(label);

  const onSearchCountry = (countries: any[], search: string) => {
    if (search.length === 0) return countries;

    return countries.filter(item => item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.code2Symbol.toLowerCase().includes(search.toLowerCase()))
  }

  const { getAllCountries } = new CountryServices();
  const { getCountry } = useDataCountry(getAllCountries);
  const viewCountriesList = onSearchCountry(getCountry, search);

  return (
    <Row
      top={<SearchCountry onChangeSearch={onChangeSearch} />}
      left={<CountriesList
        countriesList={viewCountriesList}
        activeCurrentNameCountry={countryName}
        changeCountryName={func} />}
      right={<CountriesDetailed nameCountry={countryName} />} />
  );
};

