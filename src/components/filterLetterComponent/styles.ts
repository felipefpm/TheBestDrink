import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-bottom: 0.5rem;
  }
`;

export const Line = styled.div`
  height: 1rem;
  width: 0.125rem;
  margin: 0 0.25rem;
  background-color: #e1e6e9;
`;


export const ListLeetter = styled.ul`
  display: flex;
`;

export const Letter = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LinkLatter = styled.button`
  color: #e1e6e9;
  background-color: transparent;
  border: none;

  &:hover {
    cursor: pointer;
  }
`