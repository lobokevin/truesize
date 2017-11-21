import React from 'react';
import {Link} from 'react-router-dom';
import Webcam from 'react-webcam';
import Dropzone from 'react-dropzone';
import ColorMatchedDiv from './ColorMatchDiv';
import HomeInfo from './HomeInfo';
import SuccessDisplay from './SuccessDisplay';

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

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      screenshot: null,
      files: null,
      colorMatched: false,
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      color: '#FF0000'
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleProcess = this.handleProcess.bind(this);
    this.processSampleImage = this.processSampleImage.bind(this);
  }

  componentDidMount() {
    let img = this.img;
    let canvas = this.canvas;
  }

  handleClick() {
    const capture = this.webcam.getScreenshot();
    this.setState({screenshot: capture});
  }

  handleProcess() {
    let img = this.img;

    window.tracking.ColorTracker.registerColor('black', function(r, g, b) {
      if (r == 0 && g == 0 && b == 0) {
        return true;
      }
      return false;
    });

    let tracker = new window.tracking.ColorTracker(['magenta', 'cyan', 'yellow', 'black']);

    let obj = {
      colorMatchedStatus: false,
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      color: "red"
    }

    tracker.on('track', (event) =>  {

      event.data.forEach(function(rect) {

        obj = {
          color: rect.color,
          colorMatchedStatus: true,
          x : rect.x,
          y: rect.y,
          width: rect.width,
          height: rect.height
        }

      })

      this.setState({colorMatched : obj.colorMatchedStatus});
    });

    window.tracking.track(img, tracker);
  }

  onDrop(files) {
    let reader = new FileReader();
    let file = files[0];
    reader.onloadend = () => {
      this.setState({files: file, screenshot: reader.result});
    }
    reader.readAsDataURL(file)
  }

  processSampleImage(){
    this.setState({screenshot: "http://i66.tinypic.com/2ec2csz.png"})
    console.log("state", this.state);
  }

  renderSampleImage(){
  return(<div><p>Click here, or simply drop an image here if you already have an image of yourself. Else use the sample image given below!</p><img onClick={this.processSampleImage} width={"80%"} height="400" src="http://i66.tinypic.com/2ec2csz.png" /></div>);
  }

  render() {
    return (
      <div className="container">
          <div className="row">
            <div className="col-6">
              <Webcam style={styles.webcam} screenshotFormat="image/jpeg" audio={false} ref={node => this.webcam = node}/>
              <button type="button" className="btn btn-primary" onClick={this.handleClick}>Capture</button>
            </div>
            <div className="col-6" style={styles.positionRelative}>
              <Dropzone  style={styles.dropzone} onDrop={this.onDrop.bind(this)}>
                {this.state.screenshot
                  ? <div>
                    <img ref={(img) => { this.img = img;}} src={this.state.screenshot} style={styles.screenshotDiplay}/>
                    </div>
                  : null}
                  {this.state.screenshot ? null:
              this.renderSampleImage()}
              </Dropzone>
              {this.state.colorMatched ?
                  <ColorMatchedDiv/> : null}
              {this.state.screenshot?
               <button style={styles.marginTop10} type="button" className="btn btn-primary"  onClick={this.handleProcess}>Process</button>
               : null}
            </div>
          </div>

          {this.state.colorMatched ? <SuccessDisplay size={'M'}/> : null}
        </div>
    );
  }

}

export default Home;
