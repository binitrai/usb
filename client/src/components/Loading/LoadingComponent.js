import React from 'react';
import Loading from '../../asset/images/loading.gif';

import './index.scss';

export function LoadingComponent({ isLoading, text }) {
  return (
    <div className={(isLoading) ? 'loading-container visible' : 'loading-container'}>
      <img src={Loading} />
      <div className="loading-text">{text}</div>
    </div>
  );
}
