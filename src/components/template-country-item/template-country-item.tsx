import React from 'react';

export const checkAddedClass = (
  checkClassName: any,
  additionalClass: string) => checkClassName ? `${checkClassName}-${additionalClass}` : '';

type TypeTemplateCountryItem = {
  addedClass?: string,
  message?: string,
  title: string,
  subtitle: string,
  subtitleAdditional?: any
}


const TemplateCountryItem: React.FC<TypeTemplateCountryItem> = ({ message = '', title, subtitle, addedClass, subtitleAdditional }) => (
  <li className={`country-information ${checkAddedClass(addedClass, 'country-information')}`} title={message}>
    <span className={`country-title ${checkAddedClass(addedClass, 'country-title')}`}>{title} </span>
    <span className={`country-subitlte ${checkAddedClass(addedClass, 'country-subitlte')}`}>{subtitle} {subtitleAdditional}</span>
  </li>
);

export default TemplateCountryItem;