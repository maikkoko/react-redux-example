import React from 'react'
import CoreLayout from './index'

let wrapper
const mockChild = <div className=".mock-child" />

beforeAll(() => {
  wrapper = shallow(<CoreLayout>{mockChild}</CoreLayout>)
})

it('should render a div with className `page`', () => {
  expect(wrapper).to.have.className('page')
})

it('should have a header content', () => {
  expect(wrapper.find('.page-header')).to.have.length(1)
})

it('should render a navigation div', () => {
  expect(wrapper.find('.page-nav')).to.have.length(1)
})

it('should render its children inside `.page-content`', () => {
  const content = wrapper.find('.page-content')

  expect(content).to.have.length(1)
  expect(content).to.contain(mockChild)
})
