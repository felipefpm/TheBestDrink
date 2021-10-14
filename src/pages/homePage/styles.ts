import styled from 'styled-components';

export const Line = styled.span`
  width: 100%;
  border-bottom: solid 0.125rem #e1e6e9;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #933838;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 64rem;
  align-items: center;
  justify-content: center;
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

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 64rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1rem 0;
    justify-content: center;
    align-items: center;
  }

  ul {
    display: flex;
    gap: 2rem;
    list-style-type: none;
  }

`;
