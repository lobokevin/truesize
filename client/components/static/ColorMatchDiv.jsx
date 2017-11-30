import React from 'react';
import styles from '../../styles.js'

export default class ColorMatchedDiv extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        color : this.props.color
      }
    }
    render(){
    return (
      <div style={Object.assign({}, styles.colorMatchedDiv, {backgroundColor: '#2e393c'})}> <h6>We detected your size as '{this.props.size}'!</h6>
      </div>
     );
    }
  }
