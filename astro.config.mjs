import { defineConfig } from 'astro/config';

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [vue({
    appEntrypoint:'/src/pages/_app',
    template: {
      compilerOptions: {
        isCustomElement: (tag) => ['SurveyCreatorComponent'].includes(tag),
      }
    }
  })]
});