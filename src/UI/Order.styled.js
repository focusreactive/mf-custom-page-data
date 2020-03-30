import styled from '@emotion/styled';

export const Container = styled.div`
  color: ${({ theme }) => theme.palette.textMain};
  background-color: ${({ theme }) => theme.palette.backgroundMain};
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 400px;
  margin-right: 6px;


  .toolbar-holder {
    margin: 0;
    padding: 0;
    flex: none;
  }

  .list-holder {
    flex-grow: 1;
    flex-shrink: 1;
    min-width: 100px;
    height: 100px;
    overflow-y: auto;
    padding: 6px 0px;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin-bottom: 6px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
    }
  }
`;
