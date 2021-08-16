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

class AuroRadioGroup extends LitElement {
  constructor() {
    super();
    this.index = 0;
    this.max = 3;
    this.disabled = false;
    this.horizontal = false;
    this.required = false;
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
      required:   { type: Boolean },
      error:      {
        type: String,
        reflect: true
       },
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.handleItems();
    this.addEventListener('toggleSelected', this.handleToggleSelected);
    this.addEventListener('keydown', this.handleKeyDown);
    this.addEventListener('resetRadio', this.reset);
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
      this.items.forEach((el) => {
        el.error = Boolean(this.error)
      });
    }
  }

  reset() {
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
      } else {
        const sdInput = item.shadowRoot.querySelector('input');

        sdInput.checked = false;
        item.checked = false;
        item.tabIndex = -1;
      }
    })
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

      ${this.error
        ? html`<p role="alert" aria-live="assertive" class="errorText">${this.error}</p>`
        : html``}
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-radio-group")) {
  customElements.define("auro-radio-group", AuroRadioGroup);
}
