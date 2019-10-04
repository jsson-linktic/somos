import React, {Component, createRef} from 'react';
import { Formik, Form } from 'formik';
import Header from '../core/header';
import Footer from '../core/footer';
import axios from 'axios';
import schema from './schema';
import swal from 'sweetalert';
const url_dev = 'http://192.168.1.144:3000/api/userData';

class Home extends Component {
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

            if(type) {
                axios.post(`${url_dev}`, { ...values })
                .then(res => {
                    console.log('res :', res);
                    swal({
                        text: "Formulario enviado correctamente",
                        icon: "success",
                        button: "Ok",
                      });
                    console.log(res);
                    console.log(res.data);
                })
                .catch((e) => {
                    console.log('e :', e);
                    swal("Oppss!", "Error en el servidor!", "error");
                })
            }
        }

        const initialValues = {
            name: '',
            email: this.state.email,
            phone: ''
        }
        
        return (
            <>

               

                <Header/>
                    <section className="flat-slider style1 clearfix">
                        <div className="rev_slider_wrapper fullwidthbanner-container" >
                            <div id="rev-slider1" className="rev_slider fullwidthabanner">
                                <ul>
                                    <li data-transition="random">
                                        <img src={require('../../assets/images/header/01.png')} alt="" data-bgposition="center center" data-no-retina/>
                                    </li>

                                    <li data-transition="random">

                                        <div className="tp-caption sl-address"
                                        data-x="['left','left','left','center']" data-hoffset="['0','4','4','15']"
                                        data-y="['middle','middle','middle','middle']" data-voffset="['325','280','250','200']"
                                        data-width="full"
                                        data-height="none"
                                        data-whitespace="normal"
                                        data-transform_idle="o:1;"
                                        data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" 
                                        data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" 
                                        data-mask_in="x:0px;y:[100%];" 
                                        data-mask_out="x:inherit;y:inherit;" 
                                        data-start="1000" 
                                        data-splitin="none" 
                                        data-splitout="none" 
                                        data-responsive_offset="on" 
                                        data-paddingtop= "['50','50','50','50']"
                                        data-paddingbottom= "['50','50','50','50']"> <a href="#" className="text-white sl-phone"><i className="fa fa-phone" aria-hidden="true"></i> +91 254 785 587</a><a href="#" className="text-white sl-email"><i className="fa fa-envelope" aria-hidden="true"></i> educate@info.com</a></div>
                                    </li>
                                </ul>
                            </div>
                        </div> 
                    </section>
                    <section className="partner-clients partner-clients-style1"> 
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-12">
                                    <div className="slide-client owl-carousel" data-auto="false" data-item="4" data-nav="false" data-dots="false" data-gap="0">
                                        <ul>
                                            <li><img src={require('../../assets/images/home1/01.png')} alt="images"></img></li>
                                        </ul>
                                        <ul>
                                            <li><img src={require('../../assets/images/home1/02.png')} alt="images"></img></li>
                                        </ul>
                                        <ul>
                                            <li><img src={require('../../assets/images/home1/03.png')} alt="images"></img></li>
                                        </ul>
                                        <ul>
                                            <li><img src={require('../../assets/images/home1/04.png')} alt="images"></img></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="iconbox-style1">
                                        <div className="apply-admission">
                                            <div className="apply-admission-wrap type2 bd-type1">
                                                <div className="apply-admission-inner">
                                                    <h2 className="title text-center">
                                                        <span>Apply for admission</span>
                                                    </h2>
                                                    <div className="caption text-center">
                                                        Make it more simple!
                                                    </div>
                                                    <div className="apply-sent apply-sent-style1">
                                                        <Formik
                                                            enableReinitialize={true}
                                                            initialValues={
                                                                {
                                                                    email: this.state.email
                                                                }
                                                            }
                                                            validate={values => {
                                                                let errors = {};
                                                                if (!values.email) {
                                                                    errors.email = 'Required';
                                                                } else if (
                                                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                                                )
                                                                {
                                                                    errors.email = 'Invalid email address';
                                                                }
                                                                return errors;
                                                            }}
                                                            onSubmit={ (values) => {
                                                                handleClick(values)
                                                            }}>
                                                            {({
                                                                values,
                                                                errors,
                                                                touched,
                                                                handleChange,
                                                                handleBlur,
                                                                handleSubmit,
                                                                isValid
                                                            }) => (
                                                                <Form onSubmit={handleSubmit} className="apply-now">
                                                                    <div className="form-sent">
                                                                        <input
                                                                            autoComplete="off"
                                                                            type="text"
                                                                            name="email"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.email}
                                                                            placeholder="email"/>
                                                                            {errors.email && touched.email && (
                                                                                <small className="form-text text-muted errorInput">{errors.email}</small>
                                                                            )}

                                                                        <button type='button' className="sent-button bg-cl3f4c99" onClick={() => handleClick(values)}  disabled={!isValid}>
                                                                            <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                                                                        </button>
                                                                    </div>
                                                                </Form>
                                                            )}
                                                        </Formik>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="online-courses online-courses-style1">
                        <div className="container">
                            <div className="title-section text-center">
                                <p className="sub-title lt-sp17">Most popular courses</p>
                                <div className="flat-title medium">
                                2000 + Online courses 
                                </div>
                            </div>
                            <div className="online-courses-wrap">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                        <div className="imagebox-courses-type1">
                                            <div className="featured-post">
                                                <img src={require('../../assets/images/home1/05.png')} alt="images"></img>
                                            </div>
                                            <div className="author-info">
                                                <div className="name">
                                                    <a href="course-single.html">Administración de Empresas</a> 
                                                </div>
                                                <div className="border-bt">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                        <div className="imagebox-courses-type1">
                                            <div className="featured-post">
                                                <img src={require('../../assets/images/home1/06.png')} alt="images"></img>
                                            </div>
                                            <div className="author-info">
                                                <div className="name">
                                                    <a href="course-single.html">Contaduría Pública</a> 
                                                </div>
                                                <div className="border-bt">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                        <div className="imagebox-courses-type1">
                                            <div className="featured-post">
                                                <img src={require('../../assets/images/home1/07.png')} alt="images"></img>
                                            </div>
                                            <div className="author-info">
                                                <div className="name">
                                                    <a href="course-single.html"> Ingeniería de sistemas</a> 
                                                </div>
                                                <div className="border-bt">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                        <div className="imagebox-courses-type1">
                                            <div className="featured-post">
                                            <img src={require('../../assets/images/home1/08.png')} alt="images"></img>
                                            </div>
                                            <div className="author-info">
                                                <div className="name">
                                                    <a href="course-single.html"> Pre-ingeniería Industrial</a> 
                                                </div>
                                                <div className="border-bt">
                                                </div>
                                            </div>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="flat-services style1 parallax parallax1 clearfix">
                        <div className="section-overlay"></div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="services-content-box themesflat-content-box" data-padding="0% 30% 0% 0%" data-mobipadding="0% 0% 0% 0%" data-smobipadding="0% 0% 0% 0%">
                                        <div className="flat-imagebox imagebox-services style1">
                                            <div className="imagebox-content">
                                                <img src={require('../../assets/images/home1/13.png')} alt="images"/>
                                                <h5 className="text-one text-white">Education Services</h5>
                                                <p className="text-white">
                                                    Education is the most power which you can use to change the world.” Education is the key to.
                                                </p>
                                                <div className="read-more">
                                                    <a href="#">Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="services-content-box themesflat-content-box" data-padding="0% 15% 0% 16%" data-mobipadding="0% 0% 0% 0%" data-smobipadding="0% 0% 0% 0%">
                                        <div className="flat-imagebox imagebox-services style1">
                                            <div className="imagebox-content">
                                                <img src={require('../../assets/images/home1/14.png')} alt="images"/>
                                                <h5 className="text-two text-white">Success Rate</h5>
                                                <p className="text-white">
                                                    Education is the most power which you can use to change the world.” Education is the key to.
                                                </p>
                                                <div className="read-more">
                                                    <a href="#">Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="services-content-box themesflat-content-box" data-padding="0% 0% 0% 30.5%" data-mobipadding="0% 0% 0% 0%" data-smobipadding="0% 0% 0% 0%">
                                        <div className="flat-imagebox imagebox-services style1">
                                            <div className="imagebox-content">
                                            <img src={require('../../assets/images/home1/14.png')} alt="images"/>
                                                <h5 className="text-three text-white">Foreign Student</h5>
                                                <p className="text-white">
                                                    Education is the most power which you can use to change the world.” Education is the key to.
                                                </p>
                                                <div className="read-more">
                                                    <a href="#">Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="flat-introduce flat-introduce-style1 clearfix">
                        <div className="container">
                            <div className="col-left">
                                <div className="videobox">
                                    <a className="fancybox" data-type="iframe" href="https://www.youtube.com/embed/2Ge1GGitzLw?autoplay=1">
                                        <img src={require('../../assets/images/home1/5.jpg')} alt="images"></img>
                                    </a>
                                    <div className="elip-top">
                                        <img src={require('../../assets/images/home1/42.png')} alt="images"></img>
                                    </div>
                                    <div className="elip-bottom">
                                        <img src={require('../../assets/images/home1/42.png')} alt="images"></img>
                                    </div>
                                </div>
                            </div>
                            <div className="col-right">
                                <div className="content-introduce content-introduce-style1">
                                    <div className="title-section">
                                        <p className="sub-title lt-sp25">About our university</p>
                                        <div className="flat-title larger heading-type1">Take a tour</div>
                                    </div>
                                    <div className="content-introduce-inner">
                                        <p>
                                            Education is the most powerful weapon which you can use to change the world.” Education is the key to elimi-nating gender inequality, to reducing poverty.
                                        </p>
                                        <p>
                                            to creating a sustainable planet, to preventing needless deaths and illness, and to fostering peace.
                                        </p>
                                        <div className="content-list">
                                            <ul>
                                                <li>
                                                    <span className="text">
                                                        Education is extremely important because you overcome superstitions.
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="text">
                                                        Education is only valuable if children are being taught right things.
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="text">  
                                                        Education is not key to success in life.
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/*Formulario de registro basico*/}

                    <section className="flat-benefit style1 clearfix" ref={ref}>
                        <div className="container-fluid">
                            <div className="col-benefit-left">
                                <div className="wrap-inconbox-benefit">
                                    <div className="title-section">
                                        <div className="flat-title small heading-type2 text-white">Why choose us?</div>
                                    </div>
                                    <div className="iconbox-benefit iconbox-benefit-style1">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-sx-12">
                                                <div className="themesflat-content-box" data-padding="0% 4% 0% 0%" data-sdesktoppadding="0% 0% 0% 0%" data-ssdesktoppadding="0% 0% 0% 0%"data-mobipadding="0% 0% 0% 0%" data-smobipadding="0% 0% 0% 0%">
                                                    <div className="iconbox">
                                                        
                                                        <div className="iconbox-content img-one">
                                                            <h3>
                                                                <a href="#">Certificate</a>
                                                            </h3>
                                                            <p>
                                                                Education is the most power which you can to change the world.” Education is the key to.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-sx-12">
                                                <div className="themesflat-content-box" data-padding="0% 4% 0% 0%" data-sdesktoppadding="0% 15px 0% 0%" data-ssdesktoppadding="0% 15px 0% 0%"data-mobipadding="0% 0% 0% 0%" data-smobipadding="0% 0% 0% 0%">
                                                    <div className="iconbox">
                                                        
                                                        <div className="iconbox-content img-two">
                                                            <h3>
                                                                <a href="#">Life Programs</a>
                                                            </h3>
                                                            <p>
                                                                Education is the most power which you can to change the world.” Education is the key to.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-sx-12">
                                                <div className="themesflat-content-box" data-padding="0% 4% 0% 0%" data-sdesktoppadding="0% 0% 0% 0%" data-ssdesktoppadding="0% 0% 0% 0%"data-mobipadding="0% 0% 0% 0%" data-smobipadding="0% 0% 0% 0%">
                                                    <div className="iconbox">
                                                        
                                                        <div className="iconbox-content img-three">
                                                            <h3>
                                                                <a href="#">Affordability</a>
                                                            </h3>
                                                            <p>
                                                                Education is the most power which you can to change the world.” Education is the key to.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-sx-12">
                                                <div className="themesflat-content-box" data-padding="0% 4% 0% 0%" data-sdesktoppadding="0% 15px 0% 0%" data-ssdesktoppadding="0% 15px 0% 0%"data-mobipadding="0% 0% 0% 0%" data-smobipadding="0% 0% 0% 0%">
                                                    <div className="iconbox">
                                                        
                                                        <div className="iconbox-content img-four">
                                                            <h3>
                                                                <a href="#">Social</a>
                                                            </h3>
                                                            <p>
                                                                Education is the most power which you can to change the world.” Education is the key to.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-benefit-right">
                                <div className="apply-admission bg-apply-type1">
                                    <div className="apply-admission-wrap type3 bd-type2">
                                        <div className="apply-admission-inner">
                                            <h2 className="title text-center">
                                                <span>Apply for admission</span>
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="form-apply">
                                        <div className="section-overlay183251"></div>
                                        <Formik
                                            validationSchema={schema}
                                            enableReinitialize={true}
                                            initialValues={initialValues}
                                            onSubmit={(values) => {
                                                handleClick(values)
                                            }}
                                            >
                                            {({
                                                values,
                                                errors,
                                                touched,
                                                handleChange,
                                                handleBlur,
                                                handleSubmit,
                                                isValid
                                            }) => (
                                                <Form onSubmit={() => handleSubmit(handleClick)} className="apply-now">
                                                    <ul>
                                                        <li>
                                                            <input
                                                                autoComplete="off"
                                                                type="text"
                                                                name="name"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.name}
                                                                placeholder="Name"/>
                                                                {errors.name && touched.name && (
                                                                    <small className="form-text text-muted errorInput">{errors.name}</small>
                                                                )}
                                                        </li>
                                                        <li>
                                                            <input
                                                                autoComplete="off"
                                                                type="text"
                                                                name="email"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.email}
                                                                placeholder="Email"/>
                                                                {errors.email && touched.email && (
                                                                    <small className="form-text text-muted errorInput">{errors.email}</small>
                                                                )}
                                                        </li>
                                                        <li>
                                                            <input
                                                                autoComplete="off"
                                                                type="text"
                                                                name="phone"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.phone}
                                                                placeholder="Phone"
                                                            />
                                                            {errors.phone && touched.phone && (
                                                                    <small className="form-text text-muted errorInput">{errors.phone}</small>
                                                                )}
                                                        </li>
                                                    </ul>
                                                    <div className="btn-50 hv-border text-center">
                                                        <button
                                                            disabled={!isValid}
                                                            type='button'
                                                            className="btn bg-clff5f60"
                                                            onClick={() => handleClick(values, 1)}>
                                                            Enviar
                                                        </button>
                                                    </div>
                                                </Form>
                                            )}
                                        </Formik>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="flat-event flat-event-style1 clearfix">
                        <div className="container-fluid">
                            <div className="col-left">
                                <div className="content-event-style1 themesflat-content-box" data-padding="13.7% 1.2% 0% 0%" data-sdesktoppadding="0% 0% 0% 0%" data-ssdesktoppadding="0% 0% 0% 0%" data-mobipadding="0% 0% 0% 0%" data-smobipadding="0% 0% 0% 0%">
                                    <div className="title-section">
                                        <div className="flat-title larger heading-type3">All upcoming events</div>
                                    </div>
                                    <div className="content-event">
                                        <div className="entry-info clearfix">
                                            <div className="entry-title">
                                                <a href="#" className="cl-7ecc88">
                                                    International Conference on Business 
                                                </a>
                                            </div>
                                            
                                        </div>
                                        <div className="entry-number number-one">
                                            <span className="cl-7ecc88">1</span>
                                        </div>
                                    </div>
                                    <div className="content-event">
                                        <div className="entry-info clearfix">
                                            <div className="entry-title">
                                                <a href="#" className="cl-3f4c99">
                                                    International Conference on Business    
                                                </a>
                                            </div>
                                            
                                        </div>
                                        <div className="entry-number number-two">
                                            <span className="cl-3f4c99">2</span>
                                        </div>
                                    </div>
                                    <div className="content-event">
                                        <div className="entry-info clearfix">
                                            <div className="entry-title">
                                                <a href="#" className="cl-ff5f60">
                                                    International Conference on Business 
                                                </a> 
                                            </div>
                                            
                                        </div>
                                        <div className="entry-number number-three">
                                            <span className="cl-ff5f60">3</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-right">
                                <div className="images-list themesflat-content-box" data-padding="0% 0% 0% 15.1%" data-sdesktoppadding="0% 0% 0% 5%" data-ssdesktoppadding="0% 0% 0% 0%" data-mobipadding="0% 0% 0% 0%" data-smobipadding="0% 0% 0% 0%">
                                    <div className="images-list-1">
                                        <div className="img-event">
                                            <img src={require('../../assets/images/home1/24.png')} alt="images"></img>
                                            <span className="number bg-cl7ecc88">1</span>
                                        </div>
                                        <div className="img-event">
                                            <img src={require('../../assets/images/home1/25.png')} alt="images"></img>
                                            <span className="number bg-cl3f4c99">2</span>
                                        </div>
                                    </div>
                                    <div className="images-list-2">
                                        <div className="img-event">
                                            <img src={require('../../assets/images/home1/26.png')} alt="images"></img>
                                            <span className="number bg-clff5f60">3</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="latest-blog latest-blog-type2 latest-blog-style2">
                        <div className="container">
                            <div className="title-section">
                                <div className="flat-title small heading-type7">
                                Latest Blog 
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-4">
                                    <article className="post post-style2 box-shadow-type1">
                                        <div className="featured-post">
                                            <img src={require('../../assets/images/home2/4.jpg')} alt="images"></img>
                                        </div>
                                        <div className="post-content">
                                            <div className="category">
                                                DESIGN
                                            </div>
                                            <div className="post-title">
                                                <h5>
                                                    <a href="blog-single.html">Design Milk is a design blog featuring...</a>
                                                </h5>
                                            </div>
                                            <div className="post-link">
                                                <a href="blog-single.html">Read Now</a>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <article className="post post-style2 box-shadow-type1">
                                        <div className="featured-post">
                                            <img src={require('../../assets/images/home2/5.jpg')} alt="images"></img>
                                        </div>
                                        <div className="post-content">
                                            <div className="category">
                                                DESIGN
                                            </div>
                                            <div className="post-title">
                                                <h5>
                                                    <a href="blog-single.html">Some of the world’s best designers share...</a>
                                                </h5>
                                            </div>
                                            <div className="post-link">
                                                <a href="blog-single.html">Read Now</a>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <article className="post post-style2 box-shadow-type1">
                                        <div className="featured-post">
                                            <img src={require('../../assets/images/home2/6.jpg')} alt="images"/>
                                        </div>
                                        <div className="post-content">
                                            <div className="category">
                                                DESIGN
                                            </div>
                                            <div className="post-title">
                                                <h5>
                                                    <a href="blog-single.html">Design Milk is a design blog featuring...</a>
                                                </h5>
                                            </div>
                                            <div className="post-link">
                                                <a href="blog-single.html">Read Now</a>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </section>
                <Footer/>
            </>
        )
    }
}

export default Home;