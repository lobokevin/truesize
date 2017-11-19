import React, { Component } from 'react';
import styles from '../../styles.js'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <hr/>
      <footer style={styles.footer}>
    <p>Made by <a href="#">Kevin Lobo</a></p>
    </footer>
    </div>
    );
  }
}
