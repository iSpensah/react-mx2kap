//import './person.css';     //THIS IS THE WAY of adding css to your component
import React, { Component } from 'react';
import Button from './Button';
class Pizza extends React.Component {
  constructor() {
    super();
    this.state = { slices: 8, Food: 'Pizza' };
    this.eatSlice = this.eatSlice.bind(this);
    this.buySlice = this.buySlice.bind(this);
  }

  buySlice() {
    const totalSlices = this.state.slices + 1;
    this.setState({
      slices: totalSlices,
    });
  }

  eatSlice() {
    const totalSlices = this.state.slices - 1;
    this.setState({
      slices: totalSlices,
    });
  }

  render() {
    return (
      <div>
        <p> Pizza number of slices is {this.state.slices}</p>
        <Button action={this.eatSlice} label="Eat a slice" />
      <Button action={this.buySlice} label="Buy a slice" />
      </div>
    );
  }
}
export default Pizza;
