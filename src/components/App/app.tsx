import React from 'react';
import RandomCountry from '../random-country';
import { BrowserRouter, Route } from 'react-router-dom';
import { Countries } from '../pages/countries';

import CountryServices from '../../Services/country-services';
import { useGetCountryData } from '../get-country-data/get-country-data';
import ErrorMassage from '../error-massage';
import Spinner from '../spinner';

import './app.scss';

const App: React.FC = () => {
  return (
    <section className="app">
      <div className="container">
        <AppItem />
      </div>
    </section>
  );
};

const AppItem: React.FC = () => {
  const { getAllCountries } = new CountryServices()
  const { loading, error } = useGetCountryData(getAllCountries);

  if (loading) return <Spinner />
  if (error) return <ErrorMassage />

  return (
    <React.Fragment>
      <div className="app-header">
        <RandomCountry />
      </div>

      <div className="app-countries">
        <BrowserRouter>

          <Route path="/:name?" render={({ match, history }) => {
            const { name = "Afghanistan" } = match.params;

            return <Countries
              func={(name: string) => history.push(name)}
              countryName={name} />
          }} />
        </BrowserRouter>
      </div>
    </React.Fragment>
  );
}

export default App;
