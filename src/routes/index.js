import React from 'react';
import { Route } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

import Home from './Home'
import About from './About'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './index.css'

import { Navbar, Nav, NavItem } from 'react-bootstrap'

/*
 * Routes
 * window.location caters to relative pathnames
 * i.e. when deployed to github pages
 */
const HOME_ROUTE = resolvePathname("/")
const ABOUT_ROUTE = resolvePathname("/about-us")

function resolvePathname (url) {
  let pathname = window.location.pathname === '/' ? '/' : window.location.pathname
  return url === pathname ? pathname : pathname + url
} 

const App = () => (
  <div>
    
    <AppNav />

    <div className='container'>
      <Route exact path={HOME_ROUTE} component={Home} />
      <Route exact path={ABOUT_ROUTE} component={About} />
    </div>
  
  </div>
)

export default App

const AppNav = () => (
  <Navbar inverse>
    <Navbar.Header>
      <LinkContainer to={HOME_ROUTE}>
        <Navbar.Brand>
          React-Redux-Example
        </Navbar.Brand>
      </LinkContainer>
    </Navbar.Header>
    <Nav>
      <LinkContainer to={HOME_ROUTE}>
        <NavItem>Home</NavItem>
      </LinkContainer>
      <LinkContainer to={ABOUT_ROUTE}>
        <NavItem>About</NavItem>
      </LinkContainer>
    </Nav>
  </Navbar>
)