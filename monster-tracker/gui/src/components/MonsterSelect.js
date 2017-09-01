import React, { Component } from 'react';
import './MonsterSelect.css';
import MonsterButton from './MonsterButton';

class MonsterSelect extends Component {

  constructor() {
    super();
    this.state = {
    };
  }

  createButtons() {
    var buttons = [];
    var counter = 0;
    this.props.data.forEach(function(m) {
      buttons.push(<MonsterButton key={counter} onClick={this.props.onMonsterClick} npc={m.name} id={counter} />);
      counter++;
    }, this);
    return buttons;
  }

  render() {
    //var color = '#4DAF7C';
    /*var style = {
      textAlign: 'center'
    };*/

    return (
      <div className="monsterSelection">
        <div className="selectionTitle">Select a NPC:</div>
          {this.createButtons()}
      </div>
    );
  }
}

export default MonsterSelect;

/*
<MonsterButton onClick={this.props.onMonsterClick} npc="Man" />
        <MonsterButton onClick={this.props.onMonsterClick} npc="Goblin" />
        <MonsterButton onClick={this.props.onMonsterClick} npc="Cow" />
        <MonsterButton onClick={this.props.onMonsterClick} npc="Dust Devil" />
         */