import React, { Component } from 'react';

const Greet = (props) => {
  // this is a function componnent just written in lambada expression
  console.log(props);
  return (
    <div>
      <h1>
        Hello {props.name} in {props.dept}
      </h1>
      {props.children}
    </div>
  );
};
export default Greet;
