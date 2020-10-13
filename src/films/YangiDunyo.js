import React, { Component } from 'react';
import { Container, Col } from 'reactstrap';
import NavSec from '../pages/header/NavSec';
import Footer from '../pages/footer/Footer';
import SendFeedback from './SendFeedback';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import ReactPlayer from 'react-player/youtube';
import './YangiDunyo.scss';
import { SRLWrapper } from "simple-react-lightbox";

class YangiDunyo extends Component {
    render() {
        const styleImg = {
            width: "17%", 
            margin: "0.7rem", 
            cursor: "pointer",
            borderRadius: "10px"
        };
        return (
            <div className="YangiDunyo">
                <NavSec />
                <div className="main d-flex">
                    <Col md="4">
                        <div className="filmPhoto mb-3">
                            <img className="w-75" src="/images/Primevalnew.jpg" alt="img" />
                        </div>
                        <div className="filmInfos">
                            <h3>
                                <FontAwesomeIcon className="text-danger mr-3" icon={faFilm} />
                                Ma'lumotlar
                            </h3>
                            <ul>
                                <li className="d-flex">
                                    <b>Mamlakat:</b>
                                    <p className="ml-3">Kanada, Britaniya</p>
                                </li>
                                <li className="d-flex">
                                    <b>Yili:</b>
                                    <p className="ml-3">2012, 2013</p>
                                </li>
                                <li className="d-flex">
                                    <b>Ko'rishlar soni:</b>
                                    <p className="ml-3">0 ta</p>
                                </li>
                                <li className="d-flex">
                                    <b>Yuklab olishlar:</b>
                                    <p className="ml-3">0 ta</p>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col md="8">
                        <div className="videoSec">
                            <ReactPlayer 
                            url='https://www.youtube.com/watch?v=XcW8rUHIR_w' 
                            controls={true}
                            width="800px"
                            height="407px"
                            />
                        </div>
                        <div className="smallInfo mt-5">
                            <p className="w-75 mb-5">
                                Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non proident,
                            </p>
                            <a href="#">Yuklab olish</a>
                        </div>
                    </Col>
                </div>
                <Container>
                    <SRLWrapper>
                            <img style={styleImg} src="/Images/filmImages/img1.jpg" alt="Image 1" />
                            <img style={styleImg} src="/Images/filmImages/img2.png" alt="Image 2" />
                            <img style={styleImg} src="/Images/filmImages/img3.jpg" alt="Image 3" />
                            <img style={styleImg} src="/Images/filmImages/img4.jpg" alt="Image 4" />
                            <img style={styleImg} src="/Images/filmImages/img2.png" alt="Image 5" />
                    </SRLWrapper>
                    <SRLWrapper>
                            <img style={styleImg} src="/Images/filmImages/img1.jpg" alt="Image 1" />
                            <img style={styleImg} src="/Images/filmImages/img2.png" alt="Image 2" />
                            <img style={styleImg} src="/Images/filmImages/img3.jpg" alt="Image 3" />
                            <img style={styleImg} src="/Images/filmImages/img4.jpg" alt="Image 4" />
                            <img style={styleImg} src="/Images/filmImages/img2.png" alt="Image 5" />
                    </SRLWrapper>
                    <div className="downloadAllSeries">
                        <a href="#">Barcha qismlarni yuklab olish</a>
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <input type="text" aria-required placeholder="Full Name" className="form-control" />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Feedback" className="form-control" />
                        </div>
                        <button type="submit">Send Feedback</button>
                    </div>
                </Container>
                <Footer />
            </div>
        )
    }
}

export default YangiDunyo;