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

## CSS Shadow Parts

| Part          | Description                                      |
|---------------|--------------------------------------------------|
| `radio-group` | Apply css to the fieldset element in the shadow DOM |

# auro-radio

## Properties

| Property   | Attribute  | Type      | Default | Description                                      |
|------------|------------|-----------|---------|--------------------------------------------------|
| [checked](#checked)  | `checked`  | `Boolean` | false   | If set to true, the radio button will be filled. |
| [disabled](#disabled) | `disabled` | `Boolean` | false   | If set to true, the radio button will be unclickable. |
| [error](#error)    | `error`    | `Boolean` | false   | If set to true, sets an error state on the radio button. |
| [id](#id)       | `id`       | `string`  |         |                                                  |
| [label](#label)    | `label`    | `string`  |         |                                                  |
| radio(#name)     | `name`     | `string`  |         |                                                  |
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
| [toggleSelected](#toggleSelected)     | `CustomEvent<any>` | Notifies that the component has toggled the chexked/selected state. |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
  <auro-radio id="radio1" label="Yes" name="radioDemo" value="yes"></auro-radio>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

```html
<auro-radio id="radio1" label="Yes" name="radioDemo" value="yes"></auro-radio>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Basic Group

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
<auro-accordion lowProfile justifyRight>
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

### Horizontal

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
<auro-accordion lowProfile justifyRight>
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
