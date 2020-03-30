import React from 'react';
import ReactJson from '@usulpro/react-json-view';
import { EntryCard } from '@contentful/forma-36-react-components';

import * as styled from './ComponentView.styled';
import Toolbar from './Toolbar';
import Button from './Button';

const NoSelectedMessage = 'Please select a component to inspect properties';
const NoDataMessage = `This component doesn't have any stored data`;

const Info = ({ title, }) => {
  const description = title ? NoDataMessage : NoSelectedMessage;
  return <EntryCard title={title} description={description} />;
};

const ComponentView = ({ data, title, onSelect, toggleExpand }) => {
  return (
    <styled.Container>
      <div className="toolbar-holder">
        <Toolbar>
          <h3>Component inspector</h3>
          <Button onClick={toggleExpand}>Expand</Button>
        </Toolbar>
      </div>
      {data ? (
        <ReactJson src={data} name={title} collapsed={2} onSelect={onSelect} />
      ) : (
        <Info title={title} />
      )}
    </styled.Container>
  );
};

export default ComponentView;
