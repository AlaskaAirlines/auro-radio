// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html, css } from "lit";
import { classMap } from 'lit/directives/class-map.js';
import {ifDefined} from 'lit/directives/if-defined.js';


// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./auro-radio-css.js";

/**
 * @fires toggleSelected - Notifies that the component has toggled the chexked/selected state.
 * @fires focusSelected - Notifies that the component has gained focus.
 * @fires auroRadio-blur - Notifies that the component has lost focus.
 * @fires resetRadio - Notifies that the component has reset the checked/selected state.
 * @fires auroRadio-selected - Notifies that the component has been marked as checked/selected.
 */

// build the component class
export class AuroRadio extends LitElement {
  constructor() {
    super();
    this.checked = false;
    this.disabled = false;
    this.required = false;
    this.error = false;
    this.tabIndex = -1;
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      checked: {
        type: Boolean,
        reflect: true
      },
      disabled: {
        type: Boolean,
        reflect: true
      },
      required: {
        type: Boolean,
        reflect: true
      },
      error: {
        type: Boolean,
        reflect: true
      },
      id:       { type: String },
      label:    { type: String },
      name:     { type: String },
      value:    { type: String },
      tabIndex: {
        type: Number,
        reflect: true
      }
    };
  }

  handleChange(event) {
    this.checked = event.target.checked;
    const customEvent = new CustomEvent(event.type, event);

    this.dispatchEvent(customEvent);
  }

  handleInput(event) {
    this.checked = event.target.checked;
    this.dispatchEvent(new CustomEvent('toggleSelected', {
      bubbles: true,
      composed: true,
      target: this
    }));
  }

  /**
   * Method for focus.
   * @param {Map<string, any>} event - The trigger event tied to this function.
   * @returns {void}
   */
  handleFocus(event) {
    this.dispatchEvent(new CustomEvent('focusSelected', {
      bubbles: true,
      composed: true,
      target: event.target
    }));
  }

  /**
   * Method for focus.
   * @param {Map<string, any>} event - The trigger event tied to this function.
   * @returns {void}
   */
  handleBlur(event) {
    this.dispatchEvent(new CustomEvent('auroRadio-blur', {
      bubbles: true,
      composed: true,
      target: event.target
    }));
  }

  updated(changedProperties) {
    if (changedProperties.has('checked')) {
      this.dispatchEvent(new CustomEvent('resetRadio', {
        bubbles: true,
        composed: true
      }));

      if (this.checked) {
        this.dispatchEvent(new CustomEvent('auroRadio-selected', {
          bubbles: true,
          composed: true
        }));
      }
    }
  }

  invalid(error) {
    if (error) {
      return 'true';
    }

    return 'false';
  }

  isRequired(required) {
    if (required) {
      return 'true';
    }

    return 'false';
  }

  firstUpdated() {
    this.addEventListener('blur', this.handleBlur);
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    const labelClasses = {
      'ods-inputLabel': true,
      'ods-inputLabel--radio': true,
      'label': true,
      'label--rdo': true,
      'errorBorder': this.error
    };

    return html`
      <div class="ods-inputGroup rdoGroup">
        <input
          class="util_displayHiddenVisually ods-inputOption rdo--input"
          @focus="${this.handleFocus}"
          @input="${this.handleInput}"
          @change="${this.handleChange}"
          ?disabled="${this.disabled}"
          aria-invalid="${this.invalid(this.error)}"
          aria-required="${this.isRequired(this.required)}"
          .checked="${this.checked}"
          id="${ifDefined(this.id)}"
          name="${ifDefined(this.name)}"
          type="radio"
          .value="${this.value}"
          tabIndex="-1"
        />

        <label for="${ifDefined(this.id)}" class="${classMap(labelClasses)}">
          <slot>${this.label}</slot>
        </label>

      </div>
      <slot name="content" class="slotContent"></slot>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-radio")) {
  customElements.define("auro-radio", AuroRadio);
}
