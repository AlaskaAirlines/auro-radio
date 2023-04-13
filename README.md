# auro-radio

`<auro-radio>` is a [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) for the purpose of wrapping `<input type='radio'/>` elements with styling and behavior.

## Docs

All information regarding Project Setup, Technical Details, Tests and information regarding Auro Stateless Components can be found in the [docs](https://github.com/AlaskaAirlines/auro_docs/tree/master/src) project repository.

## UI development browser support

For the most up to date information on [UI development browser support](https://auro.alaskaair.com/support/browsersSupport).

## Install

[![Build Status](https://img.shields.io/github/actions/workflow/status/AlaskaAirlines/auro-radio/testPublish.yml?style=for-the-badge)](https://github.com/AlaskaAirlines/auro-radio/actions/workflows/testPublish.yml)
[![See it on NPM!](https://img.shields.io/npm/v/@alaskaairux/auro-radio?style=for-the-badge&color=orange)](https://www.npmjs.com/package/@alaskaairux/auro-radio)
[![License](https://img.shields.io/npm/l/@alaskaairux/auro-radio.svg?color=blue&style=for-the-badge)](https://www.apache.org/licenses/LICENSE-2.0)

```shell
$ npm i @alaskaairux/auro-radio
```

Installing as a direct, dev or peer dependency is up to the user installing the package. If you are unsure as to what type of dependency you should use, consider reading this [stack overflow](https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies) answer.

### Design Token CSS Custom Property dependency

The use of any Auro custom element has a dependency on the [Auro Design Tokens](https://github.com/AlaskaAirlines/OrionDesignTokens).

For additional details in regards to using Auro Design Tokens with components, please see [docs/TECH_DETAILS.md](https://github.com/AlaskaAirlines/auro_docs/blob/master/src/TECH_DETAILS.md)

### CSS Custom Property fallbacks

[CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) are [not supported](https://github.com/AlaskaAirlines/auro_docs/blob/master/src/CUSTOM_PROPERTIES.md) in older browsers. For this, fallback properties are pre-generated and included with the npm.

Any update to the Auro Design Tokens will be immediately reflected with browsers that support CSS custom properties, legacy browsers will require updated components with pre-generated fallback properties.

### Define dependency in project component

Defining the component dependency within each component that is using the `<auro-radio>` component.

```javascript
import "@alaskaairux/auro-radio";
import "@alaskaairux/auro-radio/dist/auro-radio-group";
```

**Reference component in HTML**

```html
<auro-radio-group>
  <auro-radio></auro-radio>
</auro-radio-group>
```

## Install bundled assets from CDN

In cases where the project is not able to process JS assets, there are pre-processed assets available for use. Two bundles are available -- `auro-radio__bundled.js` for modern browsers and `auro-radio__bundled.es5.js` for legacy browsers (including IE11).

For radio group support, be sure to include `auro-radio-group__bundled.js` for modern browsers and `auro-radio-group__bundled.es5.js` for legacy.

Since the legacy bundle includes many polyfills that are not needed by modern browsers, we recommend you load these bundles using [differential serving](https://philipwalton.com/articles/deploying-es2015-code-in-production-today/) so that the browser only loads the bundle it needs. To accomplish this, the script tag for the modern bundle should have `type="module"` and the script tag for the legacy bundle should have the `nomodule` attribute. See the example below.

**NOTE:** Be sure to replace `@latest` in the URL with the version of the asset you want. @latest is NOT aware of any MAJOR releases, use at your own risk.

```html
<link rel="stylesheet" href="https://unpkg.com/@alaskaairux/design-tokens@latest/dist/tokens/CSSCustomProperties.css" />
<link rel="stylesheet" href="https://unpkg.com/@alaskaairux/webcorestylesheets@latest/dist/bundled/essentials.css" />

<script src="https://unpkg.com/@alaskaairux/auro-radio@latest/dist/auro-radio__bundled.js" type="module"></script>
<script src="https://unpkg.com/@alaskaairux/auro-radio@latest/dist/auro-radio__bundled.es5.js" nomodule></script>

<script src="https://unpkg.com/@alaskaairux/auro-radio@latest/dist/auro-radio-group__bundled.js" type="module"></script>
<script src="https://unpkg.com/@alaskaairux/auro-radio@latest/dist/auro-radio-group__bundled.es5.js" nomodule></script>
```


## Development

In order to develop against this project, if you are not part of the core team, you will be required to fork the project prior to submitting a pull request.

Please be sure to review the [contribution guidelines](https://auro.alaskaair.com/getting-started/developers/contributing) for this project. Please make sure to **pay special attention** to the **conventional commits** section of the document.

### Start development environment

Once the project has been cloned to your local resource and you have installed all the dependencies you will need to open two different shell sessions. One is for the **npm tasks**, the second is to run the **server**.

```shell
// shell terminal one
$ npm run dev

// shell terminal two
$ npm run serve
```

Open [localhost:8000](http://localhost:8000/)

### Testing
Automated tests are required for every Auro component. See `.\test\auro-radio.test.js` for the tests for this component. Run `npm test` to run the tests and check code coverage. Tests must pass and meet a certain coverage threshold to commit. See [the testing documentation](https://github.com/AlaskaAirlines/auro_docs/blob/master/src/TESTS.md) for more details.
