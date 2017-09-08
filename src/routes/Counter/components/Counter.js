import React from 'react'

import './Counter.css'

export const Counter = props => (
  <div>
    <h2>Counter</h2>
    <p>count: {props.count}</p>

    <div className="button-row">
      <button
        type="button"
        onClick={props.increment}
        disabled={props.isIncrementing}
      >
        Increment
      </button>
      <button
        type="button"
        onClick={props.incrementAsync}
        disabled={props.isIncrementing}
      >
        Increment Async
      </button>
    </div>

    <div className="button-row">
      <button
        type="button"
        onClick={props.decrement}
        disabled={props.isDecrementing}
      >
        Decrement
      </button>
      <button
        type="button"
        onClick={props.decrementAsync}
        disabled={props.isDecrementing}
      >
        Decrement Async
      </button>
    </div>
    <br />
    <button type="button" onClick={() => props.changePage('/')}>
      Return to Home via Redux
    </button>
  </div>
)

export default Counter
