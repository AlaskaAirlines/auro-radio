# auro-radio-group

## Properties

| Property                        | Attribute                       | Type      | Default     | Description                                      |
|---------------------------------|---------------------------------|-----------|-------------|--------------------------------------------------|
| `disabled`                      | `disabled`                      | `boolean` | false       |                                                  |
| `error`                         | `error`                         | `String`  |             | When defined, sets persistent validity to `customError` and sets `setCustomValidity` = attribute value. |
| `horizontal`                    | `horizontal`                    | `boolean` | false       |                                                  |
| `index`                         |                                 | `number`  | 0           |                                                  |
| `max`                           |                                 | `number`  | 3           |                                                  |
| `noValidate`                    | `noValidate`                    | `Boolean` |             | If set, disables auto-validation on blur.        |
| `required`                      | `required`                      | `Boolean` | false       | Populates the `required` attribute on the element. Used for client-side validation. |
| `setCustomValidity`             | `setCustomValidity`             | `String`  |             | Sets a custom help text message to display for all validityStates. |
| `setCustomValidityCustomError`  | `setCustomValidityCustomError`  | `String`  |             | Custom help text message to display when validity = `customError`. |
| `setCustomValidityValueMissing` | `setCustomValidityValueMissing` | `String`  |             | Custom help text message to display when validity = `valueMissing`. |
| `validity`                      | `validity`                      | `String`  | "undefined" | Specifies the `validityState` this element is in. |
| `value`                         | `value`                         | `array`   | "undefined" |                                                  |

## Methods

| Method                 | Type                                     | Description                                      |
|------------------------|------------------------------------------|--------------------------------------------------|
| `handleItems`          | `(): void`                               |                                                  |
| `handleKeyDown`        | `(event: any): void`                     |                                                  |
| `handleRadioBlur`      | `(): void`                               | Method handles radio element blur.               |
| `handleSelection`      | `(evt: Map<string, any>): void`          | Method for handling of selection of a radio element.<br /><br />**evt**: The trigger event tied to this function. |
| `handleSlotChange`     | `(): void`                               |                                                  |
| `handleToggleSelected` | `(event: any): void`                     |                                                  |
| `initializeIndex`      | `(): void`                               |                                                  |
| `reset`                | `(): void`                               | Method for a total reset of the radio element.   |
| `resetRadio`           | `(): void`                               | Method handles the reset event from a radio element. |
| `selectItem`           | `(index: any): void`                     |                                                  |
| `selectNextItem`       | `(index: any, moveDirection: any): void` |                                                  |

## CSS Shadow Parts

| Part          | Description                                      |
|---------------|--------------------------------------------------|
| `radio-group` | Apply css to the fieldset element in the shadow DOM |


# auro-radio

## Properties

| Property   | Attribute  | Type      | Default | Description                                      |
|------------|------------|-----------|---------|--------------------------------------------------|
| `checked`  | `checked`  | `Boolean` | false   | If set to true, the radio button will be filled. |
| `disabled` | `disabled` | `Boolean` | false   | If set to true, the radio button will be unclickable. |
| `error`    | `error`    | `Boolean` | false   | If set to true, sets an error state on the radio button. |
| `id`       | `id`       | `string`  |         |                                                  |
| `label`    | `label`    | `string`  |         |                                                  |
| `name`     | `name`     | `string`  |         |                                                  |
| `required` | `required` | `Boolean` | false   | Defines element as required.                     |
| `tabIndex` | `tabIndex` | `number`  | -1      |                                                  |
| `value`    | `value`    | `string`  |         |                                                  |

## Methods

| Method         | Type                                 | Description                                      |
|----------------|--------------------------------------|--------------------------------------------------|
| `handleBlur`   | `(event: Map<string, any>): void`    | Method for focus.<br /><br />**event**: The trigger event tied to this function. |
| `handleChange` | `(event: any): void`                 |                                                  |
| `handleFocus`  | `(event: Map<string, any>): void`    | Method for focus.<br /><br />**event**: The trigger event tied to this function. |
| `handleInput`  | `(event: any): void`                 |                                                  |
| `invalid`      | `(error: any): "true" \| "false"`    |                                                  |
| `isRequired`   | `(required: any): "true" \| "false"` |                                                  |

## Events

| Event                | Type               | Description                                      |
|----------------------|--------------------|--------------------------------------------------|
| `auroRadio-blur`     | `CustomEvent<any>` | Notifies that the component has lost focus.      |
| `auroRadio-selected` | `CustomEvent<any>` | Notifies that the component has been marked as checked/selected. |
| `focusSelected`      | `CustomEvent<any>` | Notifies that the component has gained focus.    |
| `resetRadio`         | `CustomEvent<any>` | Notifies that the component has reset the checked/selected state. |
| `toggleSelected`     | `CustomEvent<any>` | Notifies that the component has toggled the chexked/selected state. |
