import React from 'react';
import styles from '../../styles.js'

export default function InnerNav() {
  return (
  <nav id="nav"> <ul>
  <li>
    <a href="#intro" className="active"> How & Why to use this?</a>
  </li>
  <li>
    <a href="#first">Step 1: Get Size</a>
  </li>
  <li>
    <a href="#cta">Step 2: Get Products</a>
  </li>
</ul> </nav>
);
}
