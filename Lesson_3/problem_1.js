/*
Problem:
  input: phone number - string
    - will contain digits
    - may contain spaces, dash, dot, and parentheses - these should be ignored
  output: string of digits
    - output just the digits, not any of the special characters
    - if it's an 11 digit number and the first number is 1, output the last 10 digits
    - if it's a bad number, output '0000000000'
    - output them as a string

Rules:
  bad number:
    - fewer than 10 digits
    - 11 digits if the first digit is not a 1
    - more than 11 digits
  good number:
    - 10 digits
    - 11 digits if first digit is 1

Data Structure:
  - input is string, so leave as string to use Regex

Algorithm:
  - replace all special characters with empty string
  - test whether the resulting string matches a regex
      regex = /^1?\d{10}$/
    - if it's 11 digits, return the last 10
    - if it's 10 digits, return all of them
  - if it doesn't, return 10 zeros
*/

function cleanPhoneNumber(phoneNumber) {
  let stripped = phoneNumber.replace(/[ -.()]/g, '');

  let regex = /^1?\d{10}$/;

  if (regex.test(stripped)) {
    if (stripped.length === 11) {
      return stripped.slice(1);
    } else {
      return stripped;
    }
  } else {
    return '0000000000';
  }

}


console.log(cleanPhoneNumber('1234567890') === '1234567890');
console.log(cleanPhoneNumber('(123)456-7890') === '1234567890');
console.log(cleanPhoneNumber('(123) 456 7890') === '1234567890');
console.log(cleanPhoneNumber('123.456.7890') === '1234567890');
console.log(cleanPhoneNumber('11234567890') === '1234567890');
console.log(cleanPhoneNumber('1 (123)456-7890') === '1234567890');
console.log(cleanPhoneNumber('1-123-456-7890') === '1234567890');
console.log(cleanPhoneNumber('51234567890') === '0000000000');
console.log(cleanPhoneNumber('123456789678') === '0000000000');
console.log(cleanPhoneNumber('5(123)456-7890') === '0000000000');
console.log(cleanPhoneNumber('123456789') === '0000000000');
console.log(cleanPhoneNumber('123.456.7890') === '1234567890');