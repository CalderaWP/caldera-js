# Caldera JS

### Packages
* [@calderawp/components](./packages/components/README.md)
    - UI Components
* [@calderawp/forms](./packages/forms/README.md)
    - Forms.
* [@calderawp/caldera-forms-pro](./packages/caldera-forms-pro/README.md)
    - The Caldera Forms Pro 2.0 web app
* [@calderawp/server](./server/README.md)
    - Routers
    - Proxies
    - Services

### Using Mono Repo

* Add A Package To A Component
    - `yarn workspace @calderawp/components add react`
    

### Development

#### Storybook
* Start Both Storybooks
    - `yarn test`
* Start Components Storybook
    - `yarn storybook:components`
* Start Forms Storybook
    - `yarn storybook:forms`

#### Testing
Testing tools:
* [Jest](https://jest.io) - Unit tests, assertions and test runner.
* [react-test-renderer](https://reactjs.org/docs/test-renderer.html) Basic React rendering for unit tests. Run by Jest.
* [Enzyme]() - More advanced React rendering for isolated DOM testing and other integration tests. Run by Jest.

* Run all tests of all packages
    - `yarn test`
* Test Components
    - `yarn test:components`
* Test Forms
    - `yarn test:forms`
* Test Caldera Forms Pro
    - `yarn test:forms`
* Test Server
    - `yarn test:server`
