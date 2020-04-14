import React from 'react';
import 'codemirror/mode/yaml/yaml';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import './codemirrow-theme.css';
import yaml from 'js-yaml';
import { Note, Button } from '@contentful/forma-36-react-components';
import styled from '@emotion/styled';

const App = ({ sdk }) => {
  const initValue = sdk.field.getValue();
  const metaData = sdk.entry.getSys();
  const [value, setValue] = React.useState(initValue);
  const [publishedVersion, setPublishedVersion] = React.useState(metaData.publishedVersion);

  const handleChange = val => {
    sdk.field.setValue(val);
    setValue(val);
  };

  const handleError = isError => {
    sdk.field.setInvalid(isError);
  };

  React.useEffect(() => {
    sdk.window.startAutoResizer();
    sdk.entry.onSysChanged(({ publishedVersion }) => setPublishedVersion(publishedVersion));
  }, []);

  return (
    <YamlEditor
      key={publishedVersion}
      jsonValue={initValue}
      onChange={handleChange}
      onError={handleError}
    />
  );
};

const Container = styled.div`
  .header {
    margin-bottom: 6px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .note-wrapper {
      width: 200px;
      flex-grow: 1;
      margin-right: 16px;
    }
  }

  .cm-s-mf-plugin.CodeMirror,
  .cm-s-mf-plugin .CodeMirror-gutters {
    background-color: ${({ error }) => (error ? '#fff5f7' : 'white')};
  }

  .editor-wrapper {
    max-height: 600px;
    overflow-y: auto;

    .error-line {
      color: red;
    }
  }
`;

const YamlEditor = ({ jsonValue, onChange, onError }) => {
  const [error, setError] = React.useState(null);
  const [currentText, setCurrentText] = React.useState('');
  const textValue = yaml.dump(jsonValue);

  const handleChange = (editor, data, text) => {
    try {
      setCurrentText(text);
      const json = yaml.safeLoad(text);
      onChange(json);
      onError(false);
      if (error) {
        editor.getAllMarks().forEach(m => m.clear());
        setError(null);
      }
    } catch (err) {
      onError(true);
      setError(err);
      const errLineNumber = err.mark.line;
      editor.doc.markText(
        { line: errLineNumber, ch: 0 },
        { line: errLineNumber },
        { className: 'error-line' },
      );
      window.editor = editor;
      window.data = data;
    }
  };

  const handlePrettify = () => {
    setCurrentText('');
  };

  const handleUndo = () => {
    setCurrentText('');
    setError(null);
    onError(false);
  };

  return (
    <Container error={!!error}>
      <div className="header">
        {!!error ? (
          <>
            <div className="note-wrapper">
              <Note noteType="negative" text={error.message}>
                {error.message}
              </Note>
            </div>
            <Button buttonType="negative" onClick={handleUndo}>
              Undo
            </Button>
          </>
        ) : (
          currentText && (
            <>
              <div className="note-wrapper">
                <Note noteType="primary">Content changed</Note>
              </div>
              <Button buttonType="primary" onClick={handlePrettify}>
                Prettify
              </Button>
            </>
          )
        )}
      </div>
      <div className="editor-wrapper">
        <CodeMirror
          value={currentText || textValue}
          options={{
            mode: 'text/x-yaml',
            theme: 'mf-plugin',
            lineNumbers: true,
          }}
          onBeforeChange={handleChange}
          onChange={(editor, data, value) => {}}
        />
      </div>
    </Container>
  );
};

export default App;
