import React from 'react';
import './style.css';
import Counter from './Counter';
import Employee from './Employee';
import Update from './Update';
import Food from './Food';
import App4 from './App4';
import Count from './Count';
import Random from './Random';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <Counter />
      <Employee />
      <Food />
      <p>This is App4</p>
      <App4 />
      <Count />
      <p>Click for a random Number</p>
      <Random />
      <Update />
    </div>
  );
}
