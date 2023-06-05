## Properties: auro-radio-group

| Attribute | Value type | Description |
|----|----|----
| disabled | boolean | enables disabled state of the element |
| error | string | set error message for radio group |
| horizontal | boolean | toggles layout direction, default is `vertical`, max 3 options |
| required | boolean | defines element group as required|

## Properties: auro-radio

| Attribute | Value type |Description |
|----|----|----
| checked | boolean | enables checked state of the element |
| disabled | boolean | enables disabled state of the element |
| required | boolean | defines element as required |
| error | boolean | set error state for radio button |
| id | string | sets the individual `id` per element |
| name | string | Accepts any string, `DOMString` representing the value of the input |
| value | string | sets the elements input value |
| index | number | allow for programmatic updating of the custom elements index count |

## Slots

| Name      | Description                                |
|-----------|--------------------------------------------|
|  | Places content into the `label` element; will override content from the `label` attribute |
| `content` | Additional content element within the scope of the custom element; will not highlight with tab focus  |

## CSS Shadow Parts

| Part | Description |
|------|-------------|
| `radio-group` | Adjust styling of the radio-group fieldset |