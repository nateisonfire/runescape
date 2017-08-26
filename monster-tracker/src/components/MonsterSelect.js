import React, { Component } from 'react';
import './MonsterSelect.css';
import MonsterButton from './MonsterButton';

class MonsterSelect extends Component {

  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    //var color = '#4DAF7C';
    /*var style = {
      textAlign: 'center'
    };*/
    return (
      <div className="monsterSelection">
        <div className="selectionTitle">Select a NPC:</div>
        <MonsterButton onClick={this.props.onMonsterClick} npc="Man" />
        <MonsterButton onClick={this.props.onMonsterClick} npc="Goblin" />
        <MonsterButton onClick={this.props.onMonsterClick} npc="Cow" />
        <MonsterButton onClick={this.props.onMonsterClick} npc="Dust Devil" />
      </div>
    );
  }
}

export default MonsterSelect;