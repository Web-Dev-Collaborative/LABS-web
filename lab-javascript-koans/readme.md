

# LAB | JS Koans

## Koans

![](https://i.imgur.com/9Ug9NBn.png)

```
Two monks were arguing on top of a hill about a big
flag at the top of a temple. One monk reflected:

> "The flag is moving"

The other thought for a while and said:

> "The wind is moving.".

The sixth patriarch happened to be passing by.

He told them:

> "Not the wind, not the flag; The mind is moving."
```

<br>

### What are the Koans?

[Koans](https://en.wikipedia.org/wiki/K%C5%8Dan) (公案) originate from Zen Buddhism, and are paradoxical riddles or stories used to test "students" on their path to enlightenment. They are designed to provoke thought or doubt in the student's mind. We are here to learn to code, so... what are the Koans?

The Koans are a series of assertions you must solve to understand how a programming language works. This is the first step to become a better developer. The Koans become increasingly more difficult as you continue, so don't feel discouraged as you move forward through them.

There are Koans for all the programming languages. We will work with JavaScript Koans. The mechanism is the following:

- You get an assertion that is not passing a **test**.
- You have to give the test the correct expected result to pass it.

We are going to test the code assertions through Jest. We have introduced two new concepts here: tests and [Jest](https://jestjs.io/). Let's do a brief introduction to both of them.

<br>

## Testing

When we are coding, we have to be sure that our code is working as we expect. More than that, when we update our existing code, we have to be 100% sure that our old code is still working. As our website becomes larger, it becomes more difficult to check that all our features are working as we expect. How can we automatize this process? The answer is with **testing**.

<br>

### Introduction to testing

Testing allows us to check if the full set of features we have build is working as we expect. Sometimes you can create new features that override or damage the old ones. We avoid this with testing.

For now, you have enough with this brief introduction. We will learn testing in depth later on the course.

<br>

### Anatomy of a test

The syntax to create a test depends on the framework we are using. So we will explain the basic anatomy of a test with [pseudocode](https://en.wikipedia.org/wiki/Pseudocode).

Given a function with some parameters, we expect to get a result. If the result is what we are expecting, the test will pass. If we get an unexpected result, the test will fail. The framework will show the tests that are passing in green, and the tests that are failing in red.

Let's suppose we have the following function:

```javascript
function add(num1, num2) {
  // ...
}
```

If we pass as parameters to the `add` function the numbers 1 and 2, we should get a 3 as a result. So we are calling the `add` function with two numbers, and we expect from the function to return us the sum of those numbers.

If we get 3 as a result, the test will pass. If we get any other result, the test will fail. In pseudo code, it would be something like this:

```
given the parameters 1 and 2 to the add function, we expect to get 3 as a result
```

This is the anatomy of a test. We have the knowledge to understand what is a test and how it works. Now we will introduce you to a JavaScript framework to test our application.

<br>

## Jest

[Jest](https://jestjs.io/) is a JavaScript testing framework used to test JavaScript code. If you take a look at the documentation, you will see that it has many options to test our code. In this lab, we will work with [`expects`](https://jestjs.io/docs/expect) and [`matchers`](https://jestjs.io/docs/using-matchers).

<br>

### Describe, it, expect and matchers

To understand better what are the parts of the test in Jest, we will walk through an example. This is the first test we will find in our Koans:

```javascript
describe('the JavaScript language', () => {
  describe('has different types and operators', () => {
    it('considers numbers to be equal to their string representation', () => {
      expect(1 == '1').toBeTruthy();
      expect(1 != '1').toBeFalsy();
    });
  });
});
```

We will go through each different part of the test to explain all of them:

<br>

#### describe

It's used to group different tests on our code. This is very helpful when we see the results of the tests. In the code above, we have two different describes:

- The first one will group **all** our tests. It has a description indicating that we are going to test the JavaScript language.
- The second one indicates to us that we will test the different types and operators that JavaScript has.

As you can see, those are just information strings. When we execute our tests, they appear in the page grouping the different tests we have. This is very helpful when we have a lot of tests to identify where is a test that is not passing.

#### it

It receives a `string` that indicates what we are testing. It has to be a clear description of what we are going to do. In our example, we are testing that JavaScript considers the numbers to be equal to their string representation.

#### expect

What we are expecting in the test. This function contains the expression we want to test. This expression has to coincide with the matcher of the test. If they agree, the test will pass. If they disagree, the test will fail.

#### matcher

The matchers are going to determine if a test will pass or not. The expression in the expect has to agree with the matcher. In our example, we are testing that JavaScript considers the numbers to be equal to their string representation. The matcher we selected is `.toBeTruthy()`.

So, the test `expect(1 == "1").toBeTruthy()` will pass. There is a huge list of matchers on testing. We don't have to know all of them for the exercise. We will work on testing in another lesson. The matchers we will use here are:

- `.toBeTruthy()` and `.toBeFalsy()`. We expect the expression to be truthy or falsy
- `.toEqual()`. We expect the expression to be equal than the value passed as a parameter, and it has also to be the same type: i.e. `expect(1).toBe(1)`
- `.toBe()`. We expect the expression to be equal than the value passed as a parameter, but not necessarily the same type: i.e. `expect(1).toBe("1")`

We will see there are many matchers we can use. Right now, we just need the ones described above to do the Koans.

<br>

## Exercise

### Requirements

- Fork this repo
- Clone this repo
- Visit the "Actions" tab in your fork, and enable workflows.

<br>

### Submission

Upon completion, run the following commands:

```bash
$ git add .
$ git commit -m "done"
$ git push origin master
```

Create Pull Request so your TAs can check up your work.

<br>

### Instructions

We need to execute our tests. After you forked and cloned this repo, open your terminal, change directories into the root of the lab, and run `npm install` to install the test runner.
Next, you can run the `npm run test:watch` command to run automated tests. Open the resulting `lab-solution.html` file with the "Live Server" VSCode extension to see the test results.

In the beginning, you will see all the tests in green. This is because only the tests that are passing are un-commented. The tests we have to implement are commented out.

<br>

All the tests are located inside the `tests` folder. Open the `koans.spec.js` file and uncomment the following line:
⠀

```javascript
it("surprises me, NaN is not comparable with NaN", () => { {
  expect(5 / "a").toEqual(5 / "a");
  //expect(typeof(NaN)).toEqual();
  expect(isNaN(5 / "a")).toBeTruthy();
});
```

<br>
⠀
When we uncomment the line and save the file, tests will refresh and we will see something like that:

![](https://education-team-2020.s3-eu-west-1.amazonaws.com/web-dev/labs/tests-passed-failed.png)
⠀
<br>

**The main goal is not to finish all the tests. We want you to understand why each test is failing and how does JavaScript work in specific scopes.**

To do that, the correct workflow is the one used on [TDD](https://en.wikipedia.org/wiki/Test-driven_development):

- Uncomment the test
- Refresh the page to see that the un-commented test is failing
- Change the code to pass the test
- Refresh the page to see that the test is passing

⠀
This process has to be done for each test. **Do not uncomment all the tests and launch the app. It will be more difficult for you to see if your code is passing the tests.**

As we said, this is the first step to become a better developer.

Good luck to all of you and happy coding. :heart:
