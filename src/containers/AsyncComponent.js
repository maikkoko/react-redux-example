import React, { Component } from 'react'

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    static component = null
    state = {
      component: AsyncComponent.component
    }

    componentWillMount() {
      if (!this.state.component) {
        importComponent().then(module => {
          let component = module.__esModule ? module.default : module
          AsyncComponent.component = component
          this.setState({ component })
        })
      }
    }

    render() {
      const C = this.state.component

      return C ? <C {...this.props} /> : null
    }
  }

  return AsyncComponent
}
