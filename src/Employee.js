import React, { Component } from 'react';
import TableRow from './TableRow';

class Employee extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: [
        { EmployeeId: 123, EmpName: 'Swati', Empcity: 'Sanjuan' },
        { EmployeeId: 124, EmpName: 'Mahesh', Empcity: 'Miami' },
        { EmployeeId: 125, EmpName: 'Renejay', Empcity: 'Phoenix' },
        { EmployeeId: 126, EmpName: 'Joems', Empcity: 'N-York' },
        { EmployeeId: 127, EmpName: 'Justin', Empcity: 'Newsburgh' },
      ],
    };
  }
  render() {
    return (
      <table border="1">
        <tr>
          <th>EmployeeId</th>
          <th>EmpName</th>
          <th>EmpCIty</th>
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
