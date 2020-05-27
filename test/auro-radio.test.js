/* eslint-disable max-statements */
/* eslint-disable no-console */
/* eslint-disable one-var */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import { fixture, html, expect, elementUpdated } from '@open-wc/testing';

import '../src/auro-radio.js';
import '../src/auro-radio-group.js';

describe('auro-radio-group', () => {
  it('has the expected properties', async () => {
    const expectedError = "Expected error message";
    const expectedLabel = "expectedLabel";

    const el = await fixture(html`
      <auro-radio-group
        horizontal
        error=${expectedError}
        label=${expectedLabel}
      ></auro-radio-group>
    `);

    const root = el.shadowRoot;
    const label = root.querySelector('legend');
    const error = root.querySelector('p');

    expect(el.horizontal).to.be.true;
    expect(label.textContent).be.equal(expectedLabel);
    expect(error.textContent).be.equal(expectedError);
  });

  it('exhibits the correct group checking behavior', async () => {
    const el = await fixture(html`
      <auro-radio-group
        label="Select your state of residence"
      >
        <auro-radio
          id="alaska"
          label="Alaska"
          name="states"
          value="alaska"
        ></auro-radio>

        <auro-radio
          id="washington"
          label="Washington"
          name="states"
          value="washington"
        ></auro-radio>
      </auro-radio-group>
    `);

    const alaskaRadio = el.querySelector("auro-radio[id=alaska]");
    const alaskaRadioInput = alaskaRadio.shadowRoot.querySelector('input');

    const washingtonRadio = el.querySelector("auro-radio[id=washington]");
    const washingtonRadioInput = washingtonRadio.shadowRoot.querySelector('input');

    expect(alaskaRadio.checked, "Alaska Radio Button Initially Unchecked").to.not.be.true;
    expect(washingtonRadio.checked, "Washington Radio Button Initially Unchecked").to.not.be.true;

    alaskaRadioInput.click();
    await elementUpdated(el);

    // Selecting the first radio button should make it `checked`
    expect(alaskaRadio.checked, "Alaska Radio Button Clicked: Checked").to.be.true;
    expect(washingtonRadio.checked, "Washington Radio Button Unchecked (Alaska Clicked)").to.not.be.true;

    washingtonRadioInput.click();
    await elementUpdated(el);

    // Selecting the second radio button should make it `checked`
    // and the first radio button should be `unchecked`
    expect(alaskaRadio.checked, "Alaska Radio Button Unchecked (Washington Clicked)").to.not.be.true;
    expect(washingtonRadio.checked, "Washington Radio Button Clicked: Checked").to.be.true;
  });

  it('does nothing special with Tab key', async () => {
    const expectedLabel = "expectedLabel";

    const el = await fixture(html`
      <auro-radio-group
      label=${expectedLabel}
      >
        <auro-radio
          id="alaska"
          label="Alaska"
          name="states"
          value="alaska"
        ></auro-radio>

        <auro-radio
          id="washington"
          label="Washington"
          name="states"
          value="washington"
        ></auro-radio>

        <auro-radio
          id="california"
          label="California"
          name="states"
          value="california"
        ></auro-radio>
      </auro-radio-group>
    `);

    const alaskaRadio = el.querySelector("auro-radio[id=alaska]");
    const washingtonRadio = el.querySelector("auro-radio[id=washington]");
    const californiaRadio = el.querySelector("auro-radio[id=california]");

    expect(alaskaRadio.checked).to.not.be.true;
    expect(washingtonRadio.checked).to.not.be.true;
    expect(californiaRadio.checked).to.not.be.true;

    el.dispatchEvent(new KeyboardEvent('keydown', {key: "Tab"}));

    await elementUpdated(el);

    expect(alaskaRadio.checked, "Alaska Radio should be false").to.not.be.true;
    expect(washingtonRadio.checked, "Washington Radio should be false").to.not.be.true;
    expect(californiaRadio.checked, "California Radio should be false").to.not.be.true;
  });

  it('supports spacebar selection', async () => {
    const expectedLabel = "expectedLabel";

    const el = await fixture(html`
      <auro-radio-group
      label=${expectedLabel}
      >
        <auro-radio
          id="alaska"
          label="Alaska"
          name="states"
          value="alaska"
        ></auro-radio>

        <auro-radio
          id="washington"
          label="Washington"
          name="states"
          value="washington"
        ></auro-radio>

        <auro-radio
          id="california"
          label="California"
          name="states"
          value="california"
        ></auro-radio>
      </auro-radio-group>
    `);

    const alaskaRadio = el.querySelector("auro-radio[id=alaska]");
    const washingtonRadio = el.querySelector("auro-radio[id=washington]");
    const californiaRadio = el.querySelector("auro-radio[id=california]");

    expect(alaskaRadio.checked).to.not.be.true;
    expect(washingtonRadio.checked).to.not.be.true;
    expect(californiaRadio.checked).to.not.be.true;

    el.dispatchEvent(new KeyboardEvent('keydown', {key: " "}));

    await elementUpdated(el);

    expect(alaskaRadio.checked, "Alaska Radio should be true").to.be.true;
    expect(washingtonRadio.checked, "Washington Radio should be false").to.not.be.true;
    expect(californiaRadio.checked, "California Radio should be false").to.not.be.true;
  });

  it('supports arrow group traversal down', async () => {
    const expectedLabel = "expectedLabel";

    const el = await fixture(html`
      <auro-radio-group
      label=${expectedLabel}
      >
        <auro-radio
          id="alaska"
          label="Alaska"
          name="states"
          value="alaska"
          checked
        ></auro-radio>

        <auro-radio
          id="washington"
          label="Washington"
          name="states"
          value="washington"
        ></auro-radio>

        <auro-radio
          id="california"
          label="California"
          name="states"
          value="california"
        ></auro-radio>
      </auro-radio-group>
    `);

    const alaskaRadio = el.querySelector("auro-radio[id=alaska]");
    const washingtonRadio = el.querySelector("auro-radio[id=washington]");
    const californiaRadio = el.querySelector("auro-radio[id=california]");

    expect(alaskaRadio.checked).to.be.true;
    expect(washingtonRadio.checked).to.not.be.true;
    expect(californiaRadio.checked).to.not.be.true;

    el.dispatchEvent(new KeyboardEvent('keydown', {key: "Down"}));

    await elementUpdated(el);

    expect(alaskaRadio.checked, "Alaska Radio should be false").to.not.be.true;
    expect(washingtonRadio.checked, "Washington Radio should be true").to.be.true;
    expect(californiaRadio.checked, "California Radio should be false").to.not.be.true;
  });

  it('supports arrow group traversal down wrapping around to top when bottom is selected', async () => {
    const expectedLabel = "expectedLabel";

    const el = await fixture(html`
      <auro-radio-group
      label=${expectedLabel}
      >
        <auro-radio
          id="alaska"
          label="Alaska"
          name="states"
          value="alaska"
        ></auro-radio>

        <auro-radio
          id="washington"
          label="Washington"
          name="states"
          value="washington"
        ></auro-radio>

        <auro-radio
          id="california"
          label="California"
          name="states"
          value="california"
          checked
        ></auro-radio>
      </auro-radio-group>
    `);

    const alaskaRadio = el.querySelector("auro-radio[id=alaska]");
    const washingtonRadio = el.querySelector("auro-radio[id=washington]");
    const californiaRadio = el.querySelector("auro-radio[id=california]");

    expect(alaskaRadio.checked).to.not.be.true;
    expect(washingtonRadio.checked).to.not.be.true;
    expect(californiaRadio.checked).to.be.true;

    el.dispatchEvent(new KeyboardEvent('keydown', {key: "Down"}));

    await elementUpdated(el);

    expect(alaskaRadio.checked, "Alaska Radio should be true").to.be.true;
    expect(washingtonRadio.checked, "Washington Radio should be false").to.not.be.true;
    expect(californiaRadio.checked, "California Radio should be false").to.not.be.true;
  });

  it('supports arrow group traversal up', async () => {
    const expectedLabel = "expectedLabel";

    const el = await fixture(html`
      <auro-radio-group
      label=${expectedLabel}
      >
        <auro-radio
          id="alaska"
          label="Alaska"
          name="states"
          value="alaska"
        ></auro-radio>

        <auro-radio
          id="washington"
          label="Washington"
          name="states"
          value="washington"
          checked
        ></auro-radio>

        <auro-radio
          id="california"
          label="California"
          name="states"
          value="california"
        ></auro-radio>
      </auro-radio-group>
    `);

    const alaskaRadio = el.querySelector("auro-radio[id=alaska]");
    const washingtonRadio = el.querySelector("auro-radio[id=washington]");
    const californiaRadio = el.querySelector("auro-radio[id=california]");

    expect(alaskaRadio.checked).to.not.be.true;
    expect(washingtonRadio.checked).to.be.true;
    expect(californiaRadio.checked).to.not.be.true;

    el.dispatchEvent(new KeyboardEvent('keydown', {key: "Up"}));

    await elementUpdated(el);

    expect(alaskaRadio.checked, "Alaska Radio should be true").to.be.true;
    expect(washingtonRadio.checked, "Washington Radio should be false").to.not.be.true;
    expect(californiaRadio.checked, "California Radio should be false").to.not.be.true;
  });

  it('supports arrow group traversal up wrapping around to bottom when on top selection', async () => {
    const expectedLabel = "expectedLabel";

    const el = await fixture(html`
      <auro-radio-group
      label=${expectedLabel}
      >
        <auro-radio
          id="alaska"
          label="Alaska"
          name="states"
          value="alaska"
          checked
        ></auro-radio>

        <auro-radio
          id="washington"
          label="Washington"
          name="states"
          value="washington"
        ></auro-radio>

        <auro-radio
          id="california"
          label="California"
          name="states"
          value="california"
        ></auro-radio>
      </auro-radio-group>
    `);

    const alaskaRadio = el.querySelector("auro-radio[id=alaska]");
    const washingtonRadio = el.querySelector("auro-radio[id=washington]");
    const californiaRadio = el.querySelector("auro-radio[id=california]");

    expect(alaskaRadio.checked).to.be.true;
    expect(washingtonRadio.checked).to.not.be.true;
    expect(californiaRadio.checked).to.not.be.true;

    el.dispatchEvent(new KeyboardEvent('keydown', {key: "Up"}));

    await elementUpdated(el);

    expect(alaskaRadio.checked, "Alaska Radio should be false").to.not.be.true;
    expect(washingtonRadio.checked, "Washington Radio should be false").to.not.be.true;
    expect(californiaRadio.checked, "California Radio should be true").to.be.true;
  });

  it('is accessible', async () => {
    const expectedLabel = "expectedLabel";

    const el = await fixture(html`
      <auro-radio-group
      label=${expectedLabel}
      >
        <auro-radio
          id="alaska"
          label="Alaska"
          name="states"
          value="alaska"
          checked
        ></auro-radio>

        <auro-radio
          id="washington"
          label="Washington"
          name="states"
          value="washington"
        ></auro-radio>
      </auro-radio-group>
    `);

    expect(el).to.be.accessible();
  });

  it('should fire a input event with correct data', async () => {
    const el = await fixture(html`
      <auro-radio-group
        label="Select your favorite states"
      >
        <auro-radio
          id="alaska"
          label="Alaska"
          name="states"
          value="alaska"
        ></auro-radio>

        <auro-radio
          id="washington"
          label="Washington"
          name="states"
          value="washington"
        ></auro-radio>
      </auro-radio-group>
    `),
    alaskaradio = el.querySelector("auro-radio[id=alaska]"),
    alaskaradioInput = alaskaradio.shadowRoot.querySelector('input');

    let result = false;

    el.addEventListener('input', (event) => {
      result = event.target.checked;
    });

    alaskaradioInput.click();

    expect(result).to.be.true;
  });

  it('does not crash for empty input option groups', async () => {
    const el = await fixture(html`
      <auro-radio-group>
      </auro-radio-group>
    `);

    expect(el.items.length).to.equal(0);
  });
});

describe('auro-radio', () => {
  it('has the expected properties', async () => {
    const expectedId = "testId",
      expectedLabel = "testLabel",
      expectedName = "testName",
      expectedValue = "testValue",
      expectedError = "testError",
      expectedTabIndex = -1;

    const el = await fixture(html`
      <auro-radio
        id="${expectedId}"
        label="${expectedLabel}"
        name="${expectedName}"
        value="${expectedValue}"
        checked
        disabled
        error=${expectedError}
      ></auro-radio>
    `);

    const root = el.shadowRoot;
    const label = root.querySelector('label');
    const input = root.querySelector('input');
    const errorBorder = root.querySelector('.errorBorder');

    expect(el.tabIndex).to.equal(expectedTabIndex);
    expect(input.tabIndex).to.equal(expectedTabIndex);
    expect(input.checked).to.be.true;
    expect(input.disabled).to.be.true;
    expect(input.value).to.equal(expectedValue);
    expect(input.name).to.equal(expectedName);
    expect(input.type).to.equal('radio');
    expect(label.textContent).to.equal(expectedLabel);
    expect(errorBorder).to.not.be.undefined;
  });
});