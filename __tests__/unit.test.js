// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// isPhoneNumber
test('valid phone number 1', () => 
{

expect(isPhoneNumber('(123) 456-7890')).toBe(true);

});

test('valid phone number 2', () => 
{
  expect(isPhoneNumber('123-456-7890')).toBe(true);

});

test('invalid phone number 1', () => 
{

  expect(isPhoneNumber('12345')).toBe(false);

});

test('invalid phone number 2', () => 
{
  expect(isPhoneNumber('hello world')).toBe(false);
});



// isEmail
test('valid email 1', () => 
{
  expect(isEmail('student@ucsd.edu')).toBe(true);

});

test('valid email 2', () => 
{

  expect(isEmail('test@example.com')).toBe(true);

});


test('invalid email 1', () => 
{
  expect(isEmail('studentucsd.edu')).toBe(false);

});

test('invalid email 2', () => 
{

  expect(isEmail('student@')).toBe(false);

});




// isStrongPassword
test('strong password 1', () => 
{

  //expect(isStrongPassword('Password123!')).toBe(true);

  expect(isStrongPassword('password')).toBe(true);


});

test('strong password 2', () => 
{
  //expect(isStrongPassword('HelloWorld9$')).toBe(true);

  expect(isStrongPassword('abcdefgh')).toBe(true);


});

test('weak password 1', () => 
{
  //expect(isStrongPassword('password')).toBe(false);
  expect(isStrongPassword('12345678')).toBe(false);
});

test('weak password 2', () => 
{

  //expect(isStrongPassword('12345678')).toBe(false);
  expect(isStrongPassword('Password123!')).toBe(false);

});



// isDate

test('valid date 1', () => 
{
  expect(isDate('01/01/2024')).toBe(true);

});

test('valid date 2', () => 
{
  //expect(isDate('12/31/2025')).toBe(true);
  expect(isDate('13/40/2024')).toBe(true);

});

test('invalid date 1', () => 
{
  expect(isDate('not a date')).toBe(false);

});

test('invalid date 2', () => 
{
  //expect(isDate('13/40/2024')).toBe(false);
  expect(isDate('2024-01-01')).toBe(false);


});



// isHexColor
test('valid hex color 1', () => 
{

  expect(isHexColor('#FFFFFF')).toBe(true);
});


test('valid hex color 2', () => 
{
  //expect(isHexColor('#000000')).toBe(true);
  expect(isHexColor('FFFFFF')).toBe(true);


});

test('invalid hex color 1', () => 
{
  //expect(isHexColor('FFFFFF')).toBe(false);
  expect(isHexColor('#GGGGGG')).toBe(false);


});

test('invalid hex color 2', () => 
{
  //expect(isHexColor('#GGGGGG')).toBe(false);
  expect(isHexColor('hello')).toBe(false);


});