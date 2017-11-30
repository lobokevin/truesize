import React from 'react';
import styles from '../../styles.js'

export default function HomeInfo(){
    return ( <div className="col-11" style={styles.homeInfo}>
    <blockquote>
      <h6> First time here? What is True Size? </h6>
    <small>An e-commerce web app which uses rudimentary computer vision to recommend shirts for you. <br />Uses (<a href="https://trackingjs.com/" target="_blank">tracking.js</a>). </small>
     <small>Credits and <a href="https://github.com/lobokevin/truesize"><cite title="GitHub">GitHub repo here</cite></a></small>
    </blockquote>
  </div>);
  }

