import { AuroRadio } from './src/auro-radio.js';
import { AuroRadioGroup } from './src/auro-radio-group.js';

/**
 * Register Custom Element.
 * @param {Object} name - Name to use for custom element.
 * @returns {void}
 */
const registerComponent = (name = 'custom-radio') => {
  const groupName = name + '-group';

  // alias definition
  if (!customElements.get(name)) {
    customElements.define(name, class extends AuroRadio {});
  }

  if (!customElements.get(groupName)) {
    customElements.define(groupName, class extends AuroRadioGroup {});
  }
}

export { registerComponent }
