import React, {Component} from 'react';

//Components
import PersonalInformation from './personalInformationForm/index';
import HomeInfo from './homeInfo';
import AdditionalInfo from './additionalInfo';
import DataTreatment from './dataTreatment';
import Header from '../core/header';
import AcademicInformation from './academicInformation/academicInformation';


class Admisison extends Component {
    state = {
        step: 1,
        subStep: 1,
        personalInformation: {},
        HomeInfo: {}
    }
    render (){
        const query = new URLSearchParams(this.props.location.search);
        const userDataId = query.get('id');
        const step = this.state.step;
        const subStep = this.state.subStep;

        const statusStep = (type, step, number) => {
            if(type == "next" && step === "subStep") {
                this.setState({
                    subStep: this.state.subStep+1
                });
            }else if(type == "prev" && step === "subStep"){
                this.setState({
                    subStep: this.state.subStep-1
                });
            }

            if(type == "next" && step === "step") {
                this.setState({
                    step: this.state.step+1,
                    subStep: 1
                });
            }else if(type == "prev" && step === "step") {
                this.setState({
                    step: this.state.step-1,
                    subStep: 1
                });
            }
        }

        const dataStep = (data, status, type) => {
            
            switch (status) {
                case "PersonalInformation":
                    this.setState({
                        personalInformation: {
                            ...this.state.personalInformation,
                            ...data
                        }
                    })
                    statusStep(type, "subStep");
                break;

                case "HomeInfo":
                    this.setState({
                        personalInformation: {
                            ...this.state.personalInformation,
                            ...data
                        }
                    })
                    statusStep(type, "subStep");
                break;

                case "AdditionalInfo":
                    this.setState({
                        personalInformation: {
                            ...this.state.personalInformation,
                            ...data
                        }
                    })
                    statusStep(type, "subStep");
                break;

                case "DataTreatment": 
                    this.setState({
                        personalInformation: {
                            ...this.state.personalInformation,
                            ...data
                        }
                    })
                    statusStep(type, "step");
                break;

                case "AcademicInformation": 
                    this.setState({
                        personalInformation: {
                            ...this.state.personalInformation,
                            ...data
                        }
                    })
                    this.setState({
                        step: 6,
                        subStep: 1
                    });
                    //statusStep(type, "step");
                break;

            }
        }

        const setStep = step => {
            this.setState({
                step: step,
                subStep: 1
            });
        }
        console.log('step :', step);
        console.log('subStep :', subStep);
        return (
            <>
                <Header type={2}></Header>
                

                <div className="row col-md-12 pt-5">
                    <div className="col-md-4">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="">
                                <div className="apply-admission" >
                                    <div className="apply-admission-wrap type2 revert bd-type1">
                                        <div className="apply-admission-inner">
                                            <h3 className="title text-center">
                                                <span>Inscripción vitual</span>
                                            </h3><br/>

                                            <div className="list-group">
                                                <a onClick={() => setStep(1)} className={"list-group-item list-group-item-action  " + (step == 1 ? "active color-white": "item-list-personal")}>Información personal</a>
                                                <a onClick={() => setStep(2)} className={"list-group-item list-group-item-action  " + (step == 2 ? "active color-white": "item-list-personal")}>Información académica</a>
                                                {/*
                                                    <a onClick={() => setStep(3)} className={"list-group-item list-group-item-action  " + (step == 3 ? "active color-white": "item-list-personal")}>Población vulnerable</a>
                                                <a onClick={() => setStep(4)} className={"list-group-item list-group-item-action  " + (step == 4 ? "active color-white": "item-list-personal")}>Información salud</a>
                                                <a onClick={() => setStep(5)} className={"list-group-item list-group-item-action  " + (step == 5 ? "active color-white": "item-list-personal")}>Información laboral</a>
                                                
                                                */}
                                                <a onClick={() => setStep(6)} className={"list-group-item list-group-item-action  " + (step == 6 ? "active color-white": "item-list-personal")}>Información familiar</a>
                                                <a onClick={() => setStep(7)} className={"list-group-item list-group-item-action  " + (step == 7 ? "active color-white": "item-list-personal")}>Información financiera</a>
                                                <a onClick={() => setStep(8)} className={"list-group-item list-group-item-action  " + (step == 8 ? "active color-white": "item-list-personal")}>Información sarlaft</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>                            
                            </div>
                        </div>
                    </div>

                    <div className="col-md-8">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="">
                                <div className="apply-admission" >
                                    <div className="apply-admission-wrap type2 revert bd-type1">
                                        {
                                            step == 1 && subStep == 1 && (
                                                <div className="apply-admission-inner">
                                                    <h2 className="title text-center">
                                                        <span>Información personal</span>
                                                    </h2><br/>
                                                    <div className="col-md-12">
                                                        <PersonalInformation data={this.state.personalInformation} userDataId={userDataId} dataStep={ (data, status, type) => dataStep(data, status, type)}/>
                                                    </div>
                                                </div>
                                            )
                                        }

                                        {
                                            step == 1 && subStep == 2 && (
                                                <div className="apply-admission-inner">
                                                    <h2 className="title text-center">
                                                        <span>Domicilio</span>
                                                    </h2><br/>
                                                    <div className="col-md-12">
                                                        <HomeInfo data={this.state.personalInformation} userDataId={userDataId} dataStep={ (data, status, type) => dataStep(data, status, type)}/>
                                                    </div>
                                                </div>
                                            )
                                        }

                                        {
                                            step == 1 && subStep == 3 && (
                                                <div className="apply-admission-inner">
                                                    <h2 className="title text-center">
                                                        <span>información adicional</span>
                                                    </h2><br/>
                                                    <div className="col-md-12">
                                                        <AdditionalInfo data={this.state.personalInformation} userDataId={userDataId} dataStep={ (data, status, type) => dataStep(data, status, type)}/>
                                                    </div>
                                                </div>
                                            )
                                        }

                                        {
                                            step == 1 && subStep == 4 && (
                                                <div className="apply-admission-inner">
                                                    <h2 className="title text-center">
                                                        <span>información adicional</span>
                                                    </h2><br/>
                                                    <div className="col-md-12">
                                                        <DataTreatment data={this.state.personalInformation} userDataId={userDataId} dataStep={ (data, status, type) => dataStep(data, status, type)}/>
                                                    </div>
                                                </div>
                                            )
                                        }

                                        {
                                            step == 2 && subStep == 1 && (
                                                <div className="apply-admission-inner">
                                                    <h2 className="title text-center">
                                                        <span>Información Académica</span>
                                                    </h2><br/>
                                                    <div className="col-md-12">
                                                        <AcademicInformation data={this.state.personalInformation} userDataId={userDataId} dataStep={ (data, status, type) => dataStep(data, status, type)}/>
                                                    </div>
                                                </div>
                                            )
                                        }
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