import React, { Component } from 'react';
import {Jumbotron, Grid, Button} from 'react-bootstrap';
import SearchForm from './components/SearchForm';
import Results from './components/Results';

class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Grid>
            <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
          </Grid>
          <p>
            <Button bsStyle="primary">Learn more</Button>
          </p>
        </Jumbotron>
        <SearchForm />
        <Results />
      </div>
    );
  }
}

export default App;
