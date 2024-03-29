<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- The below content is automatically added from ./../api.md -->

# auro-radio-group

## Properties

| Property                        | Attribute                       | Type      | Default     | Description                                      |
|---------------------------------|---------------------------------|-----------|-------------|--------------------------------------------------|
| [disabled](#disabled)                      | `disabled`                      | `boolean` | false       |                                                  |
| [error](#error)                         | `error`                         | `String`  |             | When defined, sets persistent validity to `customError` and sets `setCustomValidity` = attribute value. |
| [horizontal](#horizontal)                    | `horizontal`                    | `boolean` | false       |                                                  |
| [noValidate](#noValidate)                    | `noValidate`                    | `Boolean` |             | If set, disables auto-validation on blur.        |
| [required](#required)                      | `required`                      | `Boolean` | false       | Populates the `required` attribute on the element. Used for client-side validation. |
| [setCustomValidity](#setCustomValidity)             | `setCustomValidity`             | `String`  |             | Sets a custom help text message to display for all validityStates. |
| [setCustomValidityCustomError](#setCustomValidityCustomError)  | `setCustomValidityCustomError`  | `String`  |             | Custom help text message to display when validity = `customError`. |
| [setCustomValidityValueMissing](#setCustomValidityValueMissing) | `setCustomValidityValueMissing` | `String`  |             | Custom help text message to display when validity = `valueMissing`. |
| [validity](#validity)                      | `validity`                      | `String`  | "undefined" | Specifies the `validityState` this element is in. |
| [value](#value)                         | `value`                         | `array`   | "undefined" |                                                  |

## Methods

| Method  | Type       | Description                                    |
|---------|------------|------------------------------------------------|
| [reset](#reset) | `(): void` | Method for a total reset of the radio element. |

## Slots

| Name            | Description                                     |
|-----------------|-------------------------------------------------|
| [helpText](#helpText)      | Allows for the helper text to be overridden.    |
| [legend](#legend)        | Allows for the legend to be overridden.         |
| [optionalLabel](#optionalLabel) | Allows for the optional label to be overridden. |

## CSS Shadow Parts

| Part          | Description                                      |
|---------------|--------------------------------------------------|
| `radio-group` | Apply css to the fieldset element in the shadow DOM |

# auro-radio

## Properties

| Property   | Attribute  | Type      | Default | Description                                      |
|------------|------------|-----------|---------|--------------------------------------------------|
| [checked](#checked)  | `checked`  | `Boolean` | false   | If set to true, the radio button will be filled. |
| [disabled](#disabled) | `disabled` | `Boolean` | false   | If set to true, the radio button will be non-clickable. |
| [error](#error)    | `error`    | `Boolean` | false   | If set to true, sets an error state on the radio button. |
| [id](#id)       | `id`       | `string`  |         |                                                  |
| [label](#label)    | `label`    | `string`  |         |                                                  |
| [name](#name)     | `name`     | `string`  |         |                                                  |
| [required](#required) | `required` | `Boolean` | false   | Defines element as required.                     |
| [tabIndex](#tabIndex) | `tabIndex` | `number`  | -1      |                                                  |
| [value](#value)    | `value`    | `string`  |         |                                                  |

## Events

| Event                | Type               | Description                                      |
|----------------------|--------------------|--------------------------------------------------|
| `auroRadio-blur`     | `CustomEvent<any>` | Notifies that the component has lost focus.      |
| `auroRadio-selected` | `CustomEvent<any>` | Notifies that the component has been marked as checked/selected. |
| [focusSelected](#focusSelected)      | `CustomEvent<any>` | Notifies that the component has gained focus.    |
| [resetRadio](#resetRadio)         | `CustomEvent<any>` | Notifies that the component has reset the checked/selected state. |
| [toggleSelected](#toggleSelected)     | `CustomEvent<any>` | Notifies that the component has toggled the checked/selected state. |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Default

The following example illustrates the default use of the `<auro-radio>` custom element. `

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
  <auro-radio id="radio1" label="Yes" name="radioDemo" value="yes"></auro-radio>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

```html
<auro-radio id="radio1" label="Yes" name="radioDemo" value="yes"></auro-radio>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Default Group

The following illustrates a default use of the `<auro-radio-group><auro-radio>...</auro-radio>/<auro-radio-group>` pattern.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basicGroup.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basicGroup.html -->
  <auro-radio-group>
    <span slot="legend">Form label goes here</span>
    <auro-radio id="radio28" label="Yes" name="radioDemo" value="yes"></auro-radio>
    <auro-radio id="radio29" label="No" name="radioDemo" value="no"></auro-radio>
    <auro-radio id="radio30" label="Maybe" name="radioDemo" value="maybe"></auro-radio>
  </auro-radio-group>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basicGroup.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basicGroup.html -->

```html
<auro-radio-group>
  <span slot="legend">Form label goes here</span>
  <auro-radio id="radio28" label="Yes" name="radioDemo" value="yes"></auro-radio>
  <auro-radio id="radio29" label="No" name="radioDemo" value="no"></auro-radio>
  <auro-radio id="radio30" label="Maybe" name="radioDemo" value="maybe"></auro-radio>
</auro-radio-group>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Disabled

Use the `disabled` attribute to disable singular `<auro-radio>` elements or the entire `<auro-radio-group>`.

#### Group

The `disabled` attribute used to disable the entire `<auro-radio-group>`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/disabledGroup.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/disabledGroup.html -->
  <auro-radio-group disabled>
    <span slot="legend">Form label goes here</span>
    <auro-radio id="radio13" label="Yes" name="radioDemo" value="yes"></auro-radio>
    <auro-radio id="radio14" label="No" name="radioDemo" value="no"></auro-radio>
    <auro-radio id="radio15" label="Maybe" name="radioDemo" value="maybe"></auro-radio>
  </auro-radio-group>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/disabledGroup.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/disabledGroup.html -->

```html
<auro-radio-group disabled>
  <span slot="legend">Form label goes here</span>
  <auro-radio id="radio13" label="Yes" name="radioDemo" value="yes"></auro-radio>
  <auro-radio id="radio14" label="No" name="radioDemo" value="no"></auro-radio>
  <auro-radio id="radio15" label="Maybe" name="radioDemo" value="maybe"></auro-radio>
</auro-radio-group>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Error

Use the `error` attribute to set an error state on the entire `<auro-radio-group>`.

#### Group

The `error` attribute used to set an error state on the entire `<auro-radio-group>`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/errorGroup.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/errorGroup.html -->
  <auro-radio-group error="There is an error with this form entry">
    <span slot="legend">Form label goes here</span>
    <auro-radio id="radio19" label="Yes" name="radioDemo" value="yes"></auro-radio>
    <auro-radio id="radio20" label="No" name="radioDemo" value="no"></auro-radio>
    <auro-radio id="radio21" label="Maybe" name="radioDemo" value="maybe"></auro-radio>
  </auro-radio-group>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/errorGroup.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/errorGroup.html -->

```html
<auro-radio-group error="There is an error with this form entry">
  <span slot="legend">Form label goes here</span>
  <auro-radio id="radio19" label="Yes" name="radioDemo" value="yes"></auro-radio>
  <auro-radio id="radio20" label="No" name="radioDemo" value="no"></auro-radio>
  <auro-radio id="radio21" label="Maybe" name="radioDemo" value="maybe"></auro-radio>
</auro-radio-group>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### horizontal

Using the `horizontal` attribute will render the `auro-radio` elements in a horizontal line.

**Note**: Using the horizontal attribute has a limit of 3 options. Beyond three, options will be listed in vertically.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/horizontal.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/horizontal.html -->
  <auro-radio-group horizontal>
    <span slot="legend">Form label goes here</span>
    <auro-radio id="radio22" label="Yes" name="radioDemo" value="yes"></auro-radio>
    <auro-radio id="radio23" label="No" name="radioDemo" value="no"></auro-radio>
    <auro-radio id="radio24" label="Maybe" name="radioDemo" value="maybe"></auro-radio>
  </auro-radio-group>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/horizontal.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/horizontal.html -->

```html
<auro-radio-group horizontal>
  <span slot="legend">Form label goes here</span>
  <auro-radio id="radio22" label="Yes" name="radioDemo" value="yes"></auro-radio>
  <auro-radio id="radio23" label="No" name="radioDemo" value="no"></auro-radio>
  <auro-radio id="radio24" label="Maybe" name="radioDemo" value="maybe"></auro-radio>
</auro-radio-group>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Required

When present, the `required` attribute specifies that an `<auro-radio>` within the `<auro-radio-group>` must be checked.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/required.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/required.html -->
  <auro-radio-group required>
    <span slot="legend">Form label goes here</span>
    <auro-radio id="radio25" label="Yes" name="radioDemo" value="yes"></auro-radio>
    <auro-radio id="radio26" label="No" name="radioDemo" value="no"></auro-radio>
    <auro-radio id="radio27" label="Maybe" name="radioDemo" value="maybe"></auro-radio>
  </auro-radio-group>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/required.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/required.html -->

```html
<auro-radio-group required>
  <span slot="legend">Form label goes here</span>
  <auro-radio id="radio25" label="Yes" name="radioDemo" value="yes"></auro-radio>
  <auro-radio id="radio26" label="No" name="radioDemo" value="no"></auro-radio>
  <auro-radio id="radio27" label="Maybe" name="radioDemo" value="maybe"></auro-radio>
</auro-radio-group>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Custom optional label

The `<auro-radio-group>` supports an `optionalLabel` slot, where users can can override the default `(optional)` notification text.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/optionalLabel.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/optionalLabel.html -->
  <auro-radio-group>
    <span slot="legend">Form label goes here</span>
    <span slot="optionalLabel">(add custom label here)</span>
    <auro-radio id="radio28" label="Yes" name="radioDemo" value="yes"></auro-radio>
    <auro-radio id="radio29" label="No" name="radioDemo" value="no"></auro-radio>
    <auro-radio id="radio30" label="Maybe" name="radioDemo" value="maybe"></auro-radio>
  </auro-radio-group>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/optionalLabel.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/optionalLabel.html -->

```html
<auro-radio-group>
  <span slot="legend">Form label goes here</span>
  <span slot="optionalLabel">(add custom label here)</span>
  <auro-radio id="radio28" label="Yes" name="radioDemo" value="yes"></auro-radio>
  <auro-radio id="radio29" label="No" name="radioDemo" value="no"></auro-radio>
  <auro-radio id="radio30" label="Maybe" name="radioDemo" value="maybe"></auro-radio>
</auro-radio-group>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
