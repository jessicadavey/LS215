# How to compare version numbers
```
0.1 < 1 = 1.0 < 1.1.3 < 1.1.4 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37
```
Digits are separated by dots
Start with the left-most digit
  0 < 1, 1 < 13, etc
If they're the same, move one digit to the right and compare
  if they're the same, move another digit to the right until
    1. digits are different 
      1.1.3 < 1.1.4
    2. one number has a digit in that position and the other doesn't
      1. if the existing digit is a 0, they're equal
        1 == 1.0
      2. otherwise the number with a digit in that location is greater
        1.1 < 1.1.2 (I'm assuming here)