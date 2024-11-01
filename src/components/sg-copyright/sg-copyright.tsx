import { Component, Prop, h, Element,State } from '@stencil/core';
import { getLocaleComponentStrings } from '../../utils/locale';

@Component({
  tag: 'sg-copyright',
  styleUrl: 'sg-copyright.css',
  shadow: true,
})
export class SgCopyright {
  @Element() element: HTMLElement;
  strings: any;
  @Prop() company: string;
  @Prop() from: string;
  @Prop() placement: 'left' | 'right' |'center';
  @Prop() color?: string;
  @State() colorValue: string;

  getTypeClass() {
    let result = ""
    switch (this.placement) {
        case 'left':
            result = "cr-align-left";
            break;
        case 'right':
            result = "cr-align-right";
            break;
        case 'center':
            result = "cr-align-center";
            break;
        default:
            result = "cr-align-left";
    }
    return result;
}
async componentWillLoad(): Promise<void> {
  this.strings = await getLocaleComponentStrings(this.element);
  this.setColor();
}

setColor() {
  if (this.color?.startsWith('--')) {
    this.colorValue = `var(${this.color})`;
    return;
  }

  if (!this.color?.startsWith('#')) {
    const customPropertyValue = window.getComputedStyle(document.body).getPropertyValue(`--${this.color}`).trim();
    if (customPropertyValue && customPropertyValue.length > 0) {
      this.colorValue = `var(--${this.color})`;
      return;
    }
  }

  this.colorValue = this.color;
}

getCurrentYear() {
  return new Date().getFullYear();
}


render() {
  return (
    <div class={this.getTypeClass()} style={{ color: this.colorValue }}>© {this.from !=null ? this.from +' - '+this.getCurrentYear() + " " : this.getCurrentYear()+" "}
      {this.company !=null ? this.company+', ' : ''} {this.strings.rights} 
    </div>

   );
 }
}