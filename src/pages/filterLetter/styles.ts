import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #933838;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 64rem;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0;

  .cardContent {
    display: flex;
    gap: 1rem;
    max-width: 64rem;
    overflow: auto;
  }
`;


