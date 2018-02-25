import React from 'react'
import Home from './Home'

let wrapper

beforeAll(() => {
  wrapper = shallow(<Home />)
})

it('should render home page', () => {
  expect(wrapper).to.contain.className('home')
})
