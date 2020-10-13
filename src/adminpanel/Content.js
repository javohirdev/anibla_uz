import React, { Component } from 'react';
import InfoCard from './InfoCard';

export default class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="Content ContentBack">
                <InfoCard />
                <button>tt</button>
            </div>
        )
    }
}
