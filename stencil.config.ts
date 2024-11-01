import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'sg-copyright',
  buildEs5: true,  // Added to create a ESM folder in dist
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        {
           src: "**/*.i18n.*.json",
              dest: 'i18n'
        },
      ] 
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [{
        src: "**/*.i18n.*.json",
        dest: "i18n"
      }]
    },
  ],
  testing: {
    browserHeadless: "new",
  },
};
