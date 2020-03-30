import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'emotion-theming';
import '@contentful/forma-36-react-components/dist/styles.css';
import { TextInput } from '@contentful/forma-36-react-components';

import './index.css';
import Order from './UI/Order';
import { theme } from './theme';
import Layout from './UI/Layout';
import ComponentView from './UI/ComponentView';
import FieldEditor from './UI/FieldEditor';

function App({ sdk }) {
  const initValue = sdk.field.getValue();
  const [data, setData] = React.useState(initValue);

  const onExternalChange = data => {
    setData(data);
  };

  const valueToData = title => ({ title });
  const onChange = e => {
    const value = e.currentTarget.value;
    const newData = valueToData(value);
    setData(newData);
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

  const [selectedKey, setSelectedKey] = React.useState(null);

  const selectComponent = index => {
    if (!index) {
      setSelectedKey(null);
      return;
    }
    const key = order[index];
    if (!components[key]) {
      setSelectedKey(null);
      return;
    }
    setSelectedKey(key);
  };

  const selectedComponent = selectedKey ? components[selectedKey] : null;

  const getSelectedValue = namespace => {
    if (!selectedComponent || !namespace) {
      return null;
    }
    try {
      const value = namespace.reduce((cur, key) => cur[key], selectedComponent);
      return value;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  const [selectedPath, setSelectedPath] = React.useState(null);
  const selectPath = path => {
    if (!path) {
      return;
    }
    const { namespace, name } = path;
    const valuePath = [...namespace, name];
    if (!getSelectedValue(valuePath)) {
      return;
    }
    setSelectedPath(valuePath);
  };

  const updateValue = newValue => {
    if (!selectedComponent || !selectedPath || !newValue) {
      return null;
    }
    const [key, ...namespace] = [...selectedPath].reverse();
    namespace.reverse();
    const Obj = namespace.reduce((cur, key) => cur[key], selectedComponent);
    Obj[key] = newValue;
    sdk.field.setValue({ ...data });
  };

  const refreshValue = newValue => {
    if (!selectedComponent || !selectedPath || !newValue) {
      return null;
    }
    const [key, ...namespace] = [...selectedPath].reverse();
    namespace.reverse();
    const Obj = namespace.reduce((cur, key) => cur[key], selectedComponent);
    Obj[key] = newValue;
    // setData({ ...data });
  };

  const selectedValue = getSelectedValue(selectedPath);
  const pathString = selectedPath && selectedPath.join('/');

  return (
    <ThemeProvider theme={theme}>
      <Layout
        fullscreen={false}
        renderOrder={() => <Order order={order} onSelect={selectComponent} />}
        renderComponent={() => (
          <ComponentView data={selectedComponent} title={selectedKey} onSelect={selectPath} />
        )}
        renderEditor={() => (
          <FieldEditor
            pathString={selectedValue}
            // pathString={pathString}
            value={selectedValue}
            onFinishEditing={updateValue}
            onEdit={refreshValue}
          />
        )}
      />
    </ThemeProvider>
  );
}
App.propTypes = {
  sdk: PropTypes.object.isRequired
};

export default App;
