import React, { useEffect } from 'react';
const Component = () => {
  useEffect(() => {
    return () => {
      console.log(
        'Behavior right before the component is removed from the DOM.'
      );
    };
  }, []);
  return <h1>Hello World</h1>;
};

export default Hook;
