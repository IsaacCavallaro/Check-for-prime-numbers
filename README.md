# Link to codewars kata

[https://www.codewars.com/kata/53daa9e5af55c184db00025f](https://www.codewars.com/kata/53daa9e5af55c184db00025f)

- This is a breakdown of my solution to the above code kata.
- After completing the kata, I implemented some basic testing using jest.
- Click [here](https://github.com/IsaacCavallaro/Square-n-Sum/blob/main/squareNsum.test.js) for the tests code.

---

# Check for prime numbers:

- Create a function to check a non-negative input to see if it is a prime number.
- The function will take in a number and will return True if it is a prime number and False if it is not.
- A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.

---

**Examples:**

```
0 --> false
1 --> false
2 --> true
11 --> true
12 --> false
```

# My solution:

```jsx
function isPrime(n) {
  for(let i = 2; i < n; i++)
    if(n % i === 0) return false;
  return n > 1;
}
```

---

## Break down of code:

- Set `for loop` with three statements:

```jsx
for(let i = 2; i < n; i++)
```

- **Statement 1** declares variable `i` and sets it to 2:

```jsx
let i = 2
```

- **Statement 2** defines the condition for executing the code block:

    *while `i` is greater than n.* 

```jsx
i < n;
```

- **Statement 3** uses the increment operator (++) to add 1 to i  after the code block has been executed (every loop).

```jsx
i++
```

- Declare if statement with the condition:
    - If the remainder of n when divided by i equals 0, return false.

```jsx
n % i === 0
```

- Return all numbers greater than 1

```jsx
return n > 1;
```