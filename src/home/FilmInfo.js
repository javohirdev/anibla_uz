import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './home.scss';

class FilmInfo extends Component {

    render() {
        return (
            <div className="filmInfo">
                <div className="overlay">
                    <Container>
                        <Row>
                            <Col md="6">
                                <div className="info">
                                    <h2 className="text-white">Yangi Dunyo</h2>
                                    <p className="w-50 mt-3 text-white">
                                        Lorem ipsum dolor sit amet, 
                                        consectetur adipiscing elit, 
                                        sed do eiusmod tempor incididunt ut labore et 
                                        dolore magna aliqua.
                                    </p>
                                    <img className="w-25" src="/images/home/stars.png" alt="Img" />
                                </div>
                                <div className="preview mt-5">
                                    <a className="m-1" href="#">
                                        <img src="/images/preview.jpg" alt="Img" />
                                    </a>
                                    <a className="m-1" href="#">
                                        <img src="/images/preview.jpg" alt="Img" />
                                    </a>
                                    <a className="m-1" href="#">
                                        <img src="/images/preview.jpg" alt="Img" />
                                    </a>
                                    <a className="m-1" href="#">
                                        <img src="/images/preview.jpg" alt="Img" />
                                    </a>
                                </div>
                            </Col>
                            <Col md="4">
                                <span className="imgFilm">
                                    <img src="/images/Primevalnew.jpg" alt="image Film" />
                                </span>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default FilmInfo;