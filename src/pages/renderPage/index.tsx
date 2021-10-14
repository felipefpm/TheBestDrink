import React, { useContext } from 'react';
import { TheBestDrinkContext } from '../../context/theBestDrinkContext';

import FilterLetter from './../filterLetter/index';
import HomePage from './../homePage/index';

function RenderPage() {
  const { letterItens } = useContext(TheBestDrinkContext)

  return (
    <>
      {letterItens !== '' ? <FilterLetter /> : <HomePage /> }
    </>
  );
};

export default RenderPage;
