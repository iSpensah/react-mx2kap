import React, { useState } from 'react';
//React Hook
function App4() {
  const [name, setName] = useState('');
  return (
    <div>
            
      <form>
                <label>Name</label>
                
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
                <h4> This is the H4: {name}</h4>
              
      </form>
          
    </div>
  );
}
export default App4;
