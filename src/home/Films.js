import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import {
     Container, Row, Col, Card, CardHeader, CardBody
} from 'reactstrap';
import './home.scss';

class Films extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="films">
                <Container>
                        <Tabs defaultActiveKey="anime" id="uncontrolled-tab-example">
                                <Tab eventKey="anime" title="Anime">
                                    <Row>
                                        <Col>
                                            <Card>
                                                <CardHeader className="text-center">
                                                    <div className="overlay">16+</div>
                                                    <img src="/images/Primevalnew.jpg" alt="img" />
                                                    <p className="filmName mt-3 mb-0">Film_name</p>
                                                    <p className="filmDate text-danger mt-1">Film_date</p>
                                                </CardHeader>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card>
                                                <CardHeader className="text-center">
                                                    <div className="overlay">16+</div>
                                                    <img src="/images/Primevalnew.jpg" alt="img" />
                                                    <p className="filmName mt-3 mb-0">Film_name</p>
                                                    <p className="filmDate text-danger mt-1">Film_date</p>
                                                </CardHeader>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card>
                                                <CardHeader className="text-center">
                                                    <div className="overlay">16+</div>
                                                    <img src="/images/Primevalnew.jpg" alt="img" />
                                                    <p className="filmName mt-3 mb-0">Film_name</p>
                                                    <p className="filmDate text-danger mt-1">Film_date</p>
                                                </CardHeader>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card>
                                                <CardHeader className="text-center">
                                                    <div className="overlay">16+</div>
                                                    <img src="/images/Primevalnew.jpg" alt="img" />
                                                    <p className="filmName mt-3 mb-0">Film_name</p>
                                                    <p className="filmDate text-danger mt-1">Film_date</p>
                                                </CardHeader>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card>
                                                <CardHeader className="text-center">
                                                    <div className="overlay">16+</div>
                                                    <img src="/images/Primevalnew.jpg" alt="img" />
                                                    <p className="filmName mt-3 mb-0">Film_name</p>
                                                    <p className="filmDate text-danger mt-1">Film_date</p>
                                                </CardHeader>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Card>
                                                <CardHeader className="text-center">
                                                    <div className="overlay">16+</div>
                                                    <img src="/images/Primevalnew.jpg" alt="img" />
                                                    <p className="filmName mt-3 mb-0">Film_name</p>
                                                    <p className="filmDate text-danger mt-1">Film_date</p>
                                                </CardHeader>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card>
                                                <CardHeader className="text-center">
                                                    <div className="overlay">16+</div>
                                                    <img src="/images/Primevalnew.jpg" alt="img" />
                                                    <p className="filmName mt-3 mb-0">Film_name</p>
                                                    <p className="filmDate text-danger mt-1">Film_date</p>
                                                </CardHeader>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card>
                                                <CardHeader className="text-center">
                                                    <div className="overlay">16+</div>
                                                    <img src="/images/Primevalnew.jpg" alt="img" />
                                                    <p className="filmName mt-3 mb-0">Film_name</p>
                                                    <p className="filmDate text-danger mt-1">Film_date</p>
                                                </CardHeader>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card>
                                                <CardHeader className="text-center">
                                                    <div className="overlay">16+</div>
                                                    <img src="/images/Primevalnew.jpg" alt="img" />
                                                    <p className="filmName mt-3 mb-0">Film_name</p>
                                                    <p className="filmDate text-danger mt-1">Film_date</p>
                                                </CardHeader>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card>
                                                <CardHeader className="text-center">
                                                    <div className="overlay">16+</div>
                                                    <img src="/images/Primevalnew.jpg" alt="img" />
                                                    <p className="filmName mt-3 mb-0">Film_name</p>
                                                    <p className="filmDate text-danger mt-1">Film_date</p>
                                                </CardHeader>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="cartoon" title="Cartoon">
                                    <Row>
                                        <Col>
                                            <Card>
                                                <CardHeader className="text-center">
                                                    <div className="overlay">16+</div>
                                                    <img src="/images/Primevalnew.jpg" alt="img" />
                                                    <p className="filmName mt-3 mb-0">Film_name</p>
                                                    <p className="filmDate text-danger mt-1">Film_date</p>
                                                </CardHeader>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card>
                                                <CardHeader className="text-center">
                                                    <div className="overlay">16+</div>
                                                    <img src="/images/Primevalnew.jpg" alt="img" />
                                                    <p className="filmName mt-3 mb-0">Film_name</p>
                                                    <p className="filmDate text-danger mt-1">Film_date</p>
                                                </CardHeader>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card>
                                                <CardHeader className="text-center">
                                                    <div className="overlay">16+</div>
                                                    <img src="/images/Primevalnew.jpg" alt="img" />
                                                    <p className="filmName mt-3 mb-0">Film_name</p>
                                                    <p className="filmDate text-danger mt-1">Film_date</p>
                                                </CardHeader>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card>
                                                <CardHeader className="text-center">
                                                    <div className="overlay">16+</div>
                                                    <img src="/images/Primevalnew.jpg" alt="img" />
                                                    <p className="filmName mt-3 mb-0">Film_name</p>
                                                    <p className="filmDate text-danger mt-1">Film_date</p>
                                                </CardHeader>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card>
                                                <CardHeader className="text-center">
                                                    <div className="overlay">16+</div>
                                                    <img src="/images/Primevalnew.jpg" alt="img" />
                                                    <p className="filmName mt-3 mb-0">Film_name</p>
                                                    <p className="filmDate text-danger mt-1">Film_date</p>
                                                </CardHeader>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="film" title="Film">
                                    
                                </Tab>
                                <Tab eventKey="series" title="Anime seriallar">
                                    
                                </Tab>
                        </Tabs>
                </Container>
            </div>
        )
    }
}

export default Films;