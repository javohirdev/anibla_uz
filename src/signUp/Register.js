import React, { Component } from 'react';
import { Col } from 'reactstrap';
import './Register.scss';
import NavSec from '../pages/header/NavSec';
import Footer from '../pages/footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Register extends Component {

    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){

        const RegisterRequest = (e) => {
            e.preventDefault();

            let userInfos = {
                name: document.getElementById('exampleInputName').value,
                email: document.getElementById('exampleInputEmail').value,
                password: document.getElementById('exampleInputPassword').value,
                re_password: document.getElementById('exampleInputrePassword').value,
            }

            axios.post("https://anibla-project.herokuapp.com/api/auth/register", userInfos)
                .then(res => {
                    alert(res.data.message + " " + "Success Register");
                    if(res.status == 201){
                        window.location.replace('./sign-in');
                    }
                })

        }

        return (
            <div className="Register">
                <NavSec />
                <div className="general d-flex">
                    <Col md="6" className="p-0">
                        <div className="box">
                            <div className="logo">
                                <h3>
                                    Anibla.uz
                                </h3>
                            </div>
                        </div>
                    </Col>
                    <Col md="4">
                        <h3 className="text-center mb-5">SIGN UP</h3>
                        <form onSubmit={(e) => RegisterRequest(e)}>
                            <div className="form-group">
                                <input type="text" 
                                className="form-control" 
                                placeholder="Name"
                                id="exampleInputName"
                                 required
                                />
                            </div>
                            <div className="form-group">
                                <input type="email" 
                                className="form-control" 
                                placeholder="Email"
                                id="exampleInputEmail"
                                 required
                                />
                            </div>
                            <div className="form-group">
                                <input type="password" 
                                className="form-control" 
                                placeholder="Password"
                                id="exampleInputPassword"
                                required
                                />
                            </div>
                            <div className="form-group">
                                <input type="password" 
                                className="form-control" 
                                placeholder="Re-Password" 
                                id="exampleInputrePassword"
                                required
                                />    
                            </div>
                            <button type="submit">
                                SIGN UP
                                <FontAwesomeIcon className="ml-3" icon={faSignOutAlt} />
                            </button>
                            <div className="signUp ml-5">
                                <p>Already have you got account? 
                                    <Link className="ml-3" to="/sign-in">Log in account</Link>
                                </p>
                            </div>
                        </form>
                    </Col>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Register;