import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../routes/Home'
import About from '../routes/About'

import { Navbar, Nav, NavItem } from 'react-bootstrap'

const App = () => (
  <div>
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">React-Redux-Example</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/about-us">About</Link>
        </NavItem>
      </Nav>
    </Navbar>
    <div className='container'>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </div>
  </div>
)

export default App