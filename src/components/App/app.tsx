import React from 'react';
import RandomCountry from '../random-country';
import { BrowserRouter, Route } from 'react-router-dom';
import { Countries } from '../pages/countries';

import './app.scss';

const App: React.FC = () => {
  return (
    <section className="app">
      <div className="container">
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
      </div>
    </section>
  );
};

export default App;
