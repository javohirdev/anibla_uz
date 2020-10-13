import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ReactPlayer from 'react-player/youtube';
import '../styles/main.scss';

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
                
        }
    }

    render() {
        return (
            <div className="Home">
                <Container>
                    <Row>
                        <Col md="6">
                            <div className="texts">
                                <h3>Animation Studio</h3>
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
                        </Col>
                        <Col md="4">
                            <ReactPlayer 
                            url='https://www.youtube.com/watch?v=XcW8rUHIR_w' 
                            controls={true}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home;