import React from 'react';
import Header from './Header';
import InnerNav from './InnerNav';
import Intro from './Intro';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import Footer from './Footer';


export default function Home() {

    return (
      <div className="container" id="wrapper">
        <div className="row">
          <Header />
        </div>
        <div id="main">
          <InnerNav />
          <Intro />
          <StepOne />
          <StepTwo />
        </div>
          <Footer />
      </div>
    );
  }

