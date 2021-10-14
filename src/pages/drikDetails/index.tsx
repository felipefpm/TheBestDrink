import React from 'react';

import ImgTest from '../../assets/images/Background.jpeg'
import { Container, Content, Imagem } from './styles';

function DrikDetails() {

  return (
    <Container>
      <Content>
        <Imagem>
          <img src={ImgTest} alt="drinks" />
        </Imagem>
        <h1>Titulo</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
          industry. Lorem Ipsum has been the industry's standard dummy text 
          ever since the 1500s, when an unknown printer took a galley of type 
          and scrambled it to make a type specimen book. It has survived not 
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s 
          with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus 
          PageMaker including versions of Lorem Ipsum.
        </p>
      </Content>
    </Container>
  );
};

export default DrikDetails;
