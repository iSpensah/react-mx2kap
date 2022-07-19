import React from 'react';
import './style.css';
import Counter from './Counter';
import Employee from './Employee';
import Update from './Update';
import Food from './Food';
export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <Counter />
      <Employee />
      <Food />
      <Update />
    </div>
  );
}
