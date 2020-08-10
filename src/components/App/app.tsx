import React, { useState, useEffect } from 'react';
import RandomCountry from '../random-country';
import CountriesList from '../countries-list';
import CountriesDetailed from '../countries-detailed';
import SearchCountry from '../search-country';

import CountryServices from '../../Services/country-services';


import './app.scss';

const App: React.FC = () => {
  const [nameCountry, setNameCountry] = useState<string>('Afghanistan'); //'Afghanistan'
  const [countriesList, setCountriesList] = useState<Array<object>>([]);
  const [search, setSearch] = useState<string>('');

  const countryServices = new CountryServices();

  useEffect(() => {
    countryServices.getAllCountries()
      .then(countries => setCountriesList(countries));
  }, []);

  const changeCountryName = (name: string) => setNameCountry(name);

  const onChangeSearch = (label: string) => setSearch(label);

  const onSearchCountry = (countries: any[], search: string) => {
    if (search.length === 0) return countries;

    return countries.filter(item => item.name.toLowerCase()
      .includes(search.toLowerCase()));
  }

  const viewCountriesList = onSearchCountry(countriesList, search);

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

