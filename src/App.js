import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
  super(props);

  this.state = {
    puzzle:[],
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
