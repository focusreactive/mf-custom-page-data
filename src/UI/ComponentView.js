import React from 'react';
import ReactJson from '@usulpro/react-json-view';

import * as styled from './ComponentView.styled';

const ComponentView = ({ data }) => {
  return (
    <styled.Container>
      <ReactJson src={data} />
    </styled.Container>
  );
};

export default ComponentView;
