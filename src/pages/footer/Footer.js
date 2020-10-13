import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTelegram, faInstagram } from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="Footer p-3">
                <Container> 
                    <Row> 
                        <div className="general">
                            <div className="main">
                                <ul className="logo">
                                    <p>
                                       <a href="#">
                                           Anibla.uz
                                       </a>
                                    </p>
                                    <a href="#" style={{marginRight: "0.5rem"}}>
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                    <a href="#" style={{marginRight: "0.5rem"}}>
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                    <a href="#" style={{marginRight: "0.5rem"}}>
                                        <FontAwesomeIcon icon={faTelegram} />
                                    </a>
                                </ul>
                            </div>
                        </div>
                        <div className="sections d-flex">
                                <ul className="tabs">
                                    <h4>My Account</h4>
                                    <li>
                                        <a href="#">
                                            Lorem ipsum dolor
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Lorem ipsum dolor
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Lorem ipsum dolor
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Lorem ipsum dolor
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Lorem ipsum dolor
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Lorem ipsum dolor
                                        </a>
                                    </li>
                                </ul>
                                <ul className="tabs">
                                    <h4>Why buy from us</h4>
                                    <li>
                                        <a href="#">
                                            Lorem ipsum dolor
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Lorem ipsum dolor
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Lorem ipsum dolor
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Lorem ipsum dolor
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Lorem ipsum dolor
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Lorem ipsum dolor
                                        </a>
                                    </li>
                                </ul>
                                <ul className="tabs">
                                    <h4>Shop</h4>
                                    <li>
                                        <a href="#">
                                            Lorem ipsum dolor
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Lorem ipsum dolor
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Lorem ipsum dolor
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Lorem ipsum dolor
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Lorem ipsum dolor
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Lorem ipsum dolor
                                        </a>
                                    </li>
                                </ul>
                        </div>
                    </Row>
                    <hr />
                    <Row id="author">
                        <div className="author-name d-flex">
                            <p>All rights reserved | UMDSOFT 2020</p>
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Footer;