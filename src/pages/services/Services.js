import React, { Component } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhotoVideo } from '@fortawesome/free-solid-svg-icons';

class Services extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="Services">
                <Container>
                    <h4>Services</h4>
                    <Row>
                        <Col md="4">
                            <div className="imgBox">
                                <img 
                                    src="/images/services/img.jpg" 
                                    alt="img" 
                                />
                                <div className="overlay">
                                    <div className="titles">
                                        <p>
                                            Lorem ipsum dolor sit amet, 
                                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                             ullamco 
                                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                             in reprehenderit
                                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                            Excepteur sint occaecat cupidatat non proident,
                                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md="8" className="d-flex">
                            <Col md="4">
                                <Card>
                                    <CardHeader>
                                        <FontAwesomeIcon icon={faPhotoVideo} />
                                        <p>Lorem Ipsum</p>
                                    </CardHeader>
                                    <CardBody>
                                        <p>
                                            Lorem ipsum dolor sit amet, 
                                            consectetur adipiscing elit, sed do eiusmod.
                                        </p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="4">
                                <Card>
                                    <CardHeader>
                                        <FontAwesomeIcon icon={faPhotoVideo} />
                                        <p>Lorem Ipsum</p>
                                    </CardHeader>
                                    <CardBody>
                                        <p>
                                            Lorem ipsum dolor sit amet, 
                                            consectetur adipiscing elit, sed do eiusmod.
                                        </p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="4">
                                <Card>
                                    <CardHeader>
                                        <FontAwesomeIcon icon={faPhotoVideo} />
                                        <p>Lorem Ipsum</p>
                                    </CardHeader>
                                    <CardBody>
                                        <p>
                                            Lorem ipsum dolor sit amet, 
                                            consectetur adipiscing elit, sed do eiusmod.
                                        </p>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Col>
                        <Col md="8" className="d-flex">
                            <Col md="4">
                                <Card>
                                    <CardHeader>
                                        <FontAwesomeIcon icon={faPhotoVideo} />
                                        <p>Lorem Ipsum</p>
                                    </CardHeader>
                                    <CardBody>
                                        <p>
                                            Lorem ipsum dolor sit amet, 
                                            consectetur adipiscing elit, sed do eiusmod.
                                        </p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="4">
                                <Card>
                                    <CardHeader>
                                        <FontAwesomeIcon icon={faPhotoVideo} />
                                        <p>Lorem Ipsum</p>
                                    </CardHeader>
                                    <CardBody>
                                        <p>
                                            Lorem ipsum dolor sit amet, 
                                            consectetur adipiscing elit, sed do eiusmod.
                                        </p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="4">
                                <Card>
                                    <CardHeader>
                                        <FontAwesomeIcon icon={faPhotoVideo} />
                                        <p>Lorem Ipsum</p>
                                    </CardHeader>
                                    <CardBody>
                                        <p>
                                            Lorem ipsum dolor sit amet, 
                                            consectetur adipiscing elit, sed do eiusmod.
                                        </p>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Services;