import React, { useContext } from 'react';
import { TheBestDrinkContext } from '../../context/theBestDrinkContext';

import { CardCardContent } from './style'

export function DrinkCard() {
  const { drink } = useContext(TheBestDrinkContext)

  return (
    <>
      {
        drink?.drinks.map(d => (
          <CardCardContent key={d.idDrink}>
            <img src={d.strDrinkThumb?.toString()} alt={d.strDrink?.toString()} />
            <h3><a href="/">{d.strDrink}</a></h3>
          </CardCardContent>
        ))
      }
    </>
  )
}

export function IngredientCard() {
  const { ingredient } = useContext(TheBestDrinkContext)

  return (
    <>
      {
        ingredient?.ingredients.map(i => (
          <CardCardContent key={i.idIngredient}>
            <h3>{i.strIngredient}</h3>
            <p>{i.strDescription}</p>
          </CardCardContent>
        ))
      }
    </>
  )
}

export function LetterCard() {
  const { letterItens } = useContext(TheBestDrinkContext)

  return (
    <>
      {
        letterItens?.drinks.map(l => (
          <CardCardContent key={l.idDrink}>
            <img src={l.strDrinkThumb?.toString()} alt={l.strDrink?.toString()} />
            <h3><a href="/">{l.strDrink}</a></h3>
          </CardCardContent>
        ))
      }
    </>
  )
}