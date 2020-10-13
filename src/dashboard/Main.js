import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './dashboard.scss';
import Profile from './Profile';
class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }
    

    render() {
        return (
            <div className="mainDashboard">
               <div className="top">
                    <Profile />
               </div>
               <Container className="cardsDashboard d-flex">
                    <Col md="4">
                        <div className="user_profile">
                            <div className="profileLogo text-center">
                                <img className="w-50 rounded" src="/images/javohirdev.jpg" alt="Profile photo" />
                            </div>
                            <div className="profileName mt-5 text-center">
                                <p>
                                    <b>Profile_name</b>
                                </p>
                                <p>
                                    <b>Profile_email</b>
                                </p>
                                <p>
                                    <b>Profile_phone_number</b>
                                </p>
                            </div>
                            <div className="profileIdBalance mt-5 text-center">
                                <p>
                                    <b>ID: 000 000 000</b>
                                </p>
                                <p>
                                    <b>Balance: 000</b>
                                </p>
                                <a href="#" className="editProfile">
                                    Edit profile
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col md="4">
                        <div className="sendFeedback">
                            <div className="form d-flex">
                                <div className="form-group">
                                    <input placeholder="Send Feedback" type="text" className="form-control" />
                                </div>
                                <button type="submit">Send</button>
                            </div>
                        </div>
                        <div className="messages m-1 p-3">
                            <div className="box">
                                <div className="boxHeader d-flex">
                                    <img style={{width: "15%"}} src="images/javohirdev.jpg" alt="img" />
                                    <p className="ml-3">Profile name</p>
                                </div>
                                <div className="boxBody">
                                    <p className="mt-1">some tectssced</p>
                                </div>
                            </div>
                            <div className="box mt-3">
                                <div className="boxHeader d-flex">
                                    <img style={{width: "15%"}} src="images/javohirdev.jpg" alt="img" />
                                    <p className="ml-3">Profile name</p>
                                </div>
                                <div className="boxBody">
                                    <p className="mt-1">some tectssced</p>
                                </div>
                            </div>
                            <div className="box mt-3">
                                <div className="boxHeader d-flex">
                                    <img style={{width: "15%"}} src="images/javohirdev.jpg" alt="img" />
                                    <p className="ml-3">Profile name</p>
                                </div>
                                <div className="boxBody">
                                    <p className="mt-1">some tectssced</p>
                                </div>
                            </div>
                            <div className="box mt-3">
                                <div className="boxHeader d-flex">
                                    <img style={{width: "15%"}} src="images/javohirdev.jpg" alt="img" />
                                    <p className="ml-3">Profile name</p>
                                </div>
                                <div className="boxBody">
                                    <p className="mt-1">some tectssced</p>
                                </div>
                            </div>
                            <div className="box mt-3">
                                <div className="boxHeader d-flex">
                                    <img style={{width: "15%"}} src="images/javohirdev.jpg" alt="img" />
                                    <p className="ml-3">Profile name</p>
                                </div>
                                <div className="boxBody">
                                    <p className="mt-1">some tectssced</p>
                                </div>
                            </div>
                            <div className="box mt-3">
                                <div className="boxHeader d-flex">
                                    <img style={{width: "15%"}} src="images/javohirdev.jpg" alt="img" />
                                    <p className="ml-3">Profile name</p>
                                </div>
                                <div className="boxBody">
                                    <p className="mt-1">some tectssced</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md="4" className="d-flex">
                        <div className="followChannels p-3">
                            <h4 className="mb-5">Follow channels</h4>
                            <div className="channels mt-3">
                                <div className="channelsHeader d-flex">
                                    <img style={{width: "15%"}}
                                        src="/images/javohirdev.jpg"
                                        alt="img"
                                        className="rounded-circle"
                                    />
                                    <p className="ml-3">Name</p>
                                    <a href="#">
                                        Follow
                                    </a>
                                </div>
                            </div>
                            <div className="channels mt-3">
                                <div className="channelsHeader d-flex">
                                    <img style={{width: "15%"}}
                                        src="/images/javohirdev.jpg"
                                        alt="img"
                                        className="rounded-circle"
                                    />
                                    <p className="ml-3">Name</p>
                                    <a href="#">
                                        Follow
                                    </a>
                                </div>
                            </div>
                            <div className="channels mt-3">
                                <div className="channelsHeader d-flex">
                                    <img style={{width: "15%"}}
                                        src="/images/javohirdev.jpg"
                                        alt="img"
                                        className="rounded-circle"
                                    />
                                    <p className="ml-3">Name</p>
                                    <a href="#">
                                        Follow
                                    </a>
                                </div>
                            </div>
                            <div className="channels mt-3">
                                <div className="channelsHeader d-flex">
                                    <img style={{width: "15%"}}
                                        src="/images/javohirdev.jpg"
                                        alt="img"
                                        className="rounded-circle"
                                    />
                                    <p className="ml-3">Name</p>
                                    <a href="#">
                                        Follow
                                    </a>
                                </div>
                            </div>
                            <div className="channels mt-3">
                                <div className="channelsHeader d-flex">
                                    <img style={{width: "15%"}}
                                        src="/images/javohirdev.jpg"
                                        alt="img"
                                        className="rounded-circle"
                                    />
                                    <p className="ml-3">Name</p>
                                    <a href="#">
                                        Follow
                                    </a>
                                </div>
                            </div>
                            <div className="channels mt-3">
                                <div className="channelsHeader d-flex">
                                    <img style={{width: "15%"}}
                                        src="/images/javohirdev.jpg"
                                        alt="img"
                                        className="rounded-circle"
                                    />
                                    <p className="ml-3">Name</p>
                                    <a href="#">
                                        Follow
                                    </a>
                                </div>
                            </div>
                            <div className="channels mt-3">
                                <div className="channelsHeader d-flex">
                                    <img style={{width: "15%"}}
                                        src="/images/javohirdev.jpg"
                                        alt="img"
                                        className="rounded-circle"
                                    />
                                    <p className="ml-3">Name</p>
                                    <a href="#">
                                        Follow
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="myFavorites p-3">
                            <h4 className="mb-5">My Favorites</h4>
                            <div className="preview mb-3">
                                <div className="previewHeader">
                                    <a href="#">
                                        <img 
                                            className="w-100" 
                                            src="/images/preview.jpg"
                                            alt="img"
                                        />
                                    </a>
                                </div>
                                <div className="previewBody d-flex justify-content-around">
                                    <p>
                                        <b>Name film</b>
                                    </p>
                                    <p>
                                        <b>00:00</b>
                                    </p>
                                </div>
                            </div>
                            <div className="preview mb-3">
                                <div className="previewHeader">
                                    <a href="#">
                                        <img 
                                            className="w-100" 
                                            src="/images/preview.jpg"
                                            alt="img"
                                        />
                                    </a>
                                </div>
                                <div className="previewBody d-flex justify-content-around">
                                    <p>
                                        <b>Name film</b>
                                    </p>
                                    <p>
                                        <b>00:00</b>
                                    </p>
                                </div>
                            </div>
                            <div className="preview mb-3">
                                <div className="previewHeader">
                                    <a href="#">
                                        <img 
                                            className="w-100" 
                                            src="/images/preview.jpg"
                                            alt="img"
                                        />
                                    </a>
                                </div>
                                <div className="previewBody d-flex justify-content-around">
                                    <p>
                                        <b>Name film</b>
                                    </p>
                                    <p>
                                        <b>00:00</b>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
               </Container>
            </div>
        )
    }
}

export default Main;