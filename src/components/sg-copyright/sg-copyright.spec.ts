import { newSpecPage } from '@stencil/core/testing';
import { SgCopyright } from './sg-copyright';

describe('sg-copyright', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SgCopyright],
      html: '<sg-copyright></sg-copyright>',
    });
    expect(root).toEqualHtml(`
      <sg-copyright>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </sg-copyright>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [SgCopyright],
      html: `<sg-copyright first="Stencil" middle="'Don't call me a framework'" last="JS"></sg-copyright>`,
    });
    expect(root).toEqualHtml(`
      <sg-copyright first="Stencil" middle="'Don't call me a framework'" last="JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </sg-copyright>
    `);
  });
});
