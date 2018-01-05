import React from 'react';
import {NavLink} from 'react-router-dom';

export default function StepTwo() {

  return (
    <section id="cta" className="main special">
      <header className="major">
        <h2>Step 2: Let's shop!</h2>
      </header>
      <footer className="major">
        <ul className="actions">
          <li>
            <NavLink className="button" to="/products">Click here to see shirts just for you!
            </NavLink>
          </li>
        </ul>
      </footer>
    </section >
  );
}
