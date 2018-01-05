import React from 'react';

export default function Header() {
  return (
    <header id="header" className="alt">
      <span className="logo">
        <img src="/stellar/images/logo.svg" alt=""/></span>
      <h1>
        True Size
      </h1>
      <p>Upload your photograph and we'll find shirts which fit you perfectly!<br/>
        <a href="https://lobokevin/truesize" rel="noopener noreferrer" target="_blank">
          GitHub page
        </a>.
      </p>
    </header >
  );
}
