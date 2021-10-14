import styled from 'styled-components';

export const CardCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px #e1e6e9;

  a {
    color: #e1e6e9;
    text-decoration: none;

    &:hover {
      color: orange;
    }
  }
  
  img {
    height: 10rem;
    width: 10rem;
  }
  
`