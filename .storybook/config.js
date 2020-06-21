import React from "react";
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { configure } from '@storybook/react';

addDecorator(withInfo({
  inline: false,
  header: false,
  source: true
}));

addDecorator(withKnobs);

const req = require.context("../src", true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);