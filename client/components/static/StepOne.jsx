import React from 'react';
import Dropzone from 'react-dropzone';
import {connect} from 'react-redux';
import {updateSizeThunk} from '../../store/products';
import styles from '../../styles.js'

class StepOne extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      screenshot: ''
    }

    this.processSampleImage = this
    .processSampleImage
    .bind(this);
    this.clearState = this
    .clearState
    .bind(this);

    this.updateSize = this
.updateSize
  .bind(this);
  }

  renderSampleImage() {

  return (
    <img
      onClick={this.processSampleImage}
      width={'105%'}
      height="400"
      src="/images/sample.jpg" />
  );
  }

  clearState(){
    this.setState({screenshot: ''})
  }

  onDrop(files) {
  let reader = new FileReader();
  let file = files[0];
  reader.onloadend = () => {
    this.setState({files: file, screenshot: reader.result});
  }
  reader.readAsDataURL(file)
  }

  updateSize(size){
this
  .props
  .updateSizeThunk('M' || size);
  }

  upload(){

  return (<li> <h3 >
  . . Or Upload a picture!
  </h3> <Dropzone style = {
  styles.dropzone
}
onDrop = {
  this
    .onDrop
    .bind(this)
} > <p>Click here to upload or drop an image of yourself here.</p> </Dropzone>
        </li >);
}

  processSampleImage() {
  this.setState({screenshot: '/images/sample.jpg'})
  }

  render(){
  return (

    <section id="first" className="main special">
      <header className="major">
        <h2>Step One: Find your size</h2>
      </header>
      <ul className="features">
        <li>
{
  this.state.screenshot
? <h3>Image received!</h3> : <h3>Click to use this sample image ..</h3>
}
{this.state.screenshot
    ? null
    : this.renderSampleImage()}

{this.state.screenshot ?
        <img ref={(img) => {
          this.img = img;}}
          width = {'105%'}
          height = "400"
          src={this.state.screenshot} />
    : null
}
        </li>
{
  this.state.screenshot
? null
: this.upload()
}
      </ul>
      <footer className="major">
        <ul className="actions">
          <li>
            <a className="button" onClick={this.clearState}>Reset Image!</a >
          </li>
    <li > <a className="button special" onClick={this.updateSize('L')}>Get Size!</a > </li>

        </ul>
      </footer >
    </section>
  );
}
}

/* -----------------    CONTAINER     ------------------ */

const mapState = null;
const mapDispatch = {
  updateSizeThunk
};
export default connect(mapState, mapDispatch)(StepOne);
