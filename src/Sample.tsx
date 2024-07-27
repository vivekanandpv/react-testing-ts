import React, { useState } from 'react';

const Sample = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((v) => v + 1);
  };

  const decrement = () => {
    setCounter((v) => v - 1);
  };
  return (
    <>
      <h3>
        Counter: <span data-testid='counter-span'>{counter}</span>
      </h3>

      <button
        data-testid='btn-inc'
        className='btn btn-primary me-4'
        onClick={increment}
      >
        Increment
      </button>
      <button
        data-testid='btn-dec'
        className='btn btn-primary'
        onClick={decrement}
      >
        Decrement
      </button>
    </>
  );
};

export default Sample;
