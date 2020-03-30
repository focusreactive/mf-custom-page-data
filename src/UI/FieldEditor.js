import React from 'react';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

import * as styled from './FieldEditor.styled';
import Toolbar from './Toolbar';
import Button from './Button';

const FieldEditor = ({ value, onEdit, onFinishEditing, pathString, toggleExpand }) => {
  const editorInstance = React.useRef(null);

  const handleChange = cb => () => {
    if (!editorInstance || !editorInstance.current) {
      return;
    }
    // editorInstance.current;
    const instance = editorInstance.current.getInstance();
    const newValue = instance.getMarkdown();
    if (cb) {
      cb(newValue);
    }
  };

  return (
    <styled.Container>
      <div className="toolbar-holder">
        <Toolbar>
          <h3>Field editor</h3>
          <Button onClick={toggleExpand}>Expand</Button>
        </Toolbar>
      </div>
      <Editor
        key={pathString}
        initialValue={value}
        previewStyle="vertical"
        height="250px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={handleChange(onEdit)}
        onBlur={handleChange(onFinishEditing)}
        ref={editorInstance}
      />
    </styled.Container>
  );
};

export default FieldEditor;
