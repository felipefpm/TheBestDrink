import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  width: 100%;
  height: 2rem;
  justify-content: center;
`;

export const Options = styled.select`
  margin-right: 1rem;
  border-radius: 5%;
  border: none;

  :focus{
    outline: 0;
  }
`;

export const Search = styled.input`
  border-start-start-radius: 5%;
  border-end-start-radius: 5%;
  padding-left: 0.5rem;
  border: none;

  :focus{
    outline: 0;
  }

`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: 2rem;
  font-size: 1.5rem;
  background-color: #e1e6e9;

  border-end-end-radius: 10%;
  border-start-end-radius: 10%;
`;
