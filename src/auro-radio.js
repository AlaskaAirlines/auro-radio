// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html } from "lit-element";

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-css.js";

// build the component class
class AuroRadio extends LitElement {
  // constructor() {
  //   super();
  // }

  // function to define props used within the scope of thie component
  static get properties() {
    return {
      cssClass:   { type: String }
    };
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      ${styleCss}

      <div class=${this.cssClass}>
        <slot></slot>
      </div>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-radio")) {
  customElements.define("auro-radio", AuroRadio);
}
