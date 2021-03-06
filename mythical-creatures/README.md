# Mythical Creatures

## Installation Steps

Before you can work on or run any of these tests, you need to make sure you install the dependencies. The directions are at the [root-level of this repository](https://github.com/turingschool-examples/javascript-foundations).

### Running the Tests

In your terminal, change into the `mythical-creatures` directory, and run the command `npm test mythical-creatures/test/unicorn-test.js`. To run other tests, just replace the creature name.

Most of the tests are skipped. When you see `it('should be a function', () => {` in a test, it means that test has been skipped. They are skipped for a good reason - that way, when you run the test suite for the first time, you don't see tons of errors screaming at you in the terminal.

Unskip each test, one at a time in order, so you can concentrate on making one test pass. Unskip the test by deleting the `.skip` from the test's first line so it should look more like `it('should be a function', () => {`. Run the test to see what kind of error you are getting, and then implement the code to make the test pass!

### Video Tutorial!

[Here is a video](https://youtu.be/wfrwMYn2BCg) that walks through the setup and first mythical creature.

### Creature Order

* `unicorn`
* `vampire`
* `dragon`
* `hobbit`
* `pirate`
* `magician`
* `medusa`
* `werewolf`
* `centaur`
* `direwolf`
* `fairy`
* `ogre`
* `sphinx`

### Extra Challenge: Imagine Two Creatures

Can you add two new creatures to the repository? How about a Hydra? Add unit
tests exercising some of the following concepts:

* Initializing constructor with data
* Using methods to change the internal state of an instance
* Using methods to query the internal state of an instance






