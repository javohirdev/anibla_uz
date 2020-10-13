import React, { Component } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faStar, faUser } from '@fortawesome/free-solid-svg-icons';

export default class InfoCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }

    }

    render() {
        return (
            <div className="InfoCard">
                <Container>
                    <Row>
                        <Col md="4">
                            <Card>
                                <CardHeader>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faDatabase} />
                                    </div>
                                    <div className="info">
                                        <span>Followers</span>
                                        <p>150GB</p>
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <p>Updated 5hr ago</p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card>
                                <CardHeader>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faDatabase} />
                                    </div>
                                    <div className="info">
                                        <span>Followers</span>
                                        <p>45K</p>
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <p>Updated 5hr ago</p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card>
                                <CardHeader>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faUser} />
                                    </div>
                                    <div className="info">
                                        <span>Users</span>
                                        <p>4000</p>
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <p>Updated 5hr ago</p>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}