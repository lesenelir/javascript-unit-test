# javascript-unit-test
my first unit test in javascript by reading the article

The article: [how-to-write-unit-test-in-javascript](https://snyk.io/blog/how-to-write-unit-test-in-javascript/)

---

> Uint test ensure the each of the small functions to protect the whole project

## Theoretical knowledge

#### Program error

- The edge-cases

- Invalid inputs

- Potential harmful inputs


#### why use unit test?

- Verifying functionality: unit test can ensure the code does the right thing, for example unit test a function.

- Preventing code regression: Problems that may arise from future refactoring of code, using unit tests to ensure which small modules are correct.

#### Writing unit tests key points

> Using a unit test framework enables us to quickly write and automate our tests and integrate them into our development and deployment processes. 

- Keep unint tests short and simple

- Consider both positive and negative test cases
  - negative test
  - positive test

- Break apart long and complex functions 

- Avoid network and database conections
> large functions that a lot of logic are diffcult to test, so you should split it into smaller functions for individual testing

## How to code unit tests

package: [Mocha Framework](https://github.com/mochajs/mocha) -- one of the most popular for unit testing

**Setps**

- Write your src code

- Write your unit tests
  - using `describe()` function to group unit tests into sets
  - using `it()` function to define a unit test

- `npm test`

## Notes
- Unit tests can help eliminate bugs early and keep projects more manageable, even as they become larger and more complex

- When Refactor and optimize the code, unit tests can ensure the every small function is behaving correctly

