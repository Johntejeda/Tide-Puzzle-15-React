import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
  super(props);

  this.state = {
    puzzle:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,false],
  };
}
displayPuzzle() {
    const {puzzle} = this.state;

    return (
      <div className='puzzle'>
        {puzzle.map((square, i) =>
          <div key={i} className={this.getSquareClassName(square)} onClick={() => this.shift(i)}>
            {!!square ? square : 'empty'}
          </div>
        )}
      </div>
    );
  }
  getSquareClassName(value) {
  if(!value){
    return 'puzzle--square-empty';
  }

  return value % 2 === 0 ? 'puzzle--square-pair' : 'puzzle--square-odd'
}

  render() {
  return (
   <div className='container'>
      <div className='App'>
        {this.displayPuzzle()}

    </div>
      </div>
  );
}
}

export default App;
