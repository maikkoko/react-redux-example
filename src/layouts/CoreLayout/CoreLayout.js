import React from 'react'
import PropTypes from 'prop-types'

import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './CoreLayout.css'

export const CoreLayout = ({ children }) => (
  <div>
  
    <Navbar inverse>
      <Navbar.Header>
        <LinkContainer to='/'>
          <Navbar.Brand>
            React-Redux-Example
          </Navbar.Brand>
        </LinkContainer>
      </Navbar.Header>
      <Nav>
        <LinkContainer to='/'>
          <NavItem>Home</NavItem>
        </LinkContainer>
        <LinkContainer to='/about'>
          <NavItem>About</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar>
  
    <div className='container'>
      { children }
    </div>
  
  </div>
)

CoreLayout.propTypes = {
  children: PropTypes.node
}

export default CoreLayout

