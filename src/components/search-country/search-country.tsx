import React, { useState } from 'react';

import './search-country.scss';

const SearchCountry: React.FC<{ onChangeSearch(label: string): void }> = ({ onChangeSearch }) => {
  const [label, setLabel] = useState('');

  const onChangeLabel = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(event.target.value);
    onChangeSearch(event.target.value);
  }

  return <input
    type="text"
    onChange={onChangeLabel}
    value={label}
    className="search-country"
    placeholder="Search country" />
};

export default SearchCountry;