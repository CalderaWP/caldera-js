# Caldera JS

### Packages
* [@calderawp/components](./packages/components/README.md)
    - Status: Functional beta.
    - UI Components
* [@calderawp/forms](./packages/forms/README.md)
    - Status: Functional(ish) beta.
    - Forms
* [demo](./packages/demo/README.md)
    - Demo for components/ forms
* [@calderawp/server](./server/README.md)
    - Status: Not usefully functional yet.
    - Routers
    - Proxies
    - Services

### Using Mono Repo

* Add A Package To A Component
    - `yarn workspace @calderawp/components add react`
* Make publishable with lerna
    - Add to package.json of the package:
        ```json
        { 
          "publishConfig": {
              "access": "public"
          }
        }
            
      ```
    - [Lerna Publish Command](https://lernajs.io/#command-publish)
    - [Lerna Publish Command README](https://github.com/lerna/lerna/blob/master/commands/publish/README.md)
```    

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
* Test Server
    - `yarn test:server`
