import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../store/counter'
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

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: (location) => push(location)
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)