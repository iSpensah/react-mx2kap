import './person.css'; //THIS IS THE WAY of adding css to your component
import React, { Component } from 'react';
import Button from './Button';
class Pizza extends React.Component {
  constructor() {
    super();
    this.state = { slices: 8, Food: 'Pizza' };
    this.state;
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

  changeState() {
    this.setState({ Food: 'HamBurger' });
  }

  render() {
    return (
      <div>
        <Button action={this.eatSlice} label="Eat a slice" />
        <p>
          {this.state.Food} number of slices is {this.state.slices}
        </p>
        <Button action={this.buySlice} label="Buy a slice" />
        <Button onchange={() => this.state.changeState} />
      </div>
    );
  }
}
export default Pizza;
