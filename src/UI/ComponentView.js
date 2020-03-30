import React from 'react';
import ReactJson from '@usulpro/react-json-view';

import * as styled from './ComponentView.styled';

const ComponentView = ({ data, title, onSelect }) => {
  return (
    <styled.Container>
      {data ? (
        <ReactJson src={data} name={title} collapsed={2} onSelect={onSelect} />
      ) : (
        'Select Component'
      )}
    </styled.Container>
  );
};

export default ComponentView;
