// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.
// ---------------------------------------------------------------------
import { LitElement, html, css } from "lit-element";
import { classMap } from 'lit-html/directives/class-map';

// Import touch detection lib
import 'focus-visible/dist/focus-visible.min.js';

// Import the processed CSS file into the scope of the component
import styleCss from "./auro-radio-group-css.js";

class AuroRadioGroup extends LitElement {
  constructor() {
    super();

    this.index = 0;
    this.zero = 0;
    this.one = 1;
    this.three = 3;
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  static get properties() {
    return {
      disabled:   { type: Boolean },
      horizontal: { type: Boolean },
      required:   { type: Boolean },
      error:      { type: String }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.items = Array.from(this.querySelectorAll('auro-radio'));
    this.initializeIndex();

    if (this.disabled) {
      this.items.forEach((el) => {
        el.disabled = this.disabled
      });
    }

    this.items.forEach((el) => {
      el.required = this.required
    });

    this.addEventListener('toggleSelected', this.handleToggleSelected);
    this.addEventListener('keydown', this.handleKeyDown);
    this.addEventListener('focusSelected', this.handleFocusSelected);
  }

  initializeIndex() {
    if (!this.disabled) {
      const index = this.items.findIndex((item) => item.hasAttribute('checked') && !item.hasAttribute('disabled')),
            nextEnabledIndex = this.items.findIndex((item) => !item.hasAttribute('disabled'));

      this.index = index >= this.zero ? index : nextEnabledIndex;

      if (this.index >= this.zero) {
        this.items[this.index].tabIndex = this.zero;
      }
    }
  }

  handleToggleSelected(event) {
    this.index = this.items.indexOf(event.target);
    this.items.forEach((item) => {
      if (item === event.target) {
        item.tabIndex = this.zero;
      } else {
        const sdInput = item.shadowRoot.querySelector('input');

        sdInput.checked = false;
        item.checked = false;
        item.tabIndex = -1;
      }
    })
  }

  errorChange() {
    this.items.forEach((el) => {
      el.error = Boolean(this.error)
    });
  }

  selectItem(index) {
    const sdItem = this.items[index].shadowRoot.querySelector('input');

    sdItem.click();
    sdItem.focus();
    this.index = index;
  }

  selectNextItem(index, moveDirection) {
    let currIndex = index;

    for (currIndex; currIndex < this.items.length; moveDirection === "Down" ? currIndex += this.one : currIndex -= this.one) {
      currIndex = currIndex === -this.one ? this.items.length - this.one : currIndex;
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
        this.selectNextItem(this.index === this.items.length - this.one ? this.zero : this.index + this.one, "Down");
        break;

      case "Up":
      case "ArrowUp":
      case "Left":
      case "ArrowLeft":
        event.preventDefault();
        this.selectNextItem(this.index === this.zero ? this.items.length - this.one : this.index - this.one, "Up");
        break;
      default:
        break;
    }
  }

  handleFocusSelected() {
    const sdItem = this.items[this.index].shadowRoot.querySelector('input');

    sdItem.focus();
  }

  render() {
    const groupClasses = {
      'displayFlex': this.horizontal && this.items.length <= this.three
    }

    return html`
      ${this.errorChange()}

      <fieldset class="${classMap(groupClasses)}">
        ${this.required
        ? html`<legend><slot name="legend"></slot></legend>`
        : html`<legend><slot name="legend"></slot> (optional)</legend>`
      }
        <slot></slot>
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
