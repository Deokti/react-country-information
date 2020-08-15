import React, { useState } from 'react';
import RandomCountry from '../random-country';
import { BrowserRouter, Route } from 'react-router-dom';
import CountriesList from '../countries-list';
import CountriesDetailed from '../countries-detailed';
import SearchCountry from '../search-country';

import CountryServices from '../../Services/country-services';
import useDataCountry from '../get-country-data';
import Row from '../row';

import './app.scss';

const App: React.FC = () => {
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
    <section className="app">
      <div className="container">
        <div className="app-header">
          <RandomCountry />
        </div>


        <div className="app-countries">
          <BrowserRouter>
            <Route path="/:name?" render={({ match, history }) => {
              const { name = 'Afghanistan' } = match.params;

              return <Row
                top={<SearchCountry onChangeSearch={onChangeSearch} />}
                left={<CountriesList
                  countriesList={viewCountriesList}
                  activeCurrentNameCountry={name}
                  changeCountryName={(name) => history.push(name)} />}
                right={<CountriesDetailed nameCountry={name} />} />
            }} />
          </BrowserRouter>
        </div>
      </div>
    </section>
  );
};

export default App;
