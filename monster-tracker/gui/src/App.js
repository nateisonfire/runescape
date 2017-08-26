import React, { Component } from 'react';
import './App.css';
import Halogen from 'halogen';
import MonsterSelect from './components/MonsterSelect';
import TrackingPage from './components/TrackingPage';

class App extends Component {

  constructor() {
    super();
    this.state = {
      showMain: true
    };
    //this.onMonsterSelect.bind(this);
  }

  randomLoader(color){
    const compArray = [
      <Halogen.PulseLoader color={color}/>,
      <Halogen.GridLoader color={color}/>,
      <Halogen.ClipLoader color={color}/>,
      <Halogen.RiseLoader color={color}/>,
      <Halogen.BeatLoader color={color}/>,
      <Halogen.SyncLoader color={color}/>,
      <Halogen.RotateLoader color={color}/>,
      <Halogen.FadeLoader color={color}/>,
      <Halogen.PacmanLoader color={color}/>,
      <Halogen.SquareLoader color={color}/>,
      <Halogen.ScaleLoader color={color}/>,
      <Halogen.SkewLoader color={color}/>,
      <Halogen.MoonLoader color={color}/>,
      <Halogen.RingLoader color={color}/>,
      <Halogen.BounceLoader color={color}/>,
      <Halogen.DotLoader color={color}/>
    ];
    const pickIndex = Math.floor(Math.random() * compArray.length);
    return compArray[pickIndex];
  }

  onMonsterSelect() {
    this.setState({
      showMain: false
    });
  }

  onBackClick(){
    this.setState({
      showMain: true
    });
  }

  render() {
    
    var content = (this.state.showMain)? 
      <MonsterSelect onMonsterClick={this.onMonsterSelect.bind(this)}/> : 
      <TrackingPage backClick={this.onBackClick.bind(this)} />;

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