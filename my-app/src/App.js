import React, { Component } from 'react';
import DogForm from './DogForm';
import AllDogs from './AllDogs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DogForm />
        <AllDogs />
      </div>
    );
  }
}

export default App;
