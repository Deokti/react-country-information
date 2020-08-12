import React, { useState } from 'react';

import './search-country.scss';

const SearchCountry: React.FC<{ onChangeSearch(label: string): void }> = ({ onChangeSearch }) => {
  const [label, setLabel] = useState<string>('');
  const [showButton, setShowButton] = useState<boolean>(false);

  const onChangeLabel = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(event.target.value);
    onChangeSearch(event.target.value);
    if (event.target.value.length === 0) setShowButton(false);
    if (event.target.value.length > 1) setShowButton(true);
  };

  const onClearInput = () => {
    setLabel('');
    onChangeSearch('');
    setShowButton(false);
  };

  return (
    <div className="search-country">
      <input
        type="text"
        onChange={onChangeLabel}
        value={label}
        className="search-country-input"
        placeholder="Search country" />
      <button className={`search-country-clear ${showButton ? 'search-country-clear--show' : ''}`} onClick={onClearInput}>
        <svg width="14px" height="14px" viewBox="0 0 329.26933 329" xmlns="http://www.w3.org/2000/svg"><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" /></svg>
      </button>
    </div>
  );
};

export default SearchCountry;