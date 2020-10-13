import React, {Component} from 'react';
import { Col } from 'reactstrap';
import './Login.scss';
import NavSec from '../pages/header/NavSec';
import Footer from '../pages/footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Login extends Component{

    constructor(props){
        super(props);
    }

    render() {

        const LoginRequest = (e) => {

            e.preventDefault();

            let request = {
                email: document.getElementById('exampleInputEmail').value,
                password: document.getElementById('exampleInputPassword').value,
            }
            axios.post('https://anibla-project.herokuapp.com/api/auth/login', request)
                .then(res => {
                    alert(res.data.message + " " + "Success Login");
                    if(res.status == 200){
                        window.location.replace('./user');
                    }
                })
                .catch(err => {
                    document.getElementById('errormessage').innerHTML = "Login yoki parol noto'g'ri kiritildi. Iltimos tekshirib qaytadan kiring!";
                    document.getElementById('errormessage').classList.toggle("d-block");
                })
                
        };

        return (
            <div className="Login">
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
                        <h3 className="text-center mb-5">SIGN IN</h3>
                        <div id="errormessage" className="messageBox d-none"></div>
                        <form onSubmit={(e) => LoginRequest(e)}>
                            <div className="form-group">
                                <input type="email" 
                                className="form-control" 
                                placeholder="Username or email"
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
                            <button type="submit">
                                SIGN IN
                                <FontAwesomeIcon className="ml-3" icon={faSignOutAlt} />
                            </button>
                            <div className="signUp ml-5">
                                <p>Don't have account? 
                                    <Link className="ml-3" to="/sign-up">Create account</Link>
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

// export default Login;


// import React, { Component } from 'react';
// // import '../../Styles/PageStyles/Login.css';
// import { login } from './Authorization';

// export default class Login extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             email : "",
//             password : "",
//             loginRequest : "mdi mdi-login-variant",
//             process : false,
//             error : false
//         }
//     }

//     authorize = e => {
//         e.preventDefault();
//         this.setState({ loginRequest : "fa fa-fw fa-spinner fa-pulse" ,process : true});
//         let {email,password} = this.state;
//         login({username : email , password : password})
//         .then( res => {
//             if(res.status === 200){
//                 this.setState({ error : false,loginRequest : "mdi mdi-login-variant" }, () => {
//                     localStorage.setItem('Token',res.data.auth_token);
//                     window.location.replace('/')
//                 })
//             }else{
//                 this.setState({ error : true, process : false, loginRequest : "mdi mdi-login-variant" })
//             }
//         })
//         .catch( err => {
//             this.setState({ error : true, process : false, loginRequest : "mdi mdi-login-variant" })
//             console.log(err);
//         });
//     }

//     render () {
//         return (
//             <div className="w-100 login">
//                 <div className="container h-100 px-0">
//                     <div className="d-flex align-items-center justify-content-center h-100 flex-column w-100">
//                         <div className="card p-2 p-sm-4 p-md-5">
//                             { this.state.error && 
//                                 <div className="alert alert-danger fade show">
//                                     <strong><i className="mdi mdi-alert"></i>  Xatolik !</strong>  Login yoki parol noto'g'ri kiritildi. Iltimos tekshirib qaytadan kiring .
                                    
//                                 </div>
//                             }
//                             <h2 className="login-title text-center">Avtorizatsiya</h2>
//                             <form className="my-3" onSubmit={ this.authorize }>
//                                 <div className="form-group py12">
//                                     <label htmlFor="mail"><i className="mdi mdi-email-outline"></i>  Elektron pochta</label>
//                                     <input required id="mail" type="text" value={this.state.email} onChange={ e => this.setState({ email : e.target.value })} className="form-control"/>
//                                 </div>
//                                 <div className="form-group py-1">
//                                     <label htmlFor="password"><i className="mdi mdi-key-outline"></i>  Parol</label>
//                                     <input required type="password" className="form-control" value={this.state.password} onChange={ e => this.setState({ password : e.target.value }) } />
//                                 </div>
//                                 <button disabled={this.state.process} className="btn btn-block btn-standart mt-3">  Kirish <i className={this.state.loginRequest}></i></button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }