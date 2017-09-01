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
      <button className="MonsterButton" onClick={() => this.props.onClick(this.props.id)}>
          {this.state.name.split('_').join(' ')}
      </button>
    );
  }
}

export default MonsterButton;
