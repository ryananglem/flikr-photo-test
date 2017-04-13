import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
    render() {
            return (
              <div className="App">
                  <h1>
                      Flikr Feed Example
                  </h1>
                  { this.props.children }
              </div>
            );
  }
}
export default connect()(App);
