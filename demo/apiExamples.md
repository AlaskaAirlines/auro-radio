<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- The below content is automatically added from ./../api.md -->

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

## Methods

| Method         | Type                                 | Description                                      |
|----------------|--------------------------------------|--------------------------------------------------|
| [handleBlur](#handleBlur)   | `(event: Map<string, any>): void`    | Method for focus.<br /><br />**event**: The trigger event tied to this function. |
| [handleChange](#handleChange) | `(event: any): void`                 |                                                  |
| [handleFocus](#handleFocus)  | `(event: Map<string, any>): void`    | Method for focus.<br /><br />**event**: The trigger event tied to this function. |
| [handleInput](#handleInput)  | `(event: any): void`                 |                                                  |
| [invalid](#invalid)      | `(error: any): "true" \| "false"`    |                                                  |
| [isRequired](#isRequired)   | `(required: any): "true" \| "false"` |                                                  |

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

<div class="twoColDemoRow">
  <div>
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

### Horizontal

Using the `horizontal` attribute will render the `auro-radio` elements in a horizontal line.

**Note**: Using the horizontal attribute has a limit of 3 options. Beyond three, options will be listed in vertically.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/horizontalGroup.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/horizontalGroup.html -->
  <auro-radio-group horizontal>
    <span slot="legend">Form label goes here</span>
    <auro-radio id="radio16" label="Yes" name="radioDemo" value="yes"></auro-radio>
    <auro-radio id="radio17" label="No" name="radioDemo" value="no"></auro-radio>
    <auro-radio id="radio18" label="Maybe" name="radioDemo" value="maybe"></auro-radio>
  </auro-radio-group>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/horizontalGroup.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/horizontalGroup.html -->

```html
<auro-radio-group horizontal>
  <span slot="legend">Form label goes here</span>
  <auro-radio id="radio16" label="Yes" name="radioDemo" value="yes"></auro-radio>
  <auro-radio id="radio17" label="No" name="radioDemo" value="no"></auro-radio>
  <auro-radio id="radio18" label="Maybe" name="radioDemo" value="maybe"></auro-radio>
</auro-radio-group>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
