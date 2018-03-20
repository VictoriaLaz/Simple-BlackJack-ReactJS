import React, { Component } from 'react';
import Table from './components/table/table';


class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Blackjack</p>
        <main>
          <Table/>
        </main>
      </div>
    );
  }
}

export default App;
