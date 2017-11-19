import React from 'react';
import styles from '../../styles.js'

export default class HomeInfo extends React.Component{
  render(){
    return(<div className="alert alert-success alert-dismissible fade show" role="alert">
    <h4 className="alert-heading">What is True Size?</h4>
    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
    <p>This is an e-commerce website - which uses rudimentary computer vision (js library - 'tracking.js') to find shirts which fit you perfectly!</p>
    <p className="mb-0">Tech Stack and finer details on the GitHub 'read.me' page.<a href="https://github.com/lobokevin/truesize"> Click Here</a></p>
  </div>);
  }
}
