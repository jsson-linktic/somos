import React, {Component} from 'react';

//Components
import PersonalInformation from './personalInformationForm';
import HomeInfo from './homeInfo';
import AdditionalInfo from './additionalInfo';
import DataTreatment from './dataTreatment';


class Admisison extends Component {
    render (){
        const query = new URLSearchParams(this.props.location.search);
        const userDataId = query.get('id')
        return (
            <>
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

                <div className="container">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="iconbox-style1">
                            <div className="apply-admission">
                                <div className="apply-admission-wrap type2 revert bd-type1">
                                    <div className="apply-admission-inner">
                                        <h2 className="title text-center">
                                            <span>Información personal</span>
                                        </h2><br/>
                                        <div className="col-md-12">
                                            <PersonalInformation userDataId={userDataId}/>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="apply-admission" >
                                <div className="apply-admission-wrap type2 revert bd-type1">
                                    <div className="apply-admission-inner">
                                        <h2 className="title text-center">
                                            <span>Domicilio</span>
                                        </h2><br/>
                                        <div className="col-md-12">
                                            <HomeInfo userDataId={userDataId}/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="apply-admission" style={{marginTop: "-70px"}}>
                                <div className="apply-admission-wrap type2 revert bd-type1">
                                    <div className="apply-admission-inner">
                                        <h2 className="title text-center">
                                            <span>información adicional</span>
                                        </h2><br/>
                                        <div className="col-md-12">
                                            <AdditionalInfo userDataId={userDataId}/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="apply-admission pt-5" style={{marginTop: "150px"}}>
                                <div className="apply-admission-wrap type2 revert bd-type1">
                                    <div className="apply-admission-inner">
                                        <h2 className="title text-center">
                                            <span>información adicional</span>
                                        </h2><br/>
                                        <div className="col-md-12">
                                            <DataTreatment userDataId={userDataId}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Admisison;