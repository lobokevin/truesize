import React from 'react';

export default function Intro() {
  return (
    <section id="intro" className="main">
      <div className="spotlight">
        <div className="content">
          <header className="major">
            <h2 >
              Begin here: How & Why to use this ?
            </h2>
          </header>
          <p>I love shopping online, but most of the time I end returning 50% clothes
            because they don't fit me proeprly! Turns out I'm not the only one. Forbes
            states between "25%-40% of merchandise bought online is returned at the expense
            of the retailer!"
          </p>
          <br/>
          <p>
            So I looked around a bit tried implementing a simple prototype of
            <a
              href="https://www.youtube.com/watch?v=weIIcvIz-8A"
              target="_blank"
              rel="noopener noreferrer">
              www.sizer.me</a>. Get your size in Step 1 below & then head to the Products page
            to shirts which fit you!
          </p>
          <ul className="actions">
            <li>
              <a
                href="https://www.forbes.com/sites/stevendennis/2017/08/09/many-unhappy-returns-e-commerces-achilles-heel/#3455132b4bf2"
                target="_blank"
                className="button"
                rel="noopener noreferrer">
                Source: Forbes article
              </a>
            </li>
          </ul>
        </div>
        <span className="image">
          <img src="/images/shirt.jpg" width="250" /></span>
      </div>
    </section>
  );
}
