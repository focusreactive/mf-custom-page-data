import React from 'react';
import styled from '@emotion/styled';

const Container = styled.button`
  font-size: 12px;
  padding: 4px;
  background-color: ${({ theme }) => theme.palette.backgroundMain};
  border: 1px solid ${({ theme }) => theme.palette.backgroundMain};
  border-radius: 2px;
  :hover {
    background-color: ${({ theme }) => theme.palette.hover};
  }
`;

const Button = ({ children, onClick }) => {
  return <Container onClick={onClick}>{children}</Container>;
};

export default Button;
