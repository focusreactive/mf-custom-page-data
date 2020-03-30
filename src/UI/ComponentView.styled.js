import styled from '@emotion/styled';

export const Container = styled.div`
  flex-grow: 1;
  min-width: 200px;
  min-height: 200px;
  max-height: 100%;
  overflow: auto;
  background-color: ${({ theme }) => theme.palette.backgroundMain};
`;
