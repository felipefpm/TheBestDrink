import React from 'react';
import { LetterCard } from '../../components/card';
import FilterLetterComponent from '../../components/filterLetterComponent';
import { Header, Line } from '../homePage/styles';
import Logo from '../../assets/icons/Logo.png'

import { Container, Content } from './styles';

function FilterLetter() {
  
  return (
    <Container>
      <Header>
        <div>
          <a href="/">
            <img src={Logo} alt="logo" />
          </a>
        </div>
        <Line />
        <FilterLetterComponent />
        <Line />
      </Header>
      <Content>
        <div className="cardContent">
          <LetterCard />
        </div>
      </Content>
    </Container>
  );
};

export default FilterLetter;
