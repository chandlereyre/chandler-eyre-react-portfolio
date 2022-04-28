import React, { Component } from 'react';
import moment from "moment";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Chandler Eyre's epic web portfolio</h1>
        <h2>Say whaaaat</h2>
        <h3>{moment().format('MMMM do YYYY')}</h3>
      </div>
    );
  }
}
