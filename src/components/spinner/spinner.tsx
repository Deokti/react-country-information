import React from 'react';

import './spinner.scss';

const Spinner: React.FC = () => {
  return <div className="lds-ripple"><div></div><div></div></div>
}

export default Spinner;