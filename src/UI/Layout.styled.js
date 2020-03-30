import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 1000px;
  /* min-height: 600px; */
  background-color: ${({ theme }) => theme.palette.backgroundMain};

  &[data-full='true'] {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;

export const ComponensRow = styled.div`
  max-height: 400px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  background-color: ${({ theme }) => theme.palette.backgroundMain};

`;

export const EditorHolder = styled.div`
  margin-top: 8px;
  padding-top: 2px;
  max-height: 500px;
  background-color: ${({ theme }) => theme.palette.backgroundMain};
`;
