import React, { useReducer } from 'react';
import { Button } from 'react-bootstrap';

function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div className="text-center">
      <h1>Counter: {state.count}</h1>
      <Button variant="success" className="m-2" onClick={() => dispatch({ type: 'INCREMENT' })}>+</Button>
      <Button variant="danger" className="m-2" onClick={() => dispatch({ type: 'DECREMENT' })}>-</Button>
      <Button variant="secondary" className="m-2" onClick={() => dispatch({ type: 'RESET' })}>Reset</Button>
    </div>
  );
}

export default Counter;