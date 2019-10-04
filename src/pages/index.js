import React from "react"
import {  graphql } from "gatsby";
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

    return (
      <>
            <BrowserRouter>
                <Redirect
                    from="/"
                    to="/home" />
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/admisison/:id" render={(props) => <Admisison {...props} />}/>
                </Switch>
            </BrowserRouter>
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
