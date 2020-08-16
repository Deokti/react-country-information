import React from 'react';

import './row.scss';

type TypeRow = {
  top?: JSX.Element,
  left: JSX.Element,
  right: JSX.Element
}

const Row: React.FC<TypeRow> = ({ top, left, right }) => {
  return (
    <div className="row">
      <div className="row-left">
        {top}
        {left}
      </div>
      <div className="row-right">{right}</div>
    </div>
  )
}

export default Row;