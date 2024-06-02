import type { App } from 'vue';
import { createApp } from "vue";
import * as svupck from "survey-vue3-ui";
import * as scvpck from "survey-creator-vue";

const { surveyPlugin } = svupck;
const { surveyCreatorPlugin } = scvpck;

export default (app: App) => {
  app.use(surveyPlugin)
  app.use(surveyCreatorPlugin)
};