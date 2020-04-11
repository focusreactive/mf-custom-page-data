import React from 'react';

import App from './App';
import CM from './YamlEditor';
import { createSdk } from './utils/sdk-mock';
import styled from '@emotion/styled';

export default {
  title: 'Extension',
  component: App
};

const EditorEmulator = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  padding-top: 30px;

  .entity-editor__field-group {
    display: block;
    margin-top: 19px;
    margin-bottom: 29px;
    padding-left: 1em;
    border-left: 3px solid #4a90e2;
    transition: border-color 0.18s linear;
    width: 720px;

    .entity-editor__field-locale {
      margin: 0;

      .entity-editor__field-heading {
        display: flex;
        font-size: 14px;
        line-height: 24px;
        color: #8091a5;
        width: 100%;
        max-width: 800px;
      }

      .entity-editor__control-group {
      }
    }
  }
`;

export const AppStory = () => (
  <EditorEmulator>
    <div className="entity-editor__field-group">
      <div className="entity-editor__field-locale">
        <div className="entity-editor__field-heading">
          Data
        </div>
        <div className="entity-editor__control-group">
          <CM sdk={createSdk()} />
        </div>
      </div>
    </div>
  </EditorEmulator>
);

AppStory.story = {
  name: 'Default'
};
