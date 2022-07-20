import React, { Component } from 'react';

class Pizza extends React.Component {
  constructor() {
    super();
    this.state = { Slices: 8, Food: 'Pizza' };
  }
  render() {
    return(
    
    <div>
      {this.state.Slices}
      
      </div>
      
      ); 
  }
}
export default Pizza;
