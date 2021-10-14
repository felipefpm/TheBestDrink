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
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 64rem;
  margin-top: 3rem;
`;

export const Imagem = styled.div`
  display: flex;
  justify-content: center;
  max-width: 100%;
  height: 25rem;
`;
