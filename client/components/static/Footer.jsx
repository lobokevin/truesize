import React from 'react';
import styles from '../../styles.js'

export default function Footer() {
    return (
      <div>
        <hr />
      <footer style={styles.footer}>
        <small>GitHub page <a href="https://github.com/lobokevin/truesize">here</a>. This project is inspired by <a href="https://sizer.me/" target="_blank">sizer.me</a><br />
        Sample picture credit <a href="https://www.untuckit.com/products/durif-wrinkle-free" target="_blank">here </a></small>
       </footer>
    </div>
    );
  }
