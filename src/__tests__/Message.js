import React from 'react';
import { mount, shallow } from 'enzyme';
import Message from '../components/Message';

it('shows default message', () => {
  const wrapper = shallow(<Message message={{ type: '', body: ''}} />);
  expect(wrapper.find('p').hasClass('bg-blue-lightest')).toBeTruthy();
});

it('shows error message', () => {
  const message = {
    type: 'ERROR',
    body: 'Haha'
  }
  const wrapper = shallow(<Message message={message} />);
  // Varför är detta bättre?
  expect(wrapper.find('p').hasClass('bg-red-lightest')).toBeTruthy();
});

it('shows success message', () => {
  const message = {
    type: 'SUCCESS',
    body: 'Haha'
  }
  const wrapper = shallow(<Message message={message} />);
  // Varför är detta bättre?
  expect(wrapper.find('p').hasClass('bg-green-lightest')).toBeTruthy();
});

it('sets text', () => {
  const message = {
    type: 'SUCCESS',
    body: 'Haha'
  }
  const wrapper = shallow(<Message message={message} />);
  expect(wrapper.find('p').text()).toBe('Haha');
});


