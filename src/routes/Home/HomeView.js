import React from 'react'

import {
  PageHeader,
  ButtonToolbar,
  Button
} from 'react-bootstrap'

const Home = props => (
  <div>
    <PageHeader>Home</PageHeader>
    <p>Count: {props.count}</p>

    <ButtonToolbar>
      <Button
        bsStyle="primary"
        onClick={props.increment}
        disabled={props.isIncrementing}
      >
        Increment
      </Button>
      <Button
        onClick={props.incrementAsync}
        disabled={props.isIncrementing}
      >
        Increment Async
      </Button>
    </ButtonToolbar>
    <ButtonToolbar>
      <Button
        bsStyle="primary"
        onClick={props.decrement}
        disabled={props.isDecrementing}
      >
        Decrementing
      </Button>
      <Button
        onClick={props.decrementAsync}
        disabled={props.isDecrementing}
      >
        Decrement Async
      </Button>
    </ButtonToolbar>
    <br />
    <ButtonToolbar>
      <Button onClick={() => props.changePage('about-us')}>
        Go to about page via redux
      </Button>
    </ButtonToolbar>
  </div>
)

export default Home