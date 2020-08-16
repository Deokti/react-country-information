import React from 'react';

type TypeTemplateCountryItem = {
  message?: string,
  title: string,
  subtitle: string,
  subtitleAdditional?: any
}

const TemplateCountryItem: React.FC<TypeTemplateCountryItem> = ({ message = '', title, subtitle, subtitleAdditional }) => {
  if (title === '' || subtitle === '') return null;

  return (
    <li className="country-information" title={message}>
      <span className="country-title">{title} </span>
      <span className="country-subitlte">{subtitle} {subtitleAdditional}</span>
    </li>
  );
};

export default TemplateCountryItem;