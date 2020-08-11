import React, { useState } from 'react';
import RandomCountry from '../random-country';
import CountriesList from '../countries-list';
import CountriesDetailed from '../countries-detailed';
import SearchCountry from '../search-country';

import CountryServices from '../../Services/country-services';
import useDataCountry from '../get-country-data';

import './app.scss';


const App: React.FC = () => {
  const [nameCountry, setNameCountry] = useState<string>('Afghanistan'); //'Afghanistan'
  const [search, setSearch] = useState<string>('');

  const changeCountryName = (name: string): void => setNameCountry(name);
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
    <section className="app">
      <div className="container">
        <div className="app-header">
          <RandomCountry />
        </div>

        <div className="app-countries">
          <div className="app-countries-left">
            <SearchCountry onChangeSearch={onChangeSearch} />
            <CountriesList
              countriesList={viewCountriesList}
              currentNameCountry={nameCountry}
              changeCountryName={changeCountryName} />
          </div>
          <div className="app-countries-right">
            <CountriesDetailed nameCountry={nameCountry} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default App;

