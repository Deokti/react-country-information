import React from 'react';

const TemplateCountryItem: React.FC<{ message?: string, title: string, subtitle: string, subtitleAdditional?: any }> = ({
  message = '',
  title,
  subtitle,
  subtitleAdditional }) => (
    <li className="random-country-information country-information" title={message}>
      <span className="random-country-title country-title">{title} </span>
      <span className="random-country-subitlte country-subitlte">{subtitle} {subtitleAdditional}</span>
    </li>
  );

export default TemplateCountryItem;