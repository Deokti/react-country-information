import React from 'react';
import RandomCountry from '../random-country';

import './app.scss';

const App: React.FC = () => {
  return (
    <section className="app">
      <div className="container">
        <RandomCountry />

      </div>
    </section>
  );
};

export default App;

