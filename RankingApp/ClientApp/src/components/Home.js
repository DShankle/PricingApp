import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
        <div>
            <h1> Welcome to the Pricing App</h1>
            <p> Find the price of various things using this helpful app!</p>
        </div>
    );
  }
}
