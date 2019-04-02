import { configure, addDecorator } from "@storybook/react";
import withInfo from "@storybook/addon-info";

// function loadStories() {
//   require('../src/stories');
// }

addDecorator(withInfo);

// automatically import all files ending in *.stories.js
const req = require.context("../packages", true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
