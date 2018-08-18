import * as localStorageUtils from '../utils/localStorage';

beforeEach(() =>{
  localStorage.clear();
});

afterEach(() =>{
  localStorage.clear();
});

it('should get the user from localStorage', () => {
  localStorage.setItem('user', 'jeppe@jeppe.com');
  const result = localStorageUtils.getUserFromLocalStorage();
  expect(result).toBe('jeppe@jeppe.com');
});

it('should get empty user from localStorage', () => {
  const result = localStorageUtils.getUserFromLocalStorage();
  expect(result).toBe('');
});

it('should save user to localStorage', () => {
  localStorageUtils.saveUserToLocalStorage('jeppe@jeppe.com')
  const result = localStorage.getItem('user');
  expect(result).toBe('jeppe@jeppe.com');
});

it('should remove user from localStorage', () => {
  localStorageUtils.removeUserFromLocalStorage();
  const result = localStorage.getItem('user');
  expect(result).not.toBeDefined();
});

