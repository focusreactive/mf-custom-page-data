import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 1000px;
  background-color: ${({ theme }) => theme.palette.backgroundAccent};

  &[data-full='true'] {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;

export const ComponensRow = styled.div`
  max-height: 600px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  background-color: ${({ theme }) => theme.palette.backgroundMain};
`;

export const EditorHolder = styled.div`
  margin-top: 8px;
  max-height: 300px;
  background-color: ${({ theme }) => theme.palette.backgroundMain};
`;
