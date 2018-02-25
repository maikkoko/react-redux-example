import raf from './tempPolyfills' // eslint-disable-line no-unused-vars
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() })

// User chai-enzyme wrapper
chai.use(chaiEnzyme())

// Make Enzyme functions available in all test files without importing
global.shallow = shallow
global.render = render
global.mount = mount
global.sinon = sinon
global.expect = chai.expect

// Fail tests on any warning
console.error = message => {
  throw new Error(message)
}
