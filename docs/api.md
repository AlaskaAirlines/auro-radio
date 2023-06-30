# auro-radio

## Properties

| Property   | Attribute  | Type      | Default |
|------------|------------|-----------|---------|
| `checked`  | `checked`  | `boolean` | false   |
| `disabled` | `disabled` | `boolean` | false   |
| `error`    | `error`    | `boolean` | false   |
| `id`       | `id`       | `string`  |         |
| `label`    | `label`    | `string`  |         |
| `name`     | `name`     | `string`  |         |
| `required` | `required` | `boolean` | false   |
| `tabIndex` | `tabIndex` | `number`  | -1      |
| `value`    | `value`    | `string`  |         |

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
