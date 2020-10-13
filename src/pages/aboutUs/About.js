import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class About extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="About">
                <Container>
                    <h4>About us</h4>
                    <Row className="d-inline">
                        <Col md="4">
                            <div className="flexboxArea d-flex">
                                <div className="headerSec">
                                    <img 
                                        src="/images/about/me.jpg" 
                                        alt="img"
                                        className="rounded-circle"
                                    />
                                </div>
                                <div className="bodySec">
                                    <p>
                                        Lorem ipsum dolor sit amet, 
                                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                        Excepteur sint occaecat cupidatat non proident,
                                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                        Excepteur sint occaecat cupidatat non proident,
                                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="flexboxArea d-flex">
                                <div className="headerSec">
                                    <img 
                                        src="/images/about/me.jpg" 
                                        alt="img"
                                        className="rounded-circle"
                                    />
                                </div>
                                <div className="bodySec">
                                    <p>
                                        Lorem ipsum dolor sit amet, 
                                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                        Excepteur sint occaecat cupidatat non proident,
                                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                        Excepteur sint occaecat cupidatat non proident,
                                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default About
