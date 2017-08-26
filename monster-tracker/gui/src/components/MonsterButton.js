import React, { Component } from 'react';
import './MonsterButton.css';

class MonsterButton extends Component {

  constructor(props) {
    super();
    this.state = {
        name: props.npc
    };
  }

  render(){
    return (
      <button className="MonsterButton" onClick={this.props.onClick}>
          {this.state.name}
      </button>
    );
  }
}

export default MonsterButton;
