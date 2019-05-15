import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Props from './components/props'
import DropDown from './components/dropDown';

class App extends Component {
  render() {
    return (
      <div className="App">
       {/* <Props /> */}
       <DropDown />
      </div>
    );
  }
}

export default App;
