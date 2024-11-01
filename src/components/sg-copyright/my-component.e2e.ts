import { newE2EPage } from '@stencil/core/testing';

describe('sg-copyright', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<sg-copyright></sg-copyright>');
    const element = await page.find('sg-copyright');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<sg-copyright></sg-copyright>');
    const component = await page.find('sg-copyright');
    const element = await page.find('sg-copyright >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
