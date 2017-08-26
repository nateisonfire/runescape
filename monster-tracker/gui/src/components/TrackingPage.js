import React, { Component } from 'react';
import './TrackingPage.css';
import TrackingLog from './TrackingLog';

class TrackingPage extends Component {

  constructor(props) {
    super();
    this.state = {
        counter: 0,
        npcInfo: {
            id: 1,
            name: 'Man',
            dropTable: [
                {id: 557, item: 'Earth rune', price: 5, quantity: 4},
                {id: 554, item: 'Fire rune', price: 5, quantity: 6},
                {id: 558, item: 'Mind rune', price: 4, quantity: 9},
                {id: 562, item: 'Chaos rune', price: 101, quantity: 2},
                {id: 1139, item: 'Bronze med helm', price: 30, quantity: 1},
                {id: 1203, item: 'Iron dagger', price: 6, quantity: 1},
                {id: 882, item: 'Bronze arrow', price: 6, quantity: 7},
                {id: 1965, item: 'Cabbage', price: 58, quantity: 1}
            ],
            rareDropTable: [],
            alwaysDrops: [{item: 'Bones', price: 68, quantity: 1}]
        },
        logList: null,
        clickedItems: [],
        totalGP: 0
    }
  }

  onButtonClick(i){
    var records = this.state.clickedItems.slice();      
    // is the item already in the log?
    var location = records.findIndex(function(o){
      return o.id === i.id;
    });
    // if so, update the quantity
    if (location !== -1) {
      const newQuantity = records[location].quantity + i.quantity;
      const newRecord = Object.assign({}, records[location], {quantity: newQuantity});
      records[location] = newRecord;
    }else{ // else add the item to the log
      records.push(i);
    }

    // update the total GP earned
    const newTotal = this.state.totalGP + (i.price * i.quantity);
    // update the list
    const listItems = records.map((r) => 
        <li key={r.id}>{r.item} x {r.quantity} = {r.quantity * r.price}</li>
    );

    this.setState({
        logList: listItems,
        clickedItems: records,
        totalGP: newTotal
    });
  }

  displayButtons() {
    var buttons = [];
    this.state.npcInfo.dropTable.forEach(function(i) {
        var src = "https://rsbuddy.com/items/"+i.id+".png";
        var btn = <button className="button" key={i.id} onClick={() => this.onButtonClick(i)}><img src={src} alt={i.item} /></button>;
        buttons.push(btn);
    }, this);

    return (
        buttons
    );
  }

  render(){
    return (
      <div className="trackingPage">
        <div className="left">
          {this.displayButtons()}
          <div className="backButton">
            <button className="backButtonStyle" onClick={this.props.backClick}>Back</button>
          </div>
        </div>
        <div className="right">
          <TrackingLog log={this.state.logList} total={this.state.totalGP}/>
        </div>
      </div>
    );
  }
}

export default TrackingPage;
