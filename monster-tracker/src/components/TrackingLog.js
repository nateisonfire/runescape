import React, { Component } from 'react';
import './TrackingLog.css';

class TrackingLog extends Component {

  constructor(props) {
    super();
    this.state = {
        total: props.total
    }
  }

  render(){
    return (
      <div className="log">
        <div className="notepad">
          <ul>{this.props.log}</ul>
        </div>
        <div className="total">
          Total: {this.props.total} gp
        </div>
      </div>
    );
  }
}

export default TrackingLog;
