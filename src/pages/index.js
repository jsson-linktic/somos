import React, {createRef} from "react"
import {  graphql } from "gatsby";
import { Formik, Form } from 'formik';
import Header from "./core/header";
import Footer from "./core/footer";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


//CSS
import '../assets/css/bootstrap.css';
import '../assets/css/style.css';
import '../assets/css/animate.css';
import '../assets/css/flexslider.css';
import '../assets/css/font-awesome.css';
import '../assets/css/jquery.mCustomScrollbar.min.css';
import '../assets/css/jquery-fancybox.css';
import '../assets/css/owl.carousel.min.css';
import '../assets/css/owl.theme.default.min.css';
import '../assets/css/responsive.css';
import '../assets/css/shortcodes.css';
import '../assets/css/themify-icons.css';
import Admisison from "./admission";
import Home from "./home/index";

class BlogIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    }

    this.handleChange = this.handleChange.bind(this);


  }

  handleChange(event){
    this.setState({
      email: event.target.value
    });
  }

  render() {

    const ref = createRef();

    const handleClick = (values, type = 0) => {
        if(!type){
            ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        }

        
        setTimeout(() => {
            if(values && values.email){
                this.setState({email: values.email})
            }
        }, 1000);
    }

    const initialValues = {
        name: '',
        email: this.state.email,
        phone: ''
    }

    return (
      <>
        <BrowserRouter>
            <Redirect
                from="/"
                to="/home" />
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/admisison" component={Admisison}/>
            </Switch>
        </BrowserRouter>

            


            

            {
            /*
                <section className="slider testimonial-flexslider testimonial-style1 equalize sm-equalize-auto clearfix">        
                <div className="wrap-info themesflat-content-box" data-padding="0% 0% 0% 10%" data-sdesktoppadding="0% 0% 0% 0%" data-ssdesktoppadding="0% 0% 0% 0%" data-mobipadding="0% 0% 0% 0%" data-smobipadding="0% 0% 0% 0%">
                    <div id="carousel-testimonial" className="flexslider">
                        <ul className="slides translate-none"> 
                            <li className="avatar">
                                <img src="images/home1/33.png" alt="images"/>
                            </li>
                            <li className="avatar">
                                <img src="images/home1/32.png" alt="images"/>
                            </li>
                            <li className="avatar">
                                <img src="images/home1/31.png" alt="images"/>
                            </li>
                            <li className="avatar">
                                <img src="images/home1/30.png" alt="images"/>
                            </li>
                            <li className="avatar">
                                <img src="images/home1/29.png" alt="images"/>
                            </li> 
                        </ul>
                    </div>
                </div>
                <div className="wrap-quote themesflat-content-box" data-padding="10.47% 14.1% 0% 0%" data-sdesktoppadding="10.47% 15px 0% 15px" data-ssdesktoppadding="16% 15px 0% 15px" data-mobipadding="100px 15px 85px 15px" data-smobipadding="100px 15px 85px 15px">
                    <div id="slider-testimonial" className="flexslider">
                        <ul className="slides client-info">
                            <li>
                                <span className="icon-quote icon-icons8-get-quote-filled-100"></span>
                                <p className="speech">
                                    " Before Coursecity, I was working two minimum wage job. Now& new<br/> life & learned most of my programming database<br/> hrough self-study &the material available.
                                </p>
                                <div className="name">
                                    Stephanie Magion
                                </div>
                            </li>
                            <li>
                                <span className="icon-quote icon-icons8-get-quote-filled-100"></span>
                                <p className="speech">
                                    " Before Coursecity, I was working two minimum wage job. Now& new<br/> life & learned most of my programming database<br/> hrough self-study &the material available.
                                </p>
                                <div className="name">
                                    Stephanie Magion
                                </div>
                            </li>
                            <li>
                                <span className="icon-quote icon-icons8-get-quote-filled-100"></span>
                                <p className="speech">
                                    " Before Coursecity, I was working two minimum wage job. Now& new<br/> life & learned most of my programming database<br/> hrough self-study &the material available.
                                </p>
                                <div className="name">
                                    Stephanie Magion
                                </div>
                            </li>
                            <li>
                                <span className="icon-quote icon-icons8-get-quote-filled-100"></span>
                                <p className="speech">
                                    " Before Coursecity, I was working two minimum wage job. Now& new<br/> life & learned most of my programming database<br/> hrough self-study &the material available.
                                </p>
                                <div className="name">
                                    Stephanie Magion
                                </div>
                            </li>
                            <li>
                                <span className="icon-quote icon-icons8-get-quote-filled-100"></span>
                                <p className="speech">
                                    " Before Coursecity, I was working two minimum wage job. Now& new<br/> life & learned most of my programming database<br/> hrough self-study &the material available.
                                </p>
                                <div className="name">
                                    Stephanie Magion
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            */
            }
    </>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
