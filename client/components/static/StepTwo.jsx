import React from 'react';
import {NavLink} from 'react-router-dom';

export default function StepTwo(){

  return (
    <section id="cta" className="main special">
      <header className="major">
        <h2>Let's shop!</h2>
        <p>Click here to go to the products page!<br />
          </p>
      </header>
      <footer className="major">
        <ul className="actions">
          <li>
            <a className="button">Get Started</a>
          </li>
          <li>
            <NavLink to="/products"><a className="button special">Products</a>
            </NavLink>
          </li>
        </ul>
      </footer>
    </section >
  );
}

