import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { LoadingContainer } from '../Loading';
import './index.scss';

export default function Page({ children, header, footer }) {
  return (
    <div className="page-container">
      {header && <Header />}
      {children}
      <LoadingContainer />
      {footer && <Footer />}
    </div>
  );
}
