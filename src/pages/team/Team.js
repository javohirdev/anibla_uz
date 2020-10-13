import React, { Component } from 'react';
import { 
    Container, Row, Col, Card, CardHeader, CardBody
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTelegram, faInstagram } from '@fortawesome/free-brands-svg-icons';

class Team extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="Team">
                <Container>
                    <h4>Our Team</h4>
                    <Row>
                        <Col md="4">
                            <Card className="border-0 rounded-0">
                                <CardHeader className="bg-white text-center border-bottom-0">
                                    <img src="/images/about/me.jpg" alt="profileImg" />
                                </CardHeader>
                                <CardBody className="text-center">
                                    <div className="smallInfo">
                                        <h3>Javohir Hakimov</h3>
                                        <p>Frontend & Mobile Developer at Facebook</p>
                                    </div>
                                </CardBody>
                                <div className="overlay d-flex">
                                    <a href="#">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faTelegram} />
                                    </a>
                                </div>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="border-0 rounded-0">
                                <CardHeader className="bg-white text-center border-bottom-0">
                                    <img src="/images/about/me.jpg" alt="profileImg" />
                                </CardHeader>
                                <CardBody className="text-center">
                                    <div className="smallInfo">
                                        <h3>Javohir Hakimov</h3>
                                        <p>Frontend & Mobile Developer at Facebook</p>
                                    </div>
                                </CardBody>
                                <div className="overlay d-flex">
                                    <a href="#">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faTelegram} />
                                    </a>
                                </div>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="border-0 rounded-0">
                                <CardHeader className="bg-white text-center border-bottom-0">
                                    <img src="/images/about/me.jpg" alt="profileImg" />
                                </CardHeader>
                                <CardBody className="text-center">
                                    <div className="smallInfo">
                                        <h3>Javohir Hakimov</h3>
                                        <p>Frontend & Mobile Developer at Facebook</p>
                                    </div>
                                </CardBody>
                                <div className="overlay d-flex">
                                    <a href="#">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faTelegram} />
                                    </a>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="4">
                            <Card className="border-0 rounded-0">
                                <CardHeader className="bg-white text-center border-bottom-0">
                                    <img src="/images/about/me.jpg" alt="profileImg" />
                                </CardHeader>
                                <CardBody className="text-center">
                                    <div className="smallInfo">
                                        <h3>Javohir Hakimov</h3>
                                        <p>Frontend & Mobile Developer at Facebook</p>
                                    </div>
                                </CardBody>
                                <div className="overlay d-flex">
                                    <a href="#">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faTelegram} />
                                    </a>
                                </div>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="border-0 rounded-0">
                                <CardHeader className="bg-white text-center border-bottom-0">
                                    <img src="/images/about/me.jpg" alt="profileImg" />
                                </CardHeader>
                                <CardBody className="text-center">
                                    <div className="smallInfo">
                                        <h3>Javohir Hakimov</h3>
                                        <p>Frontend & Mobile Developer at Facebook</p>
                                    </div>
                                </CardBody>
                                <div className="overlay d-flex">
                                    <a href="#">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faTelegram} />
                                    </a>
                                </div>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="border-0 rounded-0">
                                <CardHeader className="bg-white text-center border-bottom-0">
                                    <img src="/images/about/me.jpg" alt="profileImg" />
                                </CardHeader>
                                <CardBody className="text-center">
                                    <div className="smallInfo">
                                        <h3>Javohir Hakimov</h3>
                                        <p>Frontend & Mobile Developer at Facebook</p>
                                    </div>
                                </CardBody>
                                <div className="overlay d-flex">
                                    <a href="#">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faTelegram} />
                                    </a>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Team;