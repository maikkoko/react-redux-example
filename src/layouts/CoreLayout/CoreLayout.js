import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import logo from './logo.svg'
import './CoreLayout.css'

export const CoreLayout = ({ children }) => (
  <div className="page">
    <div className="page-header">
      <img src={logo} className="page-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <div className="page-nav">
      <NavLink exact to="/" activeClassName="page-nav--active">
        Home
      </NavLink>
      <NavLink to="/counter" activeClassName="page-nav--active">
        Counter
      </NavLink>
      <NavLink to="/random-link">Random Link</NavLink>
    </div>
    <div className="page-content">{children}</div>
  </div>
)

CoreLayout.propTypes = {
  children: PropTypes.node
}

export default CoreLayout
