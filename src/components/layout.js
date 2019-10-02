import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"


class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

   
    return (
      <>
        <div className="wrap-header">
          <header className="header flat-header lh-header header-style1">
              <div className="site-header-inner">
                  <div className="container">
                      <div id="logo" className="logo">
                      </div>
                      <div className="mobile-button"><span></span></div>
                      <div className="header-menu">
                          <nav id="main-nav" className="main-nav">
                              <ul className="menu">
                                  
                                  <li><a href="course.html">Carreras</a>
                                      
                                  </li>
                                  <li><a href="about.html">Nosotros</a>
                                      
                                  </li>
                                  <li><a href="blog.html">Blog</a>
                                      
                                  </li>
                                  <li className="nav-sing">
                                      <a className="sing-in" href="#">Sing In</a>
                                      <a className="sing-up" href="#">Sing Up</a>
                                  </li>
                              </ul>
                          </nav>
                      </div> 
                  </div>
              </div>
          </header>
      </div>
      </>
    )
  }
}

export default Layout
