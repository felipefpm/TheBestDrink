import React, { useContext } from 'react';
import FilterLetterComponent from '../../components/filterLetterComponent';
import SearchComponent from '../../components/searchComponent';

import Logo from '../../assets/icons/Logo.png'

import { Container, Header, Content, Footer, Line } from './styles';
import { IngredientCard, DrinkCard } from '../../components/card';
import { TheBestDrinkContext } from '../../context/theBestDrinkContext';

function HomePage() {
const { searchType } = useContext(TheBestDrinkContext)

  return (
    <Container>
      <Header>
        <a href="/">
          <img src={Logo} alt="logo" />
        </a>
        <Line />
        <SearchComponent />
        <FilterLetterComponent />
        <Line />
      </Header>

      
      <Content>
        <div className="cardContent">
          { searchType === 's' ? <DrinkCard /> : null }
          { searchType === 'i' ? <IngredientCard /> : null }
        </div>
      </Content> 
      
      <Line />

      <Footer>
        <div>
          <p>All rights reserved!</p>
          <p>TheBestDrink</p>
        </div>
        <ul>
          <li><a href="/">Abaut</a></li>
          <li><a href="/">FAQ</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </Footer>
    </Container>
  );
};

export default HomePage;
