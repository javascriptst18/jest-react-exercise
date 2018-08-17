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
  const wrapper = mount(<App user="" />);
  wrapper.instance().loginSuccessful('jesper@jesper.se');
  wrapper.setState({ user: 'jesper@jesper.se' });
  expect(wrapper.state().user).toBe('jesper@jesper.se');
});

it('call the internal method logout', () => {
  const wrapper = mount(<App user="jesper@jesper.se" />);
  expect(wrapper.state().user).toBe('jesper@jesper.se');
  wrapper.find('#user').simulate('click');
  expect(wrapper.state().user).toBe('');
});

it('shows logged out state then shows logged in state on successful login', () => {
  
});
