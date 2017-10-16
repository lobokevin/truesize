import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer grey darken-4">
        <div className="footer-copyright">
          <div className="container">
            © 2017 Kiwi Holdings LLC
            <a className="grey-text text-lighten-4 right" href="#!">
              Contact - About
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
