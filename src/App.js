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
    <ThemeProvider theme={theme}>
      <Layout
        fullscreen={false}
        renderOrder={() => <Order order={order} />}
        renderComponent={() => <ComponentView data={components} />}
        renderEditor={() => <FieldEditor value="#Hello Contentful \n\nlorem ipsum" />}
      />
    </ThemeProvider>
  );
}
App.propTypes = {
  sdk: PropTypes.object.isRequired
};

export default App;
