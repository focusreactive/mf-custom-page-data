import React from 'react';
import PropTypes from 'prop-types';
import '@contentful/forma-36-react-components/dist/styles.css';
import { TextInput } from '@contentful/forma-36-react-components';

import './index.css';

function App({ sdk }) {
  const initValue = sdk.field.getValue();
  const [data, setDate] = React.useState(initValue);
  const onExternalChange = data => {
    setDate(data);
  };
  const valueToData = title => ({ title });
  const onChange = e => {
    const value = e.currentTarget.value;
    const newData = valueToData(value);
    setDate(newData);
    if (value) {
      sdk.field.setValue(newData);
    } else {
      sdk.field.removeValue();
    }
  };
  React.useEffect(() => {
    sdk.window.startAutoResizer();
    // Handler for external field value changes (e.g. when multiple authors are working on the same entry).
    const detachExternalChangeHandler = sdk.field.onValueChanged(onExternalChange);
    return () => {
      if (detachExternalChangeHandler) {
        detachExternalChangeHandler();
      }
    };
  }, []);
  const { order = [], components = {} } = data || {};
  return (
    <div>
      <div>{JSON.stringify(order)}</div>
      <div>{JSON.stringify(components)}</div>
    </div>
  );
}
App.propTypes = {
  sdk: PropTypes.object.isRequired
};

export default App;
