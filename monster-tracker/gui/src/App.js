import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import LoadingPage from './components/LoadingPage'
import MonsterSelect from './components/MonsterSelect';
import TrackingPage from './components/TrackingPage';

class App extends Component {

  constructor() {
    super();
    this.state = {
      content: 'LoadingPage',
      monsterData: []
    };
    // make sure that awesome loading screen is shown
    setTimeout(() => {
      axios.get('http://localhost:3001/monsters').then(res => {
        console.log(res);
        this.setState({
          content: 'MonsterSelect',
          monsterData: res.data
        });
      });
    }, 1000);
  }

  onMonsterSelect(id) {
    this.setState({
      content: 'TrackingPage',
      currentView: id
    });
  }

  onBackClick(){
    this.setState({
      content: 'MonsterSelect'
    });
  }

  render() {
    
    var content;
    switch (this.state.content){
      case 'LoadingPage':
        content = <LoadingPage />;
        console.log('Loading...'); 
        break;
      case 'MonsterSelect':
        content = <MonsterSelect data={this.state.monsterData} onMonsterClick={this.onMonsterSelect.bind(this)}/>;
        console.log('Displaying Monsters.');
        break;
      case 'TrackingPage':
        content = <TrackingPage data={this.state.monsterData[this.state.currentView]} backClick={this.onBackClick.bind(this)} />;
        console.log('Displaying Tracking Page.');
        break;
      default:
        content = <LoadingPage />;
        break;
    }

    return (
      <div className="App">
        <div className="App-header">
          <h2>OSRS Loots</h2>
        </div>
        <div className="App-content">
          {content}
        </div>
      </div>
    );
  }
}

export default App;



/*
flip between

<MonsterSelect />

and

<TrackingPage />


*/