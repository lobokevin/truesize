import React from 'react';
import styles from '../../styles.js'

export default class HomeInfo extends React.Component{
  render(){
    return(<div className="alert alert-dismissible fade show col-12" role="alert" style={styles.homeInfo}>
    <h4 className="alert-heading">What is True Size?</h4>
    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
    </button>
    <blockquote>
    <p>This is an e-commerce website - which uses rudimentary computer vision (<a href="https://trackingjs.com/" target="_blank">tracking.js</a>) to filter shirts which fit you perfectly!</p>
     <small>Tech Stack and finer details on the <a href="https://github.com/lobokevin/truesize"><cite title="GitHub">GitHub page</cite></a></small>
    </blockquote>
  </div>);
  }
}
