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

    const el = await fixture(html`
      <auro-radio-group
        horizontal
        required
        error=${expectedError}
      ></auro-radio-group>
    `);

    const root = el.shadowRoot;
    const error = root.querySelector('p');

    expect(el.horizontal).to.be.true;
    expect(el.required).to.be.true;
    expect(error.textContent).be.equal(expectedError);
    expect(el).dom.to.equal(`
    <auro-radio-group horizontal required error="${expectedError}">
    </auro-radio-group>`);
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
    
    var changeEventDetected;

    let result = false;
    el.addEventListener('change', (event) => {
      changeEventDetected = true;
    });

    el.addEventListener('input', (event) => {
      result = event.target.checked;
    });

    alaskaradioInput.click();

    expect(result).to.be.true;
    expect(changeEventDetected).to.be.true;
  });

  it('does not crash for empty input option groups', async () => {
    const el = await fixture(html`
      <auro-radio-group>
      </auro-radio-group>
    `);

    expect(el.items.length).to.equal(0);
  });

  it('supports individual radio buttons being disabled in a group', async () => {
    const el = await fixture(html`
      <auro-radio-group
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
          disabled
        ></auro-radio>

        <auro-radio
        id="wisconsin"
        label="Wisconsin"
        name="states"
        value="wisconsin"
        disabled
      ></auro-radio>
      </auro-radio-group>
    `);

    const alaskaRadio = el.querySelector("auro-radio[id=alaska]");
    const washingtonRadio = el.querySelector("auro-radio[id=washington]");
    const californiaRadio = el.querySelector("auro-radio[id=california]");
    const wisconsinRadio = el.querySelector("auro-radio[id=wisconsin]");

    expect(alaskaRadio.checked).to.not.be.true;
    expect(washingtonRadio.checked).to.be.true;
    expect(californiaRadio.checked).to.not.be.true;
    expect(wisconsinRadio.checked).to.not.be.true;

    el.dispatchEvent(new KeyboardEvent('keydown', {key: "Down"}));

    await elementUpdated(el);

    expect(alaskaRadio.checked, "Alaska Radio should be false").to.not.be.true;
    expect(washingtonRadio.checked, "Washington Radio should be true").to.be.true;
    expect(californiaRadio.checked, "California Radio should be false").to.not.be.true;
    expect(wisconsinRadio.checked, "Wisconsin Radio should be false").to.not.be.true;
    expect(californiaRadio.disabled, "California Radio should be disabled").to.be.true;
    expect(wisconsinRadio.disabled, "Wisconsin Radio should be disabled").to.be.true;
  });

  it('disabled radio buttons in a group are skipped over on keydown events', async () => {
    const el = await fixture(html`
      <auro-radio-group
      >
        <auro-radio
          id="alaska"
          label="Alaska"
          name="states"
          value="alaska"
          disabled
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
          disabled
        ></auro-radio>

        <auro-radio
        id="wisconsin"
        label="Wisconsin"
        name="states"
        value="wisconsin"
      ></auro-radio>

      <auro-radio
        id="oregon"
        label="Oregon"
        name="states"
        value="oregon"
      ></auro-radio>
      </auro-radio-group>
    `);

    const alaskaRadio = el.querySelector("auro-radio[id=alaska]");
    const washingtonRadio = el.querySelector("auro-radio[id=washington]");
    const californiaRadio = el.querySelector("auro-radio[id=california]");
    const wisconsinRadio = el.querySelector("auro-radio[id=wisconsin]");
    const oregonRadio = el.querySelector("auro-radio[id=oregon]");

    expect(alaskaRadio.checked).to.not.be.true;
    expect(washingtonRadio.checked).to.be.true;
    expect(californiaRadio.checked).to.not.be.true;
    expect(wisconsinRadio.checked).to.not.be.true;
    expect(oregonRadio.checked).to.not.be.true;

    el.dispatchEvent(new KeyboardEvent('keydown', {key: "Down"}));

    await elementUpdated(el);

    expect(alaskaRadio.checked, "Alaska Radio should be false").to.not.be.true;
    expect(washingtonRadio.checked, "Washington Radio should be false").to.not.true;
    expect(californiaRadio.checked, "California Radio should be false").to.not.be.true;
    expect(wisconsinRadio.checked, "Wisconsin Radio should be true").to.be.true;
    expect(oregonRadio.checked, "Oregon Radio should be false").to.not.be.true;

    el.dispatchEvent(new KeyboardEvent('keydown', {key: "Down"}));
    el.dispatchEvent(new KeyboardEvent('keydown', {key: "Down"}));

    await elementUpdated(el);

    expect(alaskaRadio.checked, "Alaska Radio should be false").to.not.be.true;
    expect(washingtonRadio.checked, "Washington Radio should be true").to.be.true;
    expect(californiaRadio.checked, "California Radio should be false").to.not.be.true;
    expect(wisconsinRadio.checked, "Wisconsin Radio should be false").to.not.be.true;
    expect(oregonRadio.checked, "Oregon Radio should be false").to.not.be.true;

    el.dispatchEvent(new KeyboardEvent('keydown', {key: "Up"}));

    await elementUpdated(el);

    expect(alaskaRadio.checked, "Alaska Radio should be false").to.not.be.true;
    expect(washingtonRadio.checked, "Washington Radio should be false").to.not.be.true;
    expect(californiaRadio.checked, "California Radio should be false").to.not.be.true;
    expect(wisconsinRadio.checked, "Wisconsin Radio should be false").to.not.be.true;
    expect(oregonRadio.checked, "Oregon Radio should be true").to.be.true;
  });

  it('Supports all radio buttons being set to disabled if the group is disabled, even if some individual components are not explicitly set to disabled', async () => {
    const el = await fixture(html`
      <auro-radio-group
      disabled
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
          disabled
        ></auro-radio>

        <auro-radio
        id="wisconsin"
        label="Wisconsin"
        name="states"
        value="wisconsin"
        disabled
      ></auro-radio>
      </auro-radio-group>
    `);

    const alaskaRadio = el.querySelector("auro-radio[id=alaska]");
    const washingtonRadio = el.querySelector("auro-radio[id=washington]");
    const californiaRadio = el.querySelector("auro-radio[id=california]");
    const wisconsinRadio = el.querySelector("auro-radio[id=wisconsin]");

    expect(alaskaRadio.checked).to.not.be.true;
    expect(washingtonRadio.checked).to.be.true;
    expect(californiaRadio.checked).to.not.be.true;
    expect(wisconsinRadio.checked).to.not.be.true;

    el.dispatchEvent(new KeyboardEvent('keydown', {key: "Down"}));

    await elementUpdated(el);

    expect(alaskaRadio.checked, "Alaska Radio should be false").to.not.be.true;
    expect(washingtonRadio.checked, "Washington Radio should be true").to.be.true;
    expect(californiaRadio.checked, "California Radio should be false").to.not.be.true;
    expect(wisconsinRadio.checked, "Wisconsin Radio should be false").to.not.be.true;

    expect(alaskaRadio.disabled, "Alaska Radio should be true").to.be.true;
    expect(washingtonRadio.disabled, "Washington Radio should be true").to.be.true;
    expect(californiaRadio.disabled, "California Radio should be disabled").to.be.true;
    expect(wisconsinRadio.disabled, "Wisconsin Radio should be disabled").to.be.true;
  });
});

describe('auro-radio', () => {
  it('has the expected properties', async () => {
    const expectedId = "testId",
      expectedName = "testName",
      expectedValue = "testValue",
      expectedError = "testError",
      expectedTabIndex = -1;

    const el = await fixture(html`
      <auro-radio
        id="${expectedId}"
        name="${expectedName}"
        value="${expectedValue}"
        checked
        disabled
        required
        error=${expectedError}
      ></auro-radio>
    `);

    const root = el.shadowRoot;
    const input = root.querySelector('input');
    const errorBorder = root.querySelector('.errorBorder');

    expect(el.tabIndex).to.equal(expectedTabIndex);
    expect(input.tabIndex).to.equal(expectedTabIndex);
    expect(input.checked).to.be.true;
    expect(input.disabled).to.be.true;
    expect(input.value).to.equal(expectedValue);
    expect(input.name).to.equal(expectedName);
    expect(input.type).to.equal('radio');
    expect(errorBorder).to.not.be.undefined;
    expect(el).dom.to.equal(`
    <auro-radio id="${expectedId}" tabindex="-1" name="${expectedName}" value="${expectedValue}" error="${expectedError}" checked disabled required>
    </auro-radio>`);
  });
});
