import React, { Component } from 'react';
import Chapter from './Components/Chapter';
import data from './data';
import "./animate.min.css"
import Transition from 'react-animate-on-scroll';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Transition
          animateIn="fadeIn" 
          duration={4}
          offset={0}
        >
          <h1 className="title">道德經</h1>
        </Transition>
        <Chapter data={data.chapter1} title="Chapter 1"/>
        <Chapter data={data.chapter2} title="Chapter 2"/>
        <Chapter data={data.chapter3} title="Chapter 3"/>
        <Chapter data={data.chapter4} title="Chapter 4"/>
        <Chapter data={data.chapter5} title="Chapter 5"/>
        <Chapter data={data.chapter6} title="Chapter 6"/>
      </div>
    );
  }
}

export default App;
