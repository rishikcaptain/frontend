import React from 'react'
import './Footerstyle.css'
const Footer = () => {
    return (
        <div>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h5>About</h5>
                            <p className="text-justify">
                                <b> CMPP is a price - tracking website for cryptoassets with the features of adding coins to the portfolios.
                                Users can mark their faviourite coins in their watchlist.
                                <br />
                                The main motto of CMPP is to help you create portfolios and learn investing in Cryptocurrencies. <br />
                                Any ideas, suggestions or bug reports, contact us on following links</b>
                               
                            </p>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <h5>About Me</h5>
                            <ul className="footer-links">
                                <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/">  <b>Linkedin</b> </a></li>
                                <li><a target="_blank" rel="noreferrer" href="https://github.com/">      <b>Github</b>  </a></li>
                                <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/">  <b>Instagram</b>    </a></li>
                            </ul>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <h5>Tech Stack</h5>
                            <ul className="footer-links">
                                <li> <b>MongoDB</b> </li>
                                <li> <b>Express.js</b> </li>
                                <li> <b>Node.js</b>  </li>
                                <li> <b>React.js</b> </li>
                                <li> <b>Bootstrap</b> </li>
                                <li> <b>Material UI</b> </li>
                            </ul>
                        </div>
                        
                    </div>
                    <hr />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text"> <b>Copyright © 2021 All Rights Reserved by CMPP</b> </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
