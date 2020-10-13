import React, { Component } from 'react';
import './SendFeedback.scss';

class SendFeedback extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <div className="form">
                    <div className="form-group">
                        <input type="text" required placeholder="Full Name" className="form-control" />
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Feedback" className="form-control" />
                    </div>
                    <button type="submit">Send Feedback</button>
                </div>
            </div>
        )
    }
}

export default SendFeedback
