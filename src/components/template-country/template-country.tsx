import React from 'react';


import './template-country.scss';

const TemplateCountry: React.FC<{ flag: string, imgAlt: string, countryName: string, additialName: string }> = ({ flag, imgAlt, countryName, additialName, children }) => {
  return (
    <React.Fragment>
      <div className="countries-detailed-image">
        <img src={flag} alt={imgAlt} />
      </div>

      <div className="countries-detailed-information">
        <h1 className="country-header">{`${countryName} (${additialName})`}</h1>

        <ul className="random-country-detailed country-detailed">
          {children}
        </ul>
      </div>
    </React.Fragment>
  )
};

export default TemplateCountry;