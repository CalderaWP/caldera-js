# Caldera Form Builder

Form admininstration and builder for Caldera (Forms).

## Testing

* Run Unit Tests - Jest.
    - `yarn tests`

* Run Storybooks
    - `yarn storybook`

## Other Commands

* Lint code
    - `yarn lint`
* Build Package
    - `yarn package`
    - The output is stored in the `dist` folder.
    
    
## Usage

### Import With webpack

`import {ComponentName}` from '@calderawp/builder';`

### Components

* `<FormsList>`
  * [Docs](./src/FormsList/README.md)
  * Searchable list of forms
  * `<FormListItem>`
    * Item in form list
* `<FormEditor>`
  * Form Editor. WIP
* `<EntryViewer />`
  * Form data viwer WIP
