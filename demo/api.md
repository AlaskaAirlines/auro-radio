<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/api.md) -->
<!-- The below content is automatically added from ./../docs/partials/api.md -->
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Default

The following example illustrates the default use of the `<auro-radio>` custom element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../apiExamples/basic.html -->
  <auro-radio id="basicRadio1" label="Yes" name="radioDemo" value="yes"></auro-radio>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic.html -->

```html
<auro-radio id="basicRadio1" label="Yes" name="radioDemo" value="yes"></auro-radio>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Default Group

This is a default configuration using the `<auro-radio-group>` and `<auro-radio>` elements. Notice the use of the `slot` attribute to set the group title of the `<auro-radio-group>`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basicGroup.html) -->
  <!-- The below content is automatically added from ./../apiExamples/basicGroup.html -->
  <auro-radio-group>
    <span slot="legend">Form label goes here</span>
    <auro-radio id="basicGroupRadio1" label="Yes" name="radioDemo" value="yes"></auro-radio>
    <auro-radio id="basicGroupRadio2" label="No" name="radioDemo" value="no"></auro-radio>
    <auro-radio id="basicGroupRadio3" label="Maybe" name="radioDemo" value="maybe"></auro-radio>
  </auro-radio-group>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basicGroup.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basicGroup.html -->

```html
<auro-radio-group>
  <span slot="legend">Form label goes here</span>
  <auro-radio id="basicGroupRadio1" label="Yes" name="radioDemo" value="yes"></auro-radio>
  <auro-radio id="basicGroupRadio2" label="No" name="radioDemo" value="no"></auro-radio>
  <auro-radio id="basicGroupRadio3" label="Maybe" name="radioDemo" value="maybe"></auro-radio>
</auro-radio-group>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Checked

Use the `checked` attribute to pre-select a `<auro-radio>` element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/checked.html) -->
  <!-- The below content is automatically added from ./../apiExamples/checked.html -->
  <auro-radio-group>
    <span slot="legend">Form label goes here</span>
    <auro-radio id="radio4" label="Yes" name="radioDemo" value="yes">Yes</auro-radio>
    <auro-radio id="radio5" label="No" name="radioDemo" value="no" checked>No</auro-radio>
    <auro-radio id="radio6" label="Maybe" name="radioDemo" value="maybe">Maybe</auro-radio>
  </auro-radio-group>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/checked.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/checked.html -->

```html
<auro-radio-group>
  <span slot="legend">Form label goes here</span>
  <auro-radio id="radio4" label="Yes" name="radioDemo" value="yes">Yes</auro-radio>
  <auro-radio id="radio5" label="No" name="radioDemo" value="no" checked>No</auro-radio>
  <auro-radio id="radio6" label="Maybe" name="radioDemo" value="maybe">Maybe</auro-radio>
</auro-radio-group>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Disabled

Use the `disabled` attribute to disable singular `<auro-radio>` elements or the entire `<auro-radio-group>`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/disabled.html) -->
  <!-- The below content is automatically added from ./../apiExamples/disabled.html -->
  <auro-radio-group>
    <span slot="legend">Form label goes here</span>
    <auro-radio id="disabledRadio1" label="Yes" name="radioDemo" value="yes"></auro-radio>
    <auro-radio id="disabledRadio2" label="No" name="radioDemo" value="no" disabled></auro-radio>
    <auro-radio id="disabledRadio3" label="Maybe" name="radioDemo" value="maybe"></auro-radio>
  </auro-radio-group>
  <auro-radio-group disabled>
    <span slot="legend">Form label goes here</span>
    <auro-radio id="disabledRadio4" label="Yes" name="radioDemo" value="yes"></auro-radio>
    <auro-radio id="disabledRadio5" label="No" name="radioDemo" value="no"></auro-radio>
    <auro-radio id="disabledRadio6" label="Maybe" name="radioDemo" value="maybe"></auro-radio>
  </auro-radio-group>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/disabled.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/disabled.html -->

```html
<auro-radio-group>
  <span slot="legend">Form label goes here</span>
  <auro-radio id="disabledRadio1" label="Yes" name="radioDemo" value="yes"></auro-radio>
  <auro-radio id="disabledRadio2" label="No" name="radioDemo" value="no" disabled></auro-radio>
  <auro-radio id="disabledRadio3" label="Maybe" name="radioDemo" value="maybe"></auro-radio>
</auro-radio-group>
<auro-radio-group disabled>
  <span slot="legend">Form label goes here</span>
  <auro-radio id="disabledRadio4" label="Yes" name="radioDemo" value="yes"></auro-radio>
  <auro-radio id="disabledRadio5" label="No" name="radioDemo" value="no"></auro-radio>
  <auro-radio id="disabledRadio6" label="Maybe" name="radioDemo" value="maybe"></auro-radio>
</auro-radio-group>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Error

Use the `error` attribute to set an error state on the entire `<auro-radio-group>`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/error.html) -->
  <!-- The below content is automatically added from ./../apiExamples/error.html -->
  <auro-radio-group error="There is an error with this form entry">
    <span slot="legend">Form label goes here</span>
    <auro-radio id="errorRadio1" label="Yes" name="radioDemo" value="yes"></auro-radio>
    <auro-radio id="errorRadio2" label="No" name="radioDemo" value="no"></auro-radio>
    <auro-radio id="errorRadio3" label="Maybe" name="radioDemo" value="maybe"></auro-radio>
  </auro-radio-group>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/error.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/error.html -->

```html
<auro-radio-group error="There is an error with this form entry">
  <span slot="legend">Form label goes here</span>
  <auro-radio id="errorRadio1" label="Yes" name="radioDemo" value="yes"></auro-radio>
  <auro-radio id="errorRadio2" label="No" name="radioDemo" value="no"></auro-radio>
  <auro-radio id="errorRadio3" label="Maybe" name="radioDemo" value="maybe"></auro-radio>
</auro-radio-group>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Horizontal Group

Using the `horizontal` attribute will render the `auro-radio` elements in a horizontal line.

**Note**: Using the horizontal attribute has a limit of 3 options. Beyond three, options will be listed in vertically.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/horizontal.html) -->
  <!-- The below content is automatically added from ./../apiExamples/horizontal.html -->
  <auro-radio-group horizontal>
    <span slot="legend">Form label goes here</span>
    <auro-radio id="horizontalRadio1" label="Yes" name="radioDemo" value="yes"></auro-radio>
    <auro-radio id="horizontalRadio2" label="No" name="radioDemo" value="no"></auro-radio>
    <auro-radio id="horizontalRadio3" label="Maybe" name="radioDemo" value="maybe"></auro-radio>
  </auro-radio-group>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/horizontal.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/horizontal.html -->

```html
<auro-radio-group horizontal>
  <span slot="legend">Form label goes here</span>
  <auro-radio id="horizontalRadio1" label="Yes" name="radioDemo" value="yes"></auro-radio>
  <auro-radio id="horizontalRadio2" label="No" name="radioDemo" value="no"></auro-radio>
  <auro-radio id="horizontalRadio3" label="Maybe" name="radioDemo" value="maybe"></auro-radio>
</auro-radio-group>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Required

When present, the `required` attribute specifies that an `<auro-radio>` within the `<auro-radio-group>` must be checked. There is no error message associated with the `required` attribute by default. Use `setCustomValidityValueMissing` to set a custom error message.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/required.html) -->
  <!-- The below content is automatically added from ./../apiExamples/required.html -->
  <auro-radio-group required setCustomValidityValueMissing="value missing">
    <span slot="legend">Form label goes here</span>
    <auro-radio id="requiredRadio1" label="Yes" name="radioDemo" value="yes"></auro-radio>
    <auro-radio id="requiredRadio2" label="No" name="radioDemo" value="no"></auro-radio>
    <auro-radio id="requiredRadio3" label="Maybe" name="radioDemo" value="maybe"></auro-radio>
  </auro-radio-group>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/required.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/required.html -->

```html
<auro-radio-group required setCustomValidityValueMissing="value missing">
  <span slot="legend">Form label goes here</span>
  <auro-radio id="requiredRadio1" label="Yes" name="radioDemo" value="yes"></auro-radio>
  <auro-radio id="requiredRadio2" label="No" name="radioDemo" value="no"></auro-radio>
  <auro-radio id="requiredRadio3" label="Maybe" name="radioDemo" value="maybe"></auro-radio>
</auro-radio-group>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Custom optional label

The `<auro-radio-group>` supports an `optionalLabel` slot, where users can can override the default `(optional)` notification text.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/optionalLabel.html) -->
  <!-- The below content is automatically added from ./../apiExamples/optionalLabel.html -->
  <auro-radio-group>
    <span slot="legend">Form label goes here</span>
    <span slot="optionalLabel">(add custom label here)</span>
    <auro-radio id="labelRadio1" label="Yes" name="radioDemo" value="yes"></auro-radio>
    <auro-radio id="labelRadio2" label="No" name="radioDemo" value="no"></auro-radio>
    <auro-radio id="labelRadio3" label="Maybe" name="radioDemo" value="maybe"></auro-radio>
  </auro-radio-group>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/optionalLabel.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/optionalLabel.html -->

```html
<auro-radio-group>
  <span slot="legend">Form label goes here</span>
  <span slot="optionalLabel">(add custom label here)</span>
  <auro-radio id="labelRadio1" label="Yes" name="radioDemo" value="yes"></auro-radio>
  <auro-radio id="labelRadio2" label="No" name="radioDemo" value="no"></auro-radio>
  <auro-radio id="labelRadio3" label="Maybe" name="radioDemo" value="maybe"></auro-radio>
</auro-radio-group>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Dynamic Example

This example demonstrates a data drive approach to rendering `<auro-radio>` buttons.

**Note**: When dynamically creating `<auro-radio>` elements, make sure to add an `id` attribute, as it is a required part of the HTML5 spec for all form elements.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/dynamic.html) -->
  <!-- The below content is automatically added from ./../apiExamples/dynamic.html -->
  <auro-radio-group required id="dynamicExample">
    <span slot="legend">Form label goes here</span>
  </auro-radio-group>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/dynamic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/dynamic.html -->

```html
<auro-radio-group required id="dynamicExample">
  <span slot="legend">Form label goes here</span>
</auro-radio-group>
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/dynamic.js) -->
<!-- The below code snippet is automatically added from ./../apiExamples/dynamic.js -->

```js
export function dynamicExample() {
  const values = ['Yes', 'No', 'Maybe'];
  const radioGroup = document.getElementById('dynamicExample');

  for (let i = 0; i < values.length; i++) {
    const radio = document.createElement('auro-radio');

    radio.id = `dynamicRadio${i}`;
    radio.label = values[i];
    radio.name = 'radioDemo';
    radio.value = values[i];
    radio.textContent = values[i];

    radioGroup.appendChild(radio);
  }
}
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Theme Support

The component may be restyled using the following code sample and changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/tokens.scss -->

```scss
:host {
  // auro-radio-group colors
  --ds-auro-radio-group-help-text-color: var(--ds-color-text-secondary-default, $ds-color-text-secondary-default);
  --ds-auro-radio-group-label-color: inherit;

  // auro-radio colors
  --ds-auro-radio-btn-border-color: var(--ds-color-border-primary-default, $ds-color-border-primary-default);
  --ds-auro-radio-btn-fill-color: transparent;
  --ds-auro-radio-btn-inset-color: transparent;
  --ds-auro-radio-label-color: inherit;
  --ds-auro-radio-tap-color: transparent;
}
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Default

The following example illustrates the default use of the `<auro-radio>` custom element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Default Group

This is a default configuration using the `<auro-radio-group>` and `<auro-radio>` elements. Notice the use of the `slot` attribute to set the group title of the `<auro-radio-group>`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basicGroup.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basicGroup.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Checked

Use the `checked` attribute to pre-select a `<auro-radio>` element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/checked.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/checked.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Disabled

Use the `disabled` attribute to disable singular `<auro-radio>` elements or the entire `<auro-radio-group>`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/disabled.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/disabled.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Error

Use the `error` attribute to set an error state on the entire `<auro-radio-group>`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/error.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/error.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Horizontal Group

Using the `horizontal` attribute will render the `auro-radio` elements in a horizontal line.

**Note**: Using the horizontal attribute has a limit of 3 options. Beyond three, options will be listed in vertically.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/horizontal.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/horizontal.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Required

When present, the `required` attribute specifies that an `<auro-radio>` within the `<auro-radio-group>` must be checked. There is no error message associated with the `required` attribute by default. Use `setCustomValidityValueMissing` to set a custom error message.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/required.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/required.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Custom optional label

The `<auro-radio-group>` supports an `optionalLabel` slot, where users can can override the default `(optional)` notification text.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/optionalLabel.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/optionalLabel.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Dynamic Example

This example demonstrates a data drive approach to rendering `<auro-radio>` buttons.

**Note**: When dynamically creating `<auro-radio>` elements, make sure to add an `id` attribute, as it is a required part of the HTML5 spec for all form elements.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/dynamic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/dynamic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/dynamic.js) -->
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Theme Support

The component may be restyled using the following code sample and changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/tokens.scss) -->
<!-- AURO-GENERATED-CONTENT:END -->
