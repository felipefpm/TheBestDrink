import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';

import { MdSearch } from "react-icons/md";
import { TheBestDrinkContext } from '../../context/theBestDrinkContext';

import { Container, Options, Search, Button } from './styles';

function SearchComponent() {
  const { setSearchDrink, setSearchType } = useContext(TheBestDrinkContext)
  const [searchResults, setSearchResults] = useState('');
  const [select, setSelect] = useState('');

  function handlerGetDrink(e: ChangeEvent<HTMLInputElement>) {
    const searchValue = e.target.value

    setSearchResults(searchValue)
  }

  function search(e: FormEvent) {
    e.preventDefault()
    setSearchDrink(searchResults)
    setSearchType(select)
  }

  return (
    <Container>
      <Options value={select} id="typeDrink" onChange={(e) => setSelect(e.target.value)}>
        <option value="">Filter</option>
        <option value="s">Drink</option>
        <option value="i">Ingredient</option>
      </Options>
      <Search type="text" onChange={handlerGetDrink} placeholder="Search your drink"/>
      <Button type="submit" onClick={search}>
        <MdSearch className="searchIcon"/>
      </Button>
    </Container>
  );
};

export default SearchComponent;
