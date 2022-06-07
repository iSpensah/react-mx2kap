import React, { Component } from 'react';
class Update extends React.Component {
  constructor() {
    super();
    this.state = { num: 0 };
    this.UpdateNum = this.UpdateNum.bind(this);
    this.decreaseNum = this.decreaseNum.bind(this);
  }
  UpdateNum() {
    var n = this.state.num;
    if (n <= 10) {
      this.setState({ num: this.state.num + 2 });
    } else alert('Can not increase number any more');
  }
  decreaseNum() {
    this.setState({ num: this.state.num - 1 });
  }
  render() {
    return (
      <div>
        Number is <Content newNum={this.state.num} />
        <button onClick={this.UpdateNum}>Update Number</button>
        <button onClick={this.decreaseNum}>decreaseNumber</button>
      </div>
    );
  }
}
export default Update;

class Content extends React.Component {
  componentWillMount() {
    console.log('Component will Mount');
  }
  componentDidMount() {
    console.log('Component did Mount');
  }
  componentWillReceiveProps(newProps) {
    console.log('Component Will Receive Props');
  }
  shouldComponentUpdate(newProps, newState) {
    return true;
  }
  componentWillUpdate() {
    console.log('Component will update');
  }
  componentDidUpdate() {
    console.log('Component did update');
  }
  render() {
    return (
      <div>
        <h3>{this.props.newNum}</h3>
      </div>
    );
  }
}
