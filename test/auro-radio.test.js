import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-radio';

describe('auro-radio', () => {
  it('auro-radio is accessible', async () => {
    const el = await fixture(html`
      <auro-radio cssclass="testClass"></auro-radio>
    `);

    await expect(el).to.be.accessible();
  });

  it('sets the CSS class on auro-radio > div element', async () => {
    const el = await fixture(html`
      <auro-radio cssclass="testClass"></auro-radio>
    `);

    const div = el.shadowRoot.querySelector('div');
    expect(div.className).to.equal('testClass');
  });

  it('auro-radio custom element is defined', async () => {
    const el = await !!customElements.get("auro-radio");

    await expect(el).to.be.true;
  });
});
