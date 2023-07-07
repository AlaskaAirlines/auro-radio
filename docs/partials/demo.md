<!--
The demo.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/demo.md`
-->

# Radio

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./description.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## auro-radio use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./useCases.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Example(s)

### Default

This is a default configuration of `<auro-radio>`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Default Group

This is a default configuration using the `<auro-radio-group>` and `<auro-radio>` elements. Notice the use of the `slot` attribute to set the group title of the `<auro-radio-group>`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basicGroup.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basicGroup.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

<p>Using a similar configuration notice the use of the <code>&#60;slot&#62;</code> element within the <code>&#60;auro-radio&#62;</code> element. This will allow users to override the direct use of content from the <code>value</code> attribute.</p>

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic2.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic2.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Disabled

Use the `disabled` attribute to disable singular `<auro-radio>` elements or the entire `<auro-radio-group>`.

#### Group

The `disabled` attribute used to disable the entire `<auro-radio-group>`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/disabledGroup.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/disabledGroup.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Single

The `disabled` attribute used to disable a single `<auro-radio>` element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/disabled.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/disabled.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Error

Use the `error` attribute to set an error state on the entire `<auro-radio-group>`.

#### Group

The `error` attribute used to set an error state on the entire `<auro-radio-group>`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/errorGroup.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/errorGroup.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Single

The `error` attribute used to set an error state on a single `<auro-radio>` element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/error.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/error.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Required

When present, the `required` attribute specifies that an `<auro-radio>` within the `<auro-radio-group>` must be checked.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/required.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/required.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Horizontal radio group

Using the `horizontal` attribute will render the checkbox options on a horizontal line.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/horizontal.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/horizontal.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Recommended Use and Version Control

There are two important parts of every Auro component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom clement. The class is exported and then used as part of defining the Web Component. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `<auro-radio>` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `registerComponent(name)` method and pass in a unique name.

```js
import './node_modules/@alaskaairux/auro-radio';
registerComponent('custom-radio');
```

This will create a new custom element that you can use in your HTML that will function identically to the `<auro-radio>` element.

Using the `registerComponent` function to create a custom `<auro-radio>` will also create a custom `<auro-radio-group>` with the exact same naming convention, ending in "-group". For example, using `registerComponent('custom-radio')` will result in `<custom-radio-group>` also being created.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/customRadio.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/customRadio.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
