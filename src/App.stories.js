import React from 'react';

import App from './App';
import { createSdk } from './utils/sdk-mock';

export default {
  title: 'Extension',
  component: App,
};

export const AppStory = () => <App sdk={createSdk()} />;

AppStory.story = {
  name: 'Default',
};
