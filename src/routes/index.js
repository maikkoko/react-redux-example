import React from 'react';
import { Route } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import resolvePathname from 'resolve-pathname'

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
let pathname = window.location.pathname === '/' ? '/' : window.location.pathname + '/'
const HOME_ROUTE = resolvePathname("/", pathname)
const ABOUT_ROUTE = resolvePathname("/about-us", pathname)

console.log(HOME_ROUTE)
console.log(ABOUT_ROUTE)

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