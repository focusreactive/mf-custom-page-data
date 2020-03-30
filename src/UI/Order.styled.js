import styled from '@emotion/styled';

export const Container = styled.div`
  color: ${({ theme }) => theme.palette.textMain};
  min-width: 100px;
  overflow-y: auto;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      padding: 8px;
      background-color: gray;
      margin-bottom: 2px;
    }
  }
`;
