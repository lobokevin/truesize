import React from 'react';
import Webcam from 'react-webcam';
import Dropzone from 'react-dropzone';
import tracking from 'tracking'; {/* npm module bug documented on official tracking GitHub repo*/}
import ColorMatchedDiv from './ColorMatchDiv';
import HomeInfo from './HomeInfo';
import SuccessDisplay from './SuccessDisplay';
import styles from '../../styles.js';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      screenshot: null,
      files: null,
      colorMatched: false,
      width: 0,
      height: 0,
      color: '',
      size: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleProcess = this.handleProcess.bind(this);
    this.processSampleImage = this.processSampleImage.bind(this);

    let tracker = '';

  }

  componentDidMount() {
    let img = this.img;
    let canvas = this.canvas;

    window.tracking.ColorTracker.registerColor('blue', function(r, g, b) {
      if (r < 180 && g < 186 && b < 224) {
        return true;
      }
      return false;
      });

     this.tracker = new window.tracking.ColorTracker(['magenta', 'cyan', 'yellow', 'blue']);
  }

  handleClick() {
    const capture = this.webcam.getScreenshot();
    this.setState({screenshot: capture});
  }

  handleProcess() {
    let img = this.img;

    let obj = {
      colorMatchedStatus: false,
      width: 0,
      height: 0,
      color: ''
    }

    this.tracker.on('track', (event) => {

      event.data.forEach(function(rect) {

        obj = {
          color: rect.color,
          colorMatchedStatus: true,
          width: rect.width,
          height: rect.height
        }
      })

      if ((obj.height - obj.width) > 0){
        this.setState({colorMatched: obj.colorMatchedStatus, size: 'M',
        width: obj.width, height: obj.height, color: obj.color});
      }

      this.setState({colorMatched: obj.colorMatchedStatus, size: 'L',
      width: obj.width, height: obj.height, color: obj.color});
    });

    window.tracking.track(img, this.tracker);
  }

  onDrop(files) {
    let reader = new FileReader();
    let file = files[0];
    reader.onloadend = () => {
      this.setState({files: file, screenshot: reader.result});
    }
    reader.readAsDataURL(file)
  }

  processSampleImage() {
    this.setState({screenshot: '/images/sample.jpg'})
  }

  renderSampleImage() {
    return (
      <div><img onClick={this.processSampleImage} width={'80%'} height="500" src="/images/sample.jpg" /></div>
    );
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <HomeInfo />
        </div>
        <div className="row">
          <div className="col-6">
            <Webcam style={styles.webcam} screenshotFormat="image/jpeg" audio={false} ref={node => this.webcam = node}/>
            <button type="button" className="btn btn-primary" onClick={this.handleClick}>Capture</button>
          </div>

          <div className="col-6" style={styles.divOutline}>
            {this.state.screenshot
              ? null
              : <Dropzone style={styles.dropzone} onDrop={this.onDrop.bind(this)}>
                <p>
                  <h6>Click here or drop an image of yourself here. Otherwise click the sample image below to use it!</h6>
                </p>
              </Dropzone>}
            {this.state.screenshot
              ? null
              : this.renderSampleImage()}
            {this.state.screenshot
              ? <div style={styles.positionRelative}>
                  <img
                  ref={(img) => {this.img = img;}} src={this.state.screenshot} style={styles.screenshotDiplay} />
                </div>
              : null}

              <div style={styles.displayInline}>
            {this.state.screenshot
              ?  <button
              style = {
              Object.assign({}, styles.positionRelative, styles.marginTop5)
          }
          type = "button" className = "btn btn-primary" onClick = {
            this.handleProcess
          } > Process </button>
               : null}
               {this.state.colorMatched
          ? <ColorMatchedDiv color={this.state.color} size={this.state.size} />
          : null}
          </div>
          </div>
        </div>

        {this.state.colorMatched
          ? <SuccessDisplay size={this.state.size} />
          : null}
      </div>
    );
  }

}

export default Home;
