import React, { Component } from 'react';
import TopSide from './TopSide';
import Content from './Content';

export default class Asosiy extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="Asosiy">
                <TopSide />
                <Content />
            </div>
        )
    }
}