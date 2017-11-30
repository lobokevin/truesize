import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../../styles.js'

export default function HomeInfo(){
    return ( <div className="col-11" style={styles.homeInfo}>
    <blockquote>
      <h6> New here? What is True Size? </h6>
    <small>An e-commerce web app which uses rudimentary computer vision to recommend shirts for you in 3 simple steps -<br />

    <ol>
      <li>Upload an image or use the sample image below</li>
      <li>Click <code>Process</code> to process your image for your size - either 'Small', 'Medium' or 'Long'.</li>
      <li>On detecting your size, the <Link to="/products">Products</Link> page will be updated to shirts of your size. </li>
    </ol>
    <a href="https://github.com/lobokevin/truesize" target="_blank"><cite title="GitHub">GitHub repo here</cite></a></small>
    </blockquote>
  </div>);
  }

