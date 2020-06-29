import React from 'react';
import Hero from './Hero';

const Top = () => {
  return (
    <header id="header">
      <div className="l-container">
        <h1 id="brand-name">quero migrar pra ux</h1>
        <blockquote className="quote">quote</blockquote>

        <Hero />
      </div>
    </header>
  );
};

export default Top;
