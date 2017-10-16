import React from 'react';
import {Link} from 'react-router-dom';
import Webcam from 'react-webcam';
import Dropzone from 'react-dropzone';
import {
  PageHeader,
  Grid,
  Row,
  Col,
  Button,
  Well
} from 'react-bootstrap';
import styles from '../../styles.js'

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      screenshot: null,
      tab: 0,
      files: null
    };
  }

  handleClick = () => {
    const screenshot = this.webcam.getScreenshot();
    this.setState({screenshot});
  }

  onDrop(files) {

    let reader = new FileReader();
    let file = files[0];

    reader.onloadend = () => {
      this.setState({files: file, screenshot: reader.result});
    }

    reader.readAsDataURL(file)
  }

  render() {
    return (
      <Grid>
        <Well>

          <Row className="show-grid">
            <Col xs={6} md={6} lg={6}>
              <Webcam width={350} height={350} screenshotFormat="image/jpeg" audio={false} ref={node => this.webcam = node}/>
              <Button bsStyle="info" onClick={this.handleClick}>Capture</Button>
            </Col>
            <Col xs={6} md={6} lg={6}>
              <Dropzone onDrop={this.onDrop.bind(this)}>
                <h3>Screenshot</h3>
                {this.state.screenshot
                  ? <img style={styles.maxWidth} src={this.state.screenshot}/>
                  : null}
              </Dropzone>
            </Col>
          </Row>
        </Well>
        <Row className="show-grid">
          <Col xs={4} md={4} lg={4}></Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;
