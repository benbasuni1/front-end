import React, { Component } from 'react';
import Data from './data';

import Break from './Components/Break';
import Heading from './Components/Heading';
import ThreeTenets from './Components/ThreeTenets';
import Content from './Components/Content';

import './App.css';
import "./animate.min.css";

class App extends Component {
  render() {
    return (
      <div className="body">
        <Heading title="The 3 Tenets"/>
          <ThreeTenets tenets={Data.tenets}/>
        <Break />
        <Heading title="The Code"/>
          <Content data={Data.codes} />
        <Break />
        <Heading title="The Creed"/>
          <Content data={Data.creed} />
        <Break />
        <Heading title="The 16 Teachings"/>
          <Content data={Data.teachings} />
        <Break />
        <Heading title="The 21 Maxims"/>
          <Content data={Data.maxims} />
        <Break />
      </div>
    );
  }
}

export default App;
