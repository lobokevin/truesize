import React from 'react';
import styles from '../../styles.js'

export default function Header() {
  return (
    <header id="header" className="alt">
      <span className="logo">
        <img src="/stellar/images/logo.svg" alt="" /></span>
      <h1>
        True Size
      </h1>
      <p>Just another free, fully responsive site template<br />
        built by
        <a href="https://twitter.com/ajlkn">
          @ajlkn
        </a>
        for
        <a href="https://html5up.net">HTML5 UP</a>.
      </p>
    </header >
  );
}
