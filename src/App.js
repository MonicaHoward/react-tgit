import React, { Component } from 'react';
import './App.css';
import shows from './shows';

import Show from './Show';

class App extends Component {
  render() {
    return (
      <div>
          <Show show={shows[1]}/>
      </div>
    );
  }
}

export default App;
