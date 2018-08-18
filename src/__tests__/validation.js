import { validateEmail, validatePassword, validateLogin } from '../utils/validation';

it('passes on valid email', () => {
  const result = validateEmail('jeppe@jeppe.se');
  expect(result).toBe(true);
});

it('fails on invalid email', () => {
  const result = validateEmail('jeppe');
  expect(result).toBe(false);
});

it('validates password: 8 chars, 1 uppercase, 1 digit', () => {
  const result = validatePassword('Hejsan123');
  expect(result).toBe(true);
});

it('invalid password: missing digit', () => {
  const result = validatePassword('Hej123');
  expect(result).toBe(false);
});

it('invalid password: missing 1 uppercase', () => {
  const result = validatePassword('hejsan123');
  expect(result).toBe(false);
});

it('passes on valid email and password', () => {
  const result = validateLogin('jeppe@jeppe.se', 'Hejsan123');
  expect(result).toBe(true);
})

it('fails on invalid email and/or password', () => {
  const result = validateLogin('jeppe@jeppe.se', 'hejsan123');
  expect(result).toBe(false);
})
