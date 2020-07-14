# Getting Started

## Vue Boilerplate
A fork of the boilerplate produced by Vue CLI 3, the root project folder consists public, src and script folders. 
Download Vue CLI 3 with global bridge
```bash
npm install -g vue-cli
npm install -g @vue/cli-init
```
Check the installed version of Vue CLI
```bash
vue --version
```
### Create a new project (multi module)
In order to create a new project with existing boilerplate, run below command
```bash
vue init e9-devops/vue-boilerplate .
```
### public
All the html files, favicons are stored at public level. If you have any static lottie or animation files, they can be stored in public folder too.
### src
src folder consists of all the source code related to the project which has been divided into following folders.
1. assets
2. mixins
3. models
4. plugins
5. scss
6. services
7. webapp
```assets``` : All the static files which can be served through the server are stored here. ex. images, videos etc.
```models```: model files consisting the schemas of entities.
```scss```: scss files with their mixins
```plugins```: All third party plugins should be imported in ```plugins/index.js```.
```services```: All model level services are stored under services folder. API Calls must be done via services.
```webapp```: This folder has the actual modules of the project including routes, components, stores etc.
![Folder Structure](/assets/img/vue2-folder.png)
### vue.config.js
All the webpack configurations must exist in this file. Boilerplate is well equipped with gzip compression and code splitting at build time. 
pages can have as many modules as project requires. Every object requires an entry point (```main.js```) from where app instance of Vue is initialised, a template with ```index.html``` & ```$el```. ```filename``` property is related to final build the cli generates in ```/dist``` folder
### Environment files
Boilerplate ships with three different env files
1. .env
2. .env.staging
3. .env.production
Make sure to supply relevant API keys and endpoints depending on the environment.
### Commands
1. `npm run server` : runs the development server
2. `npm run build` : builds the production distribution
3. `npm run staging` : builds the staging distribution
4. `npm run lint` : runs the linter and returns errors, doesn't fix it
5. `npm run lint-fix` : runs the linter and automatically fix the fixable errors
6. `npm run deploy:prod` : deploys the dist folder to production environment
7. `npm run deploy:staging` : deploys the dist folder to staging environment
8. `npm run changelog`: generates the changelog based on git tags and package.json version. [Check for more information](https://openbase.io/js/conventional-changelog-cli)
9. `npm run postpublish`: commits the changelog with ci skip message. Add version tag to the commit before pushing.
:::tip
Make sure to keep login page as it is, if login is a separate page. Keeping login separate adds an abstraction layer on the original part of the app and increases the loading time of the login page.
:::

## Vue Components
Via npm
`npm install --save @e9ine/vue_components`

### Setup
Import the components you’d like to use in your local component. Then define the components in a components option:

```vue
import {ComponentA} from '@e9ine/vue_components'

export default {
  components: {
    ComponentA
  },
  // ...
}
```

Refer [Theming Options](/theming) for the available options to import the scss files.

