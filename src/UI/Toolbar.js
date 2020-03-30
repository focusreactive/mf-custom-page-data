import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.backgroundAccent};
  padding: 6px;

  &>* {
    margin: 0 10px 0 0;
  }

  h3 {
    padding: 0;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    font-family: sans-serif;
    font-stretch: condensed;
  }
`;

const Toolbar = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Toolbar;
