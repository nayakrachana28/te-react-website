import React, { Component, useEffect, useState } from "react";
import '../styles/home.css'
import { Link } from 'react-router-dom';
import axios from "axios";
import { render } from "@testing-library/react";
import { createUseStyles } from "react-jss";


export default class HomeComponent extends Component {
    state = { details: [] }

    componentDidMount() {
        axios.get('http://localhost:3000/card').then(
            res => {
                const details = res.data;
                this.setState({ details });
            }
        )
    }


    render() {
        return (
            <>
            {/* carousel */}
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-slider10.jpg" className="d-block w-100" alt="..." style={{ height: 550 }}></img>
                            <div className="carousel-caption d-none d-sm-block">
                                <h2>WE MEET YOUR FINANCIAL INVESTMENT NEEDS</h2>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-slider20.jpg" className="d-block w-100" alt="..." style={{ height: 550 }}></img>
                            <div className="carousel-caption d-none d-sm-block">
                                <h2>SIMPLE INVESTING
                                    PROSPEROUS FUTURE</h2>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-slider30.jpg" className="d-block w-100" alt="..." style={{ height: 550 }}></img>
                            <div className="carousel-caption d-none d-sm-block">
                                <h2>WE WILL HELP TO CREATE YOUR WEALTH</h2>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                    {/* Cards */}
                <div className="card-header">
                    <h2>OUR FOCUS IS OUR CLIENTS' SUCCESS</h2>
                </div>
                <CardAPI></CardAPI>
                
                {/* Cards */}
                <div style={{ backgroundColor: 'rgb(222, 228, 236)', paddingBottom: 70 }}>
                    <div className="card-hed">
                        <h3 className="sco-header">ADVICE ON HOW TO MAKE WISE INVESTMENTS</h3>
                        <br />
                        <h5 className="para">If you have no experience in investing, or you do not want to risk, and would like to get a reliable tool and a guaranteed source of income, leave it to the professionals.</h5>
                    </div>
                    <div className="container">
                        <div className="row row-cols-1 row-cols-md-3">
                            {this.state.details.map(det =>
                                <div className="col mb-4">
                                    <div className="card">
                                        <div className="view overlay">
                                            <img className="card-img-top" src={det.image} alt="Card image cap"></img>
                                        </div>
                                        <div className="card-body sec-card">
                                            <h4 className="card-title">{det.card_name}</h4>
                                            <p className="card-text">{det.card_des}</p>
                                            <span style={{ fontSize: 25 }}><i className="fa-solid fa-circle-arrow-right"></i></span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {/* Card 2 Columns */}
                <div className="card-group">
                    <div className="card card-th">
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <p className="card-title">Fresh Investment Solutions!</p>
                                    <p className="card-text"><i className="fa-solid fa-gear" style={{ color: '#a2a8ae' }}></i> &nbsp; Boutique Discretionary Investment Management & Stockbroking Services</p>
                                    <p className="card-text"><i className="fa-solid fa-gear" style={{ color: '#a2a8ae' }}></i> &nbsp;Third Party Fund Investments</p>
                                    <p className="card-text"><i className="fa-solid fa-gear" style={{ color: '#a2a8ae' }}></i> &nbsp; Bespoke Capital Protected Investments</p>
                                    <p className="card-text"><i className="fa-solid fa-gear" style={{ color: '#a2a8ae' }}></i> &nbsp; Invest in Africa Rising</p>
                                    <p className="card-text"><i className="fa-solid fa-gear" style={{ color: '#a2a8ae' }}></i> &nbsp;Investment course</p>
                                    <button type="button" className="btn btn-outline-light card-botton">Learn More</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="card card-thrd">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="card-body">
                                    <p className="card-title">Learning to Save Money</p>
                                    <p className="card-text"><i className="fa-solid fa-gear" style={{ color: '#a2a8ae' }}></i> &nbsp;Investment course</p>
                                    <p className="card-text"><i className="fa-solid fa-gear" style={{ color: '#a2a8ae' }}></i> &nbsp;Marketing course</p>
                                    <p className="card-text"><i className="fa-solid fa-gear" style={{ color: '#a2a8ae' }}></i> &nbsp;Management course</p>
                                    <p className="card-text"><i className="fa-solid fa-gear" style={{ color: '#a2a8ae' }}></i> &nbsp;During the existence of the company, a lot of companies and starters have become our customers. Most of them are now prosperous and popular in the business sphere.</p>
                                    <button type="button" className="btn btn-outline-light card-botton">Learn More</button>
                                </div>
                            </div>
                            <div className="col-md-4"></div>

                        </div>
                    </div>
                </div>

                {/* small carousel */}

                <div className="row">
                    <div id="carousel" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carousel" data-slide-to="0" className="active"></li>
                            <li data-target="#carousel" data-slide-to="1"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="d-none d-sm-block">
                                    <div className="slide-box">
                                        <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-partner6.jpg" alt="First slide"></img>
                                        <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-partner5.jpg" alt="First slide"></img>
                                        <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/12/mt-0239-home-partner11.jpg" alt="First slide"></img>
                                        <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-partner2.jpg" alt="First slide"></img>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="d-none d-sm-block">
                                    <div className="slide-box">
                                        <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/12/mt-0239-home-partner13.jpg" alt="Second slide"></img>
                                        <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-partner4.jpg" alt="Second slide"></img>
                                        <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-partner5.jpg" alt="Second slide"></img>
                                        <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-partner4.jpg" alt="Second slide"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </button>
                    </div>
                </div>

                {/* Form */}
                <FormValidation></FormValidation>

                {/* Contact */}
                <div className="footcont">
                    <div className="row">
                        <div className="col-4">
                            <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-location.png" alt="" />
                            <h5>NEW YORK 9870 ST VINCENT GLASGOW</h5>
                        </div>
                        <div className="col-4">
                            <div><img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-mail.png" alt="" /></div>
                            <h5>CONTACT@DEMOLINK.ORG</h5>
                        </div>
                        <div className="col-4">
                            <div><img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-phone.png" alt="" /></div>
                            <h5>CALL US: +1 800 603 6035</h5>
                        </div>
                    </div>
                </div>


                {/* Footer */}

                <footer className="page-footer font-small blue pt-4 footer">
                    <div className="container-fluid text-center text-md-left">
                        <div className="row">
                            <div className="col-md-4 mt-3 foot-col">
                            <h6 className="text-uppercase">HABER</h6>
                                <ul className="navbar-nav flex-row">
                               
                                <li className="nav-item">
                                <Link className="nav-link icons" to="">
                                    <i className="fab fa-youtube"></i>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link icons" to="">
                                    <i className="fab fa-facebook-f"></i>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link icons" to="">
                                    <i className="fab fa-instagram"></i>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link icons" to="">
                                <i class="fa-brands fa-google-plus"></i>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link icons" to="">
                                <i class="fa-brands fa-twitter"></i>
                                </Link>
                            </li>
                           
                        </ul>
                            </div>
                            <div className="col-md-2 mb-md-0 mb-3">
                              
                            </div>
                            <div className="col-md-6 mb-md-0 mb-3">
                              <div className="maps">
                              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d286614.135180494!2d-4.241729!3d55.859666000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488815562056ceeb%3A0x71e683b805ef511e!2sGlasgow%2C%20UK!5e0!3m2!1sen!2sus!4v1666506822415!5m2!1sen!2sus" style={{height:200, width:500}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright text-center py-3" style={{color:"white"}}>© 2015 Privacy policy</div>

                </footer>
            </>

        )
    }
}

class CardAPI extends Component{

    state = { carddetails: [] }

    componentDidMount() {
        axios.get('https://localhost:7081/api/CardFocus').then(
            res => {
                const carddetails = res.data;
                this.setState({ carddetails });
            }
        )
    }

        
    render(){
        return(
            <>
            <div class="team-boxed">
                    <div class="container">
                        <div className="row people">
                        {this.state.carddetails.map(det =>
                            <div className="col-md-6 col-lg-3 item">
                                <div className="box"><img className="rounded-circle" src={det.focusImage}></img>
                                    <h3 className="name">{det.focusTitle}</h3>
                                    <p className="description">{det.focusDesc}</p>
                                    <div className="social"><button type="button" className="btn btn-outline-light text-dark card-botton">Read More</button></div>
                                </div>
                            </div>
                        )}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

// Form Validation

const validation =({error,...rest}) =>{
    let checkValidation=false;

    Object.values(error).forEach(val =>{
        if(val.length>0){
            checkValidation=false;
        }else{
            checkValidation=true;
        }
    });

    Object.values(rest).forEach(val =>{
        if(val==0){
            checkValidation=false;
        }else{
            checkValidation=true;
        }
    });

    return checkValidation;
}

const regularExpression = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)

class FormValidation extends Component{

    constructor(props){
        super(props)

        this.state={
            name:'',
            email:'',
            phone:'',
            message:'',
            error:{
                name:'',
                email:'',
                phone:'',
                message:''
            }
        }
    }

    onFormSubmit=event =>{
        event.preventDefault();
        if(validation(this.state)){
            console.log(this.state)
        }else{
            console.log("Error Occured");
        }
    };
    
    formObject=event =>{
        event.preventDefault();

        const{name,value}=event.target;
        let error ={...this.state.error};

        switch(name){
            case "name":
                error.name=value.length<4 ? "Name should be 5 characters long" :"";
                break;
            case "email":
                error.email=regularExpression.test(value)
                ? ""
                : "Email is not valid";
                break;
            case "phone":
                error.phone=value.length>=10 ? "":"Phone number should be have 10 Digits";
                break;
            default:
                break;
        }

        this.setState({
            error,
            [name]:value
        })
    };
    render(){

        const {error}=this.state;

        return(
            <>
            <div className="from-img">
                    <div className="from-headre">
                        <h4>QUICK CONTACT</h4>
                    </div>
                    <div className="container">
                        <form onSubmit={this.onFormSubmit}>
                            <div className="row mb-4">
                                <div className="col">
                                    <div className="form-outline">
                                        <input required type="text" id="form6Example1" className={error.name.length>0 ? "is-invalid from-control" : "form-control"} placeholder="Name:" name="name" onChange={this.formObject}/>
                                        {error.name.length>0 &&(
                                            <span className="invalid-feedback">{error.name}</span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="form-outline mb-4">
                                <input required type="email" id="form6Example5" className={error.email.length>0 ? "is-invalid from-control" : "form-control"} placeholder="Email:" name="email" onChange={this.formObject}/>
                                {error.email.length>0 &&(
                                            <span className="invalid-feedback">{error.email}</span>
                                        )}
                            </div>

                            <div className="form-outline mb-4">
                                <input required type="phone" id="form6Example6" className={error.phone.length>0 ? "is-invalid from-control" : "form-control"} placeholder="Phone:" name="phone" onChange={this.formObject}/>
                                {error.phone.length>0 &&(
                                            <span className="invalid-feedback">{error.phone}</span>
                                        )}
                            </div>

                            <div className="form-outline mb-4">
                                <textarea required className="form-control" id="form6Example7" rows="4" placeholder="Message:" name="message"></textarea>
                            </div>

                            <button type="submit" className="btn btn-block mb-4 from-btn">Place order</button>
                        </form>
                    </div>
                </div>

            </>
        )
    }
}