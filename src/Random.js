import React, { useState } from 'react';
//React Hook
function Random() {
  const [num, generateRandomNum] = useState(function setRandomNumber() {
    return Math.floor(Math.random());
  });
  function handeClick(e) {
    generateRandomNum(Math.floor(Math.random() * 10));
  }
  return (
    <div>
            <h3>{num} </h3>
            <button onClick={handeClick}> Click </button>
          
    </div>
  );
}
export default Random;
