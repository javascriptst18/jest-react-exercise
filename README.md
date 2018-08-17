# jest-react-exercise

>Example app built with [`create-react-app`](https://github.com/facebookincubator/create-react-app) for integration and snapshot testing.

The project is already set up with all packages to test react components: [**`enzyme`**](http://airbnb.io/enzyme/docs/api/), `enzyme-adapter-react-16`, `react-test-renderer` and `enzyme-to-json` for snapshot testing. You can read more about setting it up here: [**Running test @ create-react-app**](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)

## Documentation for enzyme

* https://airbnb.io/enzyme/docs/api/


## Installation

_with npm_
```bash
git clone https://github.com/javascriptst18/jest-react-exercise.git
cd jest-react-exercise
npm install
```
_with yarn_
```bash
git clone https://github.com/javascriptst18/jest-react-exercise.git
cd jest-react-exercise
yarn
```

## Running tests

Project has a few test already that are mostly integration tests and [`snapshot`](https://facebook.github.io/jest/docs/en/snapshot-testing.html) tests. All tests should pass when you run the test command.

```bash
yarn test
```
```bash
npm test
```

### With coverage

```bash
yarn test --coverage
```

```bash
npm run test -- --coverage
```