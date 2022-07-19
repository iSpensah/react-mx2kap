import React, { useState } from 'react';
//React Hook
function CountApp() {
  const [count, setCount] = useState(0);
  return (
    <div>
            <h3>You clicked {count} times</h3>
            
      <button onClick={() => setCount(count + 1)}>
                Click here to increment count       
      </button>
          
    </div>
  );
}
export default CountApp;
