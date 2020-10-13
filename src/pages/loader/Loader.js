import React, { Component } from 'react';
import '../styles/main.scss';

class Loader extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="Loader">
                <div className="loading">
                    <div className="main">
                        <div className="loader" id="loader-4">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Loader
