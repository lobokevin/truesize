import React, { Component } from 'react';
import styles from '../../styles.js'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <hr/>
      <footer style={styles.footer}>
        <small>GitHub page <a href="https://github.com/lobokevin/truesize">here</a>. This project is inspired by <a href="https://sizer.me/" target="_blank">sizer.me</a></small>
       </footer>
    </div>
    );
  }
}
