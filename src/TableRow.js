import React, { Component } from 'react';

class TableRow extends React.Component {
  render() {
    return (
      <tr>
        <td> {this.props.EmployeeId}</td>
        <td> {this.props.EmpName}</td>
        <td> {this.props.Empcity}</td>
      </tr>
    );
  }
}
export default TableRow;
