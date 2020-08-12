import React from 'react';

import './template-country.scss';

type TypeTemplateCountry = {
  flag: string,
  imgAlt: string,
  countryName: string,
  additialName: string,
  addedClass?: string,
};


const TemplateCountry: React.FC<TypeTemplateCountry> = ({ flag, imgAlt, countryName, additialName, children, addedClass }) => {
  return (
    <React.Fragment>
      <div className="countries-detailed-image">
        <img src={flag} alt={imgAlt} />
      </div>

      <div className="countries-detailed-information">
        <h1 className="country-header">{`${countryName} (${additialName})`}</h1>

        <ul className="country-detailed">
          {children}
        </ul>
      </div>
    </React.Fragment>
  )
};

export default TemplateCountry;