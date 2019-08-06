# Caldera JS
This is the Caldera (Forms) 2.0 JavaScript framework.

This is not a WordPress plugin.

## Packages
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
    

## Development
Install for development
* git clone
    - `git clone `
* Install - no not use npm, use Yarn!
    - `yarn install`
    - Demo app assumes [Caldera Forms Local Development Server](https://github.com/CalderaWP/Caldera-Forms/blob/master/contributing/local-dev.md) is running.    

### Mock Server
* To start the mock data server:
  * `yarn start:mock-server`

* Endpoints:
  * `http://localhost:8080/stripe/plans.json` List plans
  * `http://localhost:8080/stripe/account.json` Account details
  * `http://localhost:8080/stripe/create-plan.json` create subscription plans

    
### Testing
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
* Test forms  once for CI
    - `yarn test:forms-ci`  
* Test components  once for CI
    - `yarn test:components-ci`  
### Storybook
* Start Both Storybooks
    - `yarn test`
* Start Components Storybook
    - `yarn storybook:components`
* Start Forms Storybook
    - `yarn storybook:forms`
    
### Linting
* Lint and fix fixable issues in forms and components
    - `yarn lint:fix`
* Lint  forms and components
    - `yarn lint`

## Using Mono Repo

* Add A Package To A Component
    - `yarn workspace @calderajs/components add react`
    - `yarn workspace @calderajs/forms add react`
    - `yarn workspace @calderajs/demo add react`
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
   
* Publish updates to all packages
    - `yarn release`


