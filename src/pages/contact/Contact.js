import React from 'react';
import { Map, TileLayer } from "react-leaflet";
import { Container, Row, Col } from 'reactstrap';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import PhonelinkRingIcon from '@material-ui/icons/PhonelinkRing';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTelegram, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
    return(
        <div className="Contact">
            <Container>
                <h4>
                    Contact
                </h4>
                <Row>
                    <Col md="4">
                        <Map style={{width: "500px", height: "300px"}} center={[51.507351, -0.127758]} zoom={12}>
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>
                            contributors'
                            />
                        </Map>
                    </Col>
                    <Col md="4">
                        <div className="main d-flex">
                            <div className="contact1">
                                <span className="d-flex">
                                    <LocationOnIcon className="mr-3 "/>
                                    <p>
                                        <b>Address</b>
                                    </p>
                                </span>
                                <p className="info">
                                    United States of America, California
                                </p>
                            </div>
                            <div className="contact2 ml-5">
                                <span className="d-flex">
                                    <CallIcon className="mr-3"/>
                                    <p>
                                        <b>Mobile</b>
                                    </p>
                                </span>
                                <p className="info">
                                    <a href="tel:+15055150777">
                                        +15055150777
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="main d-flex mt-5">
                            <div className="contact1">
                                <span className="d-flex">
                                    <EmailIcon className="mr-3 "/>
                                    <p>
                                        <b>Email</b>
                                    </p>
                                </span>
                                <p className="info">
                                    <a href="mailto:uzwebprogrammer@gmail.com">
                                        name@gmail.com
                                    </a>
                                </p>
                            </div>
                            <div className="contact2" style={{marginLeft: "7.5rem"}}>
                                <span className="d-flex">
                                    <PhonelinkRingIcon className="mr-3"/>
                                    <p>
                                        <b>Social</b>
                                    </p>
                                </span>
                                <p className="info">
                                    <a href="#" style={{marginRight: "0.5rem"}}>
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                    <a href="#" style={{marginRight: "0.5rem"}}>
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                    <a href="#" style={{marginRight: "0.5rem"}}>
                                        <FontAwesomeIcon icon={faTelegram} />
                                    </a>
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};