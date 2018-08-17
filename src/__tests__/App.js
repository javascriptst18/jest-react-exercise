import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../components/App';

it('should render <App />', () => {
  const wrapper = shallow(<App user="" />);
  expect(wrapper.find('#email')).toBeTruthy();
});

it('should render <App /> with user', () => {
  const wrapper = mount(<App user="zero_cool" />);
  expect(wrapper.state().user).toBe('zero_cool');
});

it('call the internal method loginSuccessful', () => {

});

it('call the internal method logout', () => {

});

it('shows logged out state then shows logged in state on successful login', () => {

});
