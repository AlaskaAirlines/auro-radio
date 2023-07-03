<!--
The demo.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/demo.md`
-->

# Radio

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./description.md) -->
<!-- The below content is automatically added from ./description.md -->
`<auro-radio>` is a [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) that is rendered as a small circle, which is filled or highlighted when selected. Only one `<auro-radio>` component in a given `<auro-radio-group>` can be selected at the same time.
<!-- AURO-GENERATED-CONTENT:END -->

## auro-radio use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./useCases.md) -->
<!-- The below content is automatically added from ./useCases.md -->
The auro-radio component is designed to be a single component for the use of creating an input type radio with an associated label that meets all use case and accessibility standards.
<!-- AURO-GENERATED-CONTENT:END -->

## Example(s)

### Default

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
  <auro-radio-group>
    <span slot="legend">Form label goes here</span>
    <auro-radio id="radio1" label="Yes" name="radioDemo" value="yes"></auro-radio>
    <auro-radio id="radio2" label="No" name="radioDemo" value="no"></auro-radio>
    <auro-radio id="radio3" label="Maybe" name="radioDemo" value="maybe"></auro-radio>
  </auro-radio-group>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

```html
<auro-radio-group>
  <span slot="legend">Form label goes here</span>
  <auro-radio id="radio1" label="Yes" name="radioDemo" value="yes"></auro-radio>
  <auro-radio id="radio2" label="No" name="radioDemo" value="no"></auro-radio>
  <auro-radio id="radio3" label="Maybe" name="radioDemo" value="maybe"></auro-radio>
</auro-radio-group>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Disabled

Use the `disabled` attribute to disable singular `auro-radio` elements or the entire `auro-radio-group`.

#### Group

The `disabled` attribute used to disable the entire `auro-radio-group`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/disabledGroup.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/disabledGroup.html -->
  <auro-radio-group disabled>
    <span slot="legend">Form label goes here</span>
    <auro-radio id="radio7" label="Yes" name="radioDemo" value="yes"></auro-radio>
    <auro-radio id="radio8" label="No" name="radioDemo" value="no"></auro-radio>
    <auro-radio id="radio9" label="Maybe" name="radioDemo" value="maybe"></auro-radio>
  </auro-radio-group>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/disabledGroup.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/disabledGroup.html -->

```html
<auro-radio-group disabled>
  <span slot="legend">Form label goes here</span>
  <auro-radio id="radio7" label="Yes" name="radioDemo" value="yes"></auro-radio>
  <auro-radio id="radio8" label="No" name="radioDemo" value="no"></auro-radio>
  <auro-radio id="radio9" label="Maybe" name="radioDemo" value="maybe"></auro-radio>
</auro-radio-group>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Single

The `disabled` attribute used to disable a single `auro-radio` element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/disabled.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/disabled.html -->
  <auro-radio-group>
    <span slot="legend">Form label goes here</span>
    <auro-radio id="radio4" label="Yes" name="radioDemo" value="yes"></auro-radio>
    <auro-radio id="radio5" label="No" name="radioDemo" value="no" disabled></auro-radio>
    <auro-radio id="radio6" label="Maybe" name="radioDemo" value="maybe"></auro-radio>
  </auro-radio-group>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/disabled.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/disabled.html -->

```html
<auro-radio-group>
  <span slot="legend">Form label goes here</span>
  <auro-radio id="radio4" label="Yes" name="radioDemo" value="yes"></auro-radio>
  <auro-radio id="radio5" label="No" name="radioDemo" value="no" disabled></auro-radio>
  <auro-radio id="radio6" label="Maybe" name="radioDemo" value="maybe"></auro-radio>
</auro-radio-group>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Error

Use the `error` attribute to set an error state on a singular `auro-radio` elements or the entire `auro-radio-group`.

#### Group

The `error` attribute used to set an error state on the entire `auro-radio-group`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/errorGroup.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/errorGroup.html -->
  <auro-radio-group error="custom error">
    <span slot="legend">Form label goes here</span>
    <auro-radio id="radio13" label="Yes" name="radioDemo" value="yes"></auro-radio>
    <auro-radio id="radio14" label="No" name="radioDemo" value="no"></auro-radio>
    <auro-radio id="radio15" label="Maybe" name="radioDemo" value="maybe"></auro-radio>
  </auro-radio-group>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/errorGroup.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/errorGroup.html -->

```html
<auro-radio-group error="custom error">
  <span slot="legend">Form label goes here</span>
  <auro-radio id="radio13" label="Yes" name="radioDemo" value="yes"></auro-radio>
  <auro-radio id="radio14" label="No" name="radioDemo" value="no"></auro-radio>
  <auro-radio id="radio15" label="Maybe" name="radioDemo" value="maybe"></auro-radio>
</auro-radio-group>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Single 

The `error` attribute used to set an error state on a single `auro-radio` element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/error.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/error.html -->
  <auro-radio-group error="custom error">
    <span slot="legend">Form label goes here</span>
    <auro-radio id="radio10" label="Yes" name="radioDemo" value="yes"></auro-radio>
    <auro-radio id="radio11" label="No" name="radioDemo" value="no" error></auro-radio>
    <auro-radio id="radio12" label="Maybe" name="radioDemo" value="maybe"></auro-radio>
  </auro-radio-group>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/error.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/error.html -->

```html
<auro-radio-group error="custom error">
  <span slot="legend">Form label goes here</span>
  <auro-radio id="radio10" label="Yes" name="radioDemo" value="yes"></auro-radio>
  <auro-radio id="radio11" label="No" name="radioDemo" value="no" error></auro-radio>
  <auro-radio id="radio12" label="Maybe" name="radioDemo" value="maybe"></auro-radio>
</auro-radio-group>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Required

When present, the `required` attribute specifies that an `auro-radio` within the `auro-radio-group` must be checked.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/required.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/required.html -->
  <auro-radio-group required>
    <span slot="legend">Form label goes here</span>
    <auro-radio id="radio19" label="Yes" name="radioDemo" value="yes"></auro-radio>
    <auro-radio id="radio20" label="No" name="radioDemo" value="no"></auro-radio>
    <auro-radio id="radio21" label="Maybe" name="radioDemo" value="maybe"></auro-radio>
  </auro-radio-group>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/required.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/required.html -->

```html
<auro-radio-group required>
  <span slot="legend">Form label goes here</span>
  <auro-radio id="radio19" label="Yes" name="radioDemo" value="yes"></auro-radio>
  <auro-radio id="radio20" label="No" name="radioDemo" value="no"></auro-radio>
  <auro-radio id="radio21" label="Maybe" name="radioDemo" value="maybe"></auro-radio>
</auro-radio-group>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Recommended Use and Version Control

There are two important parts of every Auro component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom clement. The class is exported and then used as part of defining the Web Component. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `auro-radio` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `registerComponent(name)` method and pass in a unique name.

```js
import './node_modules/@alaskaairux/auro-radio';
registerComponent('custom-radio');
```

This will create a new custom element that you can use in your HTML that will function identically to the `auro-radio` element.

Using the `registerComponent` function to create a custom `auro-radio` will also create a custom `auro-radio-group` with the exact same naming convention, ending in "-group". For example, using `registerComponent('custom-radio')` will result in `custom-radio-group` also being created.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/customRadio.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/customRadio.html -->
  <custom-radio-group>
    <span slot="legend">Form label goes here</span>
    <custom-radio id="radio22" label="Yes" name="radioDemo" value="yes"></custom-radio>
    <custom-radio id="radio23" label="No" name="radioDemo" value="no"></custom-radio>
    <custom-radio id="radio24" label="Maybe" name="radioDemo" value="maybe"></custom-radio>
  </custom-radio-group>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/customRadio.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/customRadio.html -->

```html
<custom-radio-group>
  <span slot="legend">Form label goes here</span>
  <custom-radio id="radio22" label="Yes" name="radioDemo" value="yes"></custom-radio>
  <custom-radio id="radio23" label="No" name="radioDemo" value="no"></custom-radio>
  <custom-radio id="radio24" label="Maybe" name="radioDemo" value="maybe"></custom-radio>
</custom-radio-group>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
