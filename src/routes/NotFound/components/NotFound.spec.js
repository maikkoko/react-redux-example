import React from 'react'
import NotFound from './NotFound'

it('should render a special error page', () => {
  expect(shallow(<NotFound />)).to.contain.className('not-found')
})
