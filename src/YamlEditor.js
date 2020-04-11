import React from 'react';
import 'codemirror/mode/yaml/yaml';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import './codemirrow-theme.css';
import yaml from 'js-yaml';

const App = ({ sdk }) => {
  const initValue = sdk.field.getValue();
  const [value, setValue] = React.useState(initValue);

  const handleChange = val => {
    sdk.field.setValue(val);
    setValue(val)
  }

  React.useEffect(() => {
    sdk.window.startAutoResizer();
  }, []);

  return <YamlEditor value={initValue} onChange={handleChange} />;
};

const YamlEditor = ({ value, onChange }) => {
  return (
    <div style={{ height: 800 }}>
      <CodeMirror
        value={yaml.dump(value)}
        options={{
          mode: 'text/x-yaml',
          theme: 'mf-plugin',
          lineNumbers: true,
        }}
        onBeforeChange={(editor, data, v) => {
          try {
          const obj = yaml.safeLoad(v);
          onChange(obj);}
          catch (err) {
            console.log('not valid yaml');
            console.err(err);

          }
        }}
        onChange={(editor, data, value) => {}}
      />
    </div>
  );
};

export default App;
