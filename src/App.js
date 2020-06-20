import React, { useState } from 'react';
import './App.css';
/**
 * useSelector gives u access to a specific state in the store
 * useDispatch gives u access to diifferent action
 */
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './action';

function App() {
  const [counterValue, setCounterValue] = useState('');
  // access counter state from the store
  const counter = useSelector(state => state.counter);
  // access actions
  const dispatch = useDispatch();
  // simple state change
  const editCounterValue = e => setCounterValue(e.target.value);

  return (
    <div className='App'>
      <p>Provide a number</p>
      <input type='number' value={counterValue} onChange={editCounterValue} />
      <div style={{ marginTop: 20 }}>
        {/* calling the 'increment' action, and passing argument to be use in the payload*/}
        <button
          onClick={() => {
            dispatch(increment(counterValue));
            setCounterValue('');
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            dispatch(decrement(counterValue));
            setCounterValue('');
          }}
        >
          Remove
        </button>
      </div>
      {/* using counter state value from the store*/}
      <h1>Counter : {counter}</h1>
    </div>
  );
}

export default App;
