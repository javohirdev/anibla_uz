import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faFilm } from '@fortawesome/free-solid-svg-icons';
import ReactPlayer from 'react-player/youtube';
import './home.scss';

class News extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="news d-flex">
                <div className="sidebar">
                    <ul className="menu mt-3 border-bottom">
                        <p>
                            <FontAwesomeIcon className="mr-3 text-danger" icon={faFilm} />
                            menyu
                        </p>
                        <li>
                            <FontAwesomeIcon className="mr-3 text-white" icon={faArrowAltCircleRight} />
                            <a href="#">
                                Komediya
                            </a>
                        </li>
                        <li>
                            <FontAwesomeIcon className="mr-3 text-white" icon={faArrowAltCircleRight} />
                            <a href="#">
                                Komediya
                            </a>
                        </li>
                        <li>
                            <FontAwesomeIcon className="mr-3 text-white" icon={faArrowAltCircleRight} />
                            <a href="#">
                                Tragediya
                            </a>
                        </li>
                        <li>
                            <FontAwesomeIcon className="mr-3 text-white" icon={faArrowAltCircleRight} />
                            <a href="#">
                                Trilogiya
                            </a>
                        </li>
                        <li>
                            <FontAwesomeIcon className="mr-3 text-white" icon={faArrowAltCircleRight} />
                            <a href="#">
                                Epoyepa
                            </a>
                        </li>
                        <li>
                            <FontAwesomeIcon className="mr-3 text-white" icon={faArrowAltCircleRight} />
                            <a href="#">
                                Lorem
                            </a>
                        </li>
                    </ul>
                    <ul className="menu mt-3">
                        <p>
                            <FontAwesomeIcon className="mr-3 text-danger" icon={faFilm} />
                            yillar
                        </p>
                        <li>
                            <FontAwesomeIcon className="mr-3 text-white" icon={faArrowAltCircleRight} />
                            <a href="#">
                                Komediya
                            </a>
                        </li>
                        <li>
                            <FontAwesomeIcon className="mr-3 text-white" icon={faArrowAltCircleRight} />
                            <a href="#">
                                Komediya
                            </a>
                        </li>
                        <li>
                            <FontAwesomeIcon className="mr-3 text-white" icon={faArrowAltCircleRight} />
                            <a href="#">
                                Tragediya
                            </a>
                        </li>
                        <li>
                            <FontAwesomeIcon className="mr-3 text-white" icon={faArrowAltCircleRight} />
                            <a href="#">
                                Trilogiya
                            </a>
                        </li>
                        <li>
                            <FontAwesomeIcon className="mr-3 text-white" icon={faArrowAltCircleRight} />
                            <a href="#">
                                Epoyepa
                            </a>
                        </li>
                        <li>
                            <FontAwesomeIcon className="mr-3 text-white" icon={faArrowAltCircleRight} />
                            <a href="#">
                                Lorem
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="latestNewses">
                    <div className="smallInfo mt-5 ml-5">
                        <p className="newsText">
                            <FontAwesomeIcon className="mr-3 text-danger" icon={faFilm} />
                            yangiliklar
                        </p>
                        <div className="top1 d-flex">
                            <div className="VIPCard p-3">
                                <div className="cardHeader border-bottom pb-1">
                                    <p>Qanday qilib VIP olish to'g'risida</p>
                                </div>
                                <div className="cardBody mt-3">
                                    <p className="mb-3">1. Saytimizdan ro'yhatdan o'ting</p>
                                    <p className="mb-3">2. ID ni qo'lga kiriting</p>
                                    <p className="mb-3">3. VIP account sotib oling</p>
                                    <p className="mb-3">4. Saytimizdan premium foydalaning</p>
                                </div>
                            </div>
                            <div className="videoSec">
                                <ReactPlayer 
                                url='https://www.youtube.com/watch?v=XcW8rUHIR_w'
                                controls={true}
                                width='680px'
                                height='290px'
                                />
                            </div>
                        </div>
                        <div className="top2 mt-5 d-flex">
                            <div className="blog">
                                <a href="#">
                                    <div className="overlay">
                                        <div className="titles">
                                            <p className="newsType mb-0">yangiliklar</p>
                                            <p className="newsName">
                                                Lorem ipsum dolor
                                            </p>
                                        </div>
                                    </div>
                                    <img src="/images/javohirdev.jpg" />
                                </a>
                            </div>
                            <div className="blog">
                                <a href="#">
                                    <div className="overlay">
                                        <div className="titles">
                                            <p className="newsType mb-0">yangiliklar</p>
                                            <p className="newsName">
                                                Lorem ipsum dolor
                                            </p>
                                        </div>
                                    </div>
                                    <img src="/images/javohirdev.jpg" />
                                </a>
                            </div>
                            <div className="blog">
                                <a href="#">
                                    <div className="overlay">
                                        <div className="titles">
                                            <p className="newsType mb-0">yangiliklar</p>
                                            <p className="newsName">
                                                Lorem ipsum dolor
                                            </p>
                                        </div>
                                    </div>
                                    <img src="/images/javohirdev.jpg" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default News;