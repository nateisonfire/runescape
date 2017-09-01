import React, { Component } from 'react';
import Halogen from 'halogen';
import './LoadingPage.css';

class LoadingPage extends Component {

  constructor(props) {
    super();
    this.state = {
        something: 'huh?'
    };
  }

  randomLoader(color){
    const compArray = [
      <Halogen.PulseLoader color={color}/>,
      //<Halogen.GridLoader color={color}/>,
      <Halogen.ClipLoader color={color}/>,
      <Halogen.RiseLoader color={color}/>,
      <Halogen.BeatLoader color={color}/>,
      <Halogen.SyncLoader color={color}/>,
      <Halogen.RotateLoader color={color}/>,
      //<Halogen.FadeLoader color={color}/>,
      //<Halogen.PacmanLoader color={color}/>,
      //<Halogen.SquareLoader color={color}/>,
      <Halogen.ScaleLoader color={color}/>,
      //<Halogen.SkewLoader color={color}/>,
      //<Halogen.MoonLoader color={color}/>,
      //<Halogen.RingLoader color={color}/>,
      //<Halogen.BounceLoader color={color}/>,
      //<Halogen.DotLoader color={color}/>
    ];
    const pickIndex = Math.floor(Math.random() * compArray.length);
    return compArray[pickIndex];
  }

  render(){
    var icon = this.randomLoader('#4DAF7C');
    return (
        <div>
            <div className="iconContainer">
                {icon}
            </div>
            
            <div className="loadingText">
                Loading
            </div>        
        </div>      
    );
  }
}

export default LoadingPage;
