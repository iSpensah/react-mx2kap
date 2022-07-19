import React, { Component } from 'react';

class FoodTableRow extends React.Component {
  render() {
    return (
      <tr>
        <td> {this.props.FoodId}</td>
        <td> {this.props.FoodName}</td>
        <td> {this.props.FoodClass}</td>
      </tr>
    );
  }
}
export default FoodTableRow;
