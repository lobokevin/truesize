import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateSizeThunk } from '../../store/products';
import styles from '../../styles.js'

class SuccessDisplay extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.updateSizeThunk(this.props.size);
  }

  render(){
    return(
    <div className="alert alert-primary" role="alert" style={styles.success}>
  We have your measurements! <Link to="/products" >Click here< /Link> or head over to the products page to view shirts which would fit you perfectly!
  <p>Unhappy with the photograph you just took? You could try it again!</p>
</div>
);
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = null;
const mapDispatch = { updateSizeThunk };
export default connect(mapState, mapDispatch)(SuccessDisplay);
