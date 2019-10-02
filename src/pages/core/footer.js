import React from 'react';


class Footer extends React.Component {
    render() {
        return (
            <>
            <footer id="footer" className="footer-type1">
                <div className="form-send-email">
                    <div className="container">                
                        <form action="#" className="form-send">
                            <input type="search" placeholder="Enter your email ..."/>
                            <button className="btn send-button bg-clff5f60">
                                Send
                            </button>
                        </form>                
                    </div>
                </div>
                <div id="footer-widget">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-footer">
                            <div className="logo-footer">
                                <img src={require('../../assets/images/logo/04.png')} alt="images"/>
                            </div>
                            </div>
                            <div className="col-lg-2 col-company">
                                <h3 className="widget widget-title">
                                    Company
                                </h3>
                                <ul className="widget-nav-menu">
                                    <li><a href="#">About Company</a></li>
                                    <li><a href="#">Feature Course</a></li>
                                    <li><a href="#">Careers</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-link">
                                <h3 className="widget widget-title">
                                    Help Links
                                </h3>
                                <ul className="widget-nav-menu">
                                    <li><a href="#">Student Support</a></li>
                                    <li><a href="#">Course Policy</a></li>
                                    <li><a href="#">Register  Key</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-course">
                                <h3 className="widget widget-title">
                                    Course
                                </h3>
                                <ul className="widget-nav-menu">
                                    <li><a href="#">Wordpres</a></li>
                                    <li><a href="#">Photography</a></li>
                                    <li><a href="#">Learning English</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-media">
                                <h3 className="widget widget-title">
                                    Social Media
                                </h3>
                                <ul className="widget-social-media">
                                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="bottom" className="bottom-type1 clearfix has-spacer">
                    <div id="bottom-bar-inner" className="container">
                        <div className="bottom-bar-inner-wrap">
                            <div className="bottom-bar-content">
                                <div id="copyright">
                                    © 
                                    <span className="text-year">
                                        2018
                                    </span>
                                    <span className="text-name">
                                        Roy Design.
                                    </span>
                                    <span className="license">
                                        <a href="#">All Rights Reserved</a>
                                    </span>
                                </div>
                            </div>
                            <div className="bottom-bar-menu">
                                <ul className="bottom-nav">
                                    <li className="menu-item"><a href="#">About Company</a></li>
                                    <li className="menu-item"><a href="#">Privacy Policy</a></li>
                                    <li className="menu-item"><a href="#">Help Center</a></li>
                                    <li className="menu-item"><a href="#">Terms</a></li>
                                    <li className="menu-item"><a href="#">Site Map</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <a id="scroll-top" className="show"></a>
                </footer>
            </>
        )
    }
}

export default Footer;