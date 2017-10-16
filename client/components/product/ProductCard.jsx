import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class ProductCard extends Component {

  render(){
    this.props = {
      name: 'iWater',
      src : 'http://pitt.edu/~bdp23/iWater.jpg',
      description: 'The best water you\'ll ever drink'
    }
    return (
      <div className="row">
          <div className="col s12 m7">
            <div className="card">
              <div className="card-image">
                <img src={this.props.src} className="productImage"/>
              <span className="card-title">{this.props.name}</span>
              </div>
              <div className="card-content">
                <p>{this.props.description}</p>
              </div>
              <div className="card-action">
                <Link to="/home">Add to Cart </Link>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

