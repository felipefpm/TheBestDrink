import React, { useEffect, useState } from 'react';
import { api } from '../services/api';

type DrinksContext = {
  drink: Drinks | null | undefined
  ingredient: Ingredients | null | undefined
  letterItens: Drinks | string | undefined
  searchType: string | undefined
  setLetter: (param: string) => void
  setSearchType: (param: string) => void
  setSearchDrink: (param: string) => void
}

type Ingredients = {
  ingredients: DataIngredients[]
}

type DataIngredients = {
  idIngredient: string | null
  strIngredient: string | null
  strDescription: string | null
  strType: string | null
  strAlcohol: string | null
  strABV: string | null
}

type Drinks = {
  drinks: DataDrinks[]
}

type DataDrinks = {
  idDrink: string | null
  strDrink: string | null
  strDrinkAlternate: string | null
  strTags: string | null
  strVideo: string | null
  strCategory: string | null
  strIBA: string | null
  strAlcoholic: string | null
  strGlass: string | null
  strInstructions: string | null
  strInstructionsES: string | null
  strInstructionsDE: string | null
  strInstructionsFR: string | null
  strInstructionsIT: string | null
  strInstructionsZHHANS: string | null
  strInstructionsZHHANT: string | null
  strDrinkThumb: string | null
  strIngredient1: string | null
  strIngredient2: string | null
  strIngredient3: string | null
  strIngredient4: string | null
  strIngredient5: string | null
  strIngredient6: string | null
  strIngredient7: string | null
  strIngredient8: string | null
  strIngredient9: string | null
  strIngredient10: string | null
  strIngredient11: string | null
  strIngredient12: string | null
  strIngredient13: string | null
  strIngredient14: string | null
  strIngredient15: string | null
  strMeasure1: string | null
  strMeasure2: string | null
  strMeasure3: string | null
  strMeasure4: string | null
  strMeasure5: string | null
  strMeasure6: string | null
  strMeasure7: string | null
  strMeasure8: string | null
  strMeasure9: string | null
  strMeasure10: string | null
  strMeasure11: string | null
  strMeasure12: string | null
  strMeasure13: string | null
  strMeasure14: string | null
  strMeasure15: string | null
  strImageSource: string | null
  strImageAttribution: string | null
  strCreativeCommonsConfirmed: string | null
}

export const TheBestDrinkContext = React.createContext({} as DrinksContext)

export const TheBestDrinkProvider: React.FC = ({children}) => {
  const [drink, setDrink] = useState<Drinks | null>(null)
  const [ingredient, setIngredient] = useState<Ingredients | null>(null)
  const [letterItens, setLetterItens] = useState<Drinks | string>()
  const [letter, setLetter] = useState<string>()
  const [searchDrink, setSearchDrink] = useState<string>('')
  const [searchType, setSearchType] = useState<string>('s')

  useEffect(() => {
    
    async function getDrinks () {
    try {
      const {data} = await api.get(`search.php?${searchType}=${searchDrink}`)

      if (searchType === 's') {
        setDrink(data)
      }
      if (searchType === 'i') {
        setIngredient(data)
      }
      
    } catch (error) {
      console.error(error)
    }
   }

    getDrinks()
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drink, searchDrink, searchType])

  useEffect(() => {
    async function getLetterDrinks () {
    try {
      const {data} = await api.get(`search.php?f=${letter}`)
      setLetterItens(data)
      
    } catch (error) {
      console.error(error)
    }
   }

   getLetterDrinks()
  }, [letter])

  return (
    <TheBestDrinkContext.Provider value={{letterItens, setLetter, drink, setSearchDrink, setSearchType, ingredient, searchType}}>
      {children}
    </TheBestDrinkContext.Provider>
  )
}