import React from 'react';
import {Link} from 'react-router-dom';
import Dropzone from 'react-dropzone';
import {
  PageHeader,
  Grid,
  Row,
  Col,
  Button,
  Well
} from 'react-bootstrap';
import tracking from 'tracking';
import styles from '../../styles.js'

class SizeTracker extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (

        <Well>
          <Row className="show-grid">
            <Col xs={6} md={6} lg={6}>
              </Col>
            <Col xs={6} md={6} lg={6}>
            </Col>
          </Row>
        </Well>

    );
  }
}

export default SizeTracker;
