import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { ConnectedRouter as Router } from 'react-router-redux'

class App extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired
  }

  render() {
    let { store, routes } = this.props
    return (
      <Provider store={store}>
        <Router history={store.history} children={routes} />
      </Provider>
    )
  }
}

export default App
