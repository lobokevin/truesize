import React from 'react';
import styles from '../../styles.js'

export default function Footer() {
  return ( <footer id="footer" > <section>
    <h2>True Size</h2>
<p > An e - Commerce website which generates the correct shirt brand / size for you !</p>
    <ul className="actions">
      <li>
< a href = "https://github.com/lobokevin/truesize" className = "button" rel="noopener noreferrer" target="_blank"> GitHub Page </a>
      </li>
    </ul>
</section> <section> <h2>Kevin Lobo</h2 > <dl className="alt">
  <dt>Resume</dt>
<dd > <a href="https://goo.gl/cRnZJd" rel="noopener noreferrer" target="_blank">
    https://goo.gl/cRnZJd </a>
  </dd>
								<dt>Phone</dt > <dd>(309) 684-8200 </dd> <dt> Email </dt>
<dd > <a href="mailto:kevin.r.lobo@gmail.com" rel="noopener noreferrer" target="_blank">kevin.r.lobo@gmail.com</a > </dd> </dl >
							<ul className="icons">
								<li><a href="#" className="icon fa-twitter alt"><span className="label">Twitter</span > </a> </li>
								<li><a href="#" className="icon fa-facebook alt"><span className="label">Facebook</span > </a> </li>
								<li><a href="#" className="icon fa-instagram alt"><span className="label">Instagram</span > </a> </li>
								<li><a href="#" className="icon fa-github alt"><span className="label">GitHub</span > </a> </li>
								<li><a href="#" className="icon fa-dribbble alt"><span className="label">Dribbble</span > </a> </li>
							</ul > </section> <p className= "copyright" >Theme - a tweaked version of 'Stellar' - courtsey of
<a href = "https://html5up.net" rel="noopener noreferrer"  target = "_blank" > HTML5 UP </a>.<br /> Free for personal & commercial use. Sample image from UnTuckit.com</p >
					</footer >);
}
