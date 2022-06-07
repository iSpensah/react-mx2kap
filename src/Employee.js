import React, { Component } from 'react';
import TableRow from './TableRow';

class Employee extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: [
        { EmployeeId: 123, EmpName: 'Swati', Empcity: 'Sanjuan' },
        { EmployeeId: 123, EmpName: 'Swati', Empcity: 'Miami' },
        { EmployeeId: 123, EmpName: 'Swati', Empcity: 'Phoenix' },
        { EmployeeId: 123, EmpName: 'Swati', Empcity: 'N-York' },
        { EmployeeId: 123, EmpName: 'Swati', Empcity: 'Newsburgh' },
      ],
    };
  }
  render() {
    return (
      <table border="1">
        <tr>
          <th>EmployeeId</th>
          <th>EmpName</th>
        </tr>
        <tbody>
          {this.state.employees.map((e) => (
            <TableRow
              EmployeeId={e.EmployeeId}
              EmpName={e.EmpName}
              Empcity={e.Empcity}
            />
          ))}
        </tbody>
      </table>
    );
  }
}
export default Employee;
