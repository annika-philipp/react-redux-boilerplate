import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

import App from '../client/components/App'

test('Test suite working', () => {
  expect(true).toBeTruthy
})

test('h1 text shows on App', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('h1').first().text()).toBe("It's the obligatory....")
  expect(wrapper.find('h1').last().text()).toBe('Hello kitty')
})
