import React from 'react';

import './error-massage.scss';

import earth from '../../image/earth.png';

const ErrorMassage: React.FC = () => {

  return (
    <div className="error-massage">
      <div className="error-massage-earth">
        <img src={earth} alt="earth" className="error-massage-image" />
      </div>

      <div className="error-massage-info">
        <h4 className="error-massage-title">Error!</h4>
        <h5 className="error-massage-subtitle">Everything will be fixed soon</h5>
      </div>
    </div>
  )
};

export default ErrorMassage;