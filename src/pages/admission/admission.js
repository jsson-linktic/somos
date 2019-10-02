import React from "react";

class Admission extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: this.props.form.email
        }
    }
    render () {
        return (
            <>
                <section className="flat-benefit style1 clearfix" ref={this.props.ref}>
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
                                    <form action="#" className="apply-now">
                                        <ul>
                                            <li>
                                            <input type="search" placeholder="Name"/>
                                            </li>
                                            <li>
                                            <input
                                                type="text"
                                                value={this.state.email}
                                                onChange={this.handleChange}
                                                placeholder="Enter your email ...."/>
                                            </li>
                                            <li>
                                            <input type="search" placeholder="Phone"/>
                                            </li>
                                        </ul>
                                        <div className="btn-50 hv-border text-center">
                                            <button className="btn bg-clff5f60">
                                                Apply now
                                            </button>
                                        </div>
                                    </form>  
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>  
        )
    }
}

export default Admission;