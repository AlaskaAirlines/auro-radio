// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.
// ---------------------------------------------------------------------
import { LitElement, html, css } from "lit-element";
import { classMap } from 'lit-html/directives/class-map';

// Import touch detection lib
import 'focus-visible/dist/focus-visible.min.js';

// Import the processed CSS file into the scope of the component
import styleCss from "./auro-radio-group-css.js";

/* eslint no-magic-numbers: ["error", { "ignore": [0, 1, -1] }] */
/* eslint-disable max-lines */

/**
 * @attr {String} validity - Specifies the `validityState` this element is in.
 * @attr {String} setCustomValidity - Sets a custom help text message to display for all validityStates.
 * @attr {String} setCustomValidityCustomError - Custom help text message to display when validity = `customError`.
 * @attr {String} setCustomValidityValueMissing - Custom help text message to display when validity = `valueMissing`.
 * @attr {String} error - When defined, sets persistent validity to `customError` and sets `setCustomValidity` = attribute value.
 * @attr {Boolean} noValidate - If set, disables auto-validation on blur.
 * @attr {Boolean} required - Populates the `required` attribute on the element. Used for client-side validation.
 */

class AuroRadioGroup extends LitElement {
  constructor() {
    super();
    this.index = 0;
    this.max = 3;
    this.disabled = false;
    this.horizontal = false;
    this.required = false;
    this.validity = undefined;
    this.value = undefined;
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  static get properties() {
    return {
      disabled:   {
        type: Boolean,
        reflect: true
      },
      horizontal: { type: Boolean },
      error:      {
        type: String,
        reflect: true
       },
      value: {
        type: Array
      },
      noValidate: {
        type: Boolean,
        reflect: true
      },
      required: {
        type: Boolean,
        reflect: true
      },
      setCustomValidity: {
        type: String
      },
      setCustomValidityCustomError: {
        type: String
      },
      setCustomValidityValueMissing: {
        type: String
      },
      validity: {
        type: String,
        reflect: true
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.handleItems();
    this.addEventListener('toggleSelected', this.handleToggleSelected);
    this.addEventListener('keydown', this.handleKeyDown);
    this.addEventListener('resetRadio', this.resetRadio);
    this.addEventListener('auroRadio-blur', this.handleRadioBlur);
    this.addEventListener('auroRadio-selected', this.handleSelection);
  }

  /**
   * Method for handling of selection of a radio element
   * @param {Map<string, any>} evt - the trigger event tied to this function
   * @returns {void}
   */
  handleSelection(evt) {
    if (evt.target.hasAttribute('value')) {
      this.value = evt.target.value
    } else {
      this.value = '';
    }

    this.validate();
  }

  /**
   * Method handles radio element blur
   * @returns {void}
   */
  handleRadioBlur() {
    if (this.value === undefined) {
      this.value = '';
    }

    this.validate();
  }

  /**
   * LitElement lifecycle method. Called after the DOM has been updated.
   * @param {Map<string, any>} changedProperties - keys are the names of changed properties, values are the corresponding previous values.
   * @returns {void}
   */
  updated(changedProperties) {
    if (changedProperties.has('disabled')) {
      // only change the children if we are making everything disabled, or if we are making everything enabled and there are no individually-disabled radio buttons
      if (this.disabled || this.items.every((el) => el.disabled)) {
        this.items.forEach((el) => {
          el.disabled = this.disabled
        });
      }
    }
    if (changedProperties.has('required')) {
      this.items.forEach((el) => {
        el.required = this.required
      });
    }
    if (changedProperties.has('error')) {
      this.validate();
    }
  }

  /**
   * Determines the validity state of the element.
   * @private
   * @returns {void}
   */
  /* eslint-disable max-statements */
  validate() {
    // Validate only if noValidate is not true and the input does not have focus
    if (this.hasAttribute('error')) {
      this.validity = 'customError';
      this.setCustomValidity = this.error;
    } else if (this.value !== undefined && !this.noValidate) {
      this.validity = 'valid';
      this.setCustomValidity = '';

      /**
       * Only validate once we interact with the datepicker
       * this.value === undefined is the initial state pre-interaction.
       *
       * The validityState definitions are located at https://developer.mozilla.org/en-US/docs/Web/API/ValidityState.
       */
      if ((!this.value || this.value.length === 0) && this.required) { // eslint-disable-line no-magic-numbers
        this.validity = 'valueMissing';
        this.setCustomValidity = this.setCustomValidityValueMissing;
      }
    } else {
      this.validity = undefined;
      this.removeAttribute('validity');
    }

    if (this.validity && this.validity !== 'valid') {
      this.isValid = false;

      // Use the validity message override if it is declared
      if (this.ValidityMessageOverride) {
        this.setCustomValidity = this.ValidityMessageOverride;
      }
    } else {
      this.isValid = true;
    }

    if (this.error || (this.validity && this.validity !== 'valid')) { // eslint-disable-line  no-extra-parens
      this.items.forEach((el) => {
        el.setAttribute('error', '');
      });
    } else {
      this.items.forEach((el) => {
        el.removeAttribute('error');
      });
    }
  }

  /**
   * Method for a total reset of the radio element
   * @returns {void}
   */
  reset() {
    this.value = undefined;
    this.index = 0;
    const buttons = this.querySelectorAll('auro-radio');

    buttons.forEach((button) => {
      button.checked = false;
    });

    this.validate();
  }

  /**
   * Method handles the reset event from a radio element
   * @returns {void}
   */
  resetRadio() {
    if (this.items.length === 0) {
      this.handleItems();
    }

    // handle tab index
    this.items.forEach((item) => {
      item.tabIndex = -1;
    })
    this.items[this.index].tabIndex = 0;
  }

  handleItems() {
    this.items = Array.from(this.querySelectorAll('auro-radio'));
    this.initializeIndex();

    if (this.disabled) {
      this.items.forEach((el) => {
        el.disabled = this.disabled
      });
    }

    this.items.forEach((el) => {
      el.required = this.required;
      el.error = Boolean(this.error);
    });
  }

  handleSlotChange() {
    this.handleItems();
  }

  initializeIndex() {
    if (!this.disabled) {
      const index = this.items.findIndex((item) => item.hasAttribute('checked') && !item.hasAttribute('disabled'));
      const nextEnabledIndex = this.items.findIndex((item) => !item.hasAttribute('disabled'));

      this.index = index >= 0 ? index : nextEnabledIndex;

      if (this.index >= 0) {
        this.items[this.index].tabIndex = 0;
      }
    }
  }

  handleToggleSelected(event) {
    this.index = this.items.indexOf(event.target);

    this.items.forEach((item) => {
      if (item === event.target) {
        item.tabIndex = 0;
        if (event.target.value) {
          this.value = event.target.value;
        }
      } else {
        const sdInput = item.shadowRoot.querySelector('input');

        sdInput.checked = false;
        item.checked = false;
        item.tabIndex = -1;
      }
    })

    this.validate();
  }

  selectItem(index) {
    const sdItem = this.items[index].shadowRoot.querySelector('input');

    sdItem.click();
    sdItem.focus();
    this.index = index;
  }

  selectNextItem(index, moveDirection) {
    let currIndex = index;

    for (currIndex; currIndex < this.items.length; moveDirection === "Down" ? currIndex += 1 : currIndex -= 1) {
      currIndex = currIndex === -1 ? this.items.length - 1 : currIndex;
      const sdItem = this.items[currIndex].shadowRoot.querySelector('input');

      if (!sdItem.disabled) {
        sdItem.click();
        sdItem.focus();
        this.index = currIndex;
        break;
      }
    }
  }

  handleKeyDown(event) {
    switch (event.key) {
      case " ":
        event.preventDefault();
        this.selectItem(this.index);
        break;

      case "Down":
      case "ArrowDown":
      case "Right":
      case "ArrowRight":
        event.preventDefault();
        this.selectNextItem(this.index === this.items.length - 1 ? 0 : this.index + 1, "Down");
        break;

      case "Up":
      case "ArrowUp":
      case "Left":
      case "ArrowLeft":
        event.preventDefault();
        this.selectNextItem(this.index === 0 ? this.items.length - 1 : this.index - 1, "Up");
        break;
      default:
        break;
    }
  }

  render() {
    const groupClasses = {
      'displayFlex': this.horizontal && this.items.length <= this.max
    }

    return html`
      <fieldset class="${classMap(groupClasses)}">
        ${this.required
        ? html`<legend><slot name="legend"></slot></legend>`
        : html`<legend><slot name="legend"></slot> (optional)</legend>`
      }
        <slot @slotchange=${this.handleSlotChange}></slot>
      </fieldset>

      ${!this.validity || this.validity === undefined || this.validity === 'valid'
        ? html`
          <p class="radioGroupElement-helpText" part="helpText">
            <slot name="helpText"></slot>
          </p>`
        : html`
          <p class="radioGroupElement-helpText" role="alert" aria-live="assertive" part="helpText">
            ${this.setCustomValidity}
          </p>`
      }
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-radio-group")) {
  customElements.define("auro-radio-group", AuroRadioGroup);
}
