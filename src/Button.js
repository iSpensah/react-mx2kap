import React, { Component } from 'react';

const Button = ({ action, label }) => (
  <button onClick={() => action()}>{label}</button>
);

export default Button;
