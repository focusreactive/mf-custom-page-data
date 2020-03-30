import React from 'react';
import ReactDOM from 'react-dom';
import { init } from 'contentful-ui-extensions-sdk';

import App from './App';

init(sdk => {
  ReactDOM.render(<App sdk={sdk} />, document.getElementById('root'));
});


/**
 * By default, iframe of the extension is fully reloaded on every save of a source file.
 * If you want to use HMR (hot module reload) instead of full reload, uncomment the following lines
 */
// if (module.hot) {
//   module.hot.accept();
// }
