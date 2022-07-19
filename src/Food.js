import React, { Component } from 'react';
import FoodTableRow from './FoodTableRow';

class Food extends React.Component {
  constructor() {
    super();
    this.state = {
      foods: [
        { FoodId: 123, FoodName: 'Hotdog', FoodClass: 'fastfood' },
        { FoodId: 124, FoodName: 'Bacon', FoodClass: 'Pork' },
        { FoodId: 125, FoodName: 'Apple', FoodClass: 'Fruits' },
        { FoodId: 126, FoodName: 'CauliFlower', FoodClass: 'Vegetable' },
        { FoodId: 127, FoodName: 'Cabbage', FoodClass: 'Vegetable' },
      ],
    };
  }
  render() {
    return (
      <table border="1">
        <tr>
          <th>FoodID</th>
          <th>FoodName</th>
          <th>FoodClass</th>
        </tr>
        <tbody>
          {this.state.foods.map((e) => (
            <FoodTableRow
              FoodId={e.FoodId}
              FoodName={e.FoodName}
              FoodClass={e.FoodClass}
            />
          ))}
        </tbody>
      </table>
    );
  }
} //class bracket
export default Food;
