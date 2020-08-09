import React, { useState } from 'react';
import RandomCountry from '../random-country';
import CountryServices from '../countries-list';
import CountriesDetailed from '../countries-detailed';

import './app.scss';

const App: React.FC = () => {
  const [nameCountry, setNameCountry] = useState<string>('Afghanistan'); //'Afghanistan'

  const changeCountryName = (name: string) => {
    // console.log(name)
    setNameCountry(name);
  };


  return (
    <section className="app">
      <div className="container">
        <div className="app-header">
          <RandomCountry />
        </div>

        <div className="app-countries">
          <div className="app-countries-left">
            <CountryServices
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

