import React, { useContext } from 'react';
import { TheBestDrinkContext } from '../../context/theBestDrinkContext';

import { Container, ListLeetter, Letter, Line, LinkLatter } from './styles';

function FilterLetterComponent() {
const { setLetter } = useContext(TheBestDrinkContext)

  return (
    <Container>
      <p>Filter your drink per initial letter</p>
      <ListLeetter>
        <Line />
        <Letter>
          <LinkLatter onClick={() => setLetter('a')}>A</LinkLatter>
        </Letter>
        <Line />
        <Letter>
          <LinkLatter onClick={() => setLetter('b')}>B</LinkLatter>
        </Letter>
        <Line />
        <Letter>
          <LinkLatter onClick={() => setLetter('c')}>C</LinkLatter>
        </Letter>
        <Line />
        <Letter>
          <LinkLatter onClick={() => setLetter('d')}>D</LinkLatter>
        </Letter>
        <Line />
        <Letter>
          <LinkLatter onClick={() => setLetter('e')}>E</LinkLatter>
        </Letter>
        <Line />
        <Letter>
          <LinkLatter onClick={() => setLetter('f')}>F</LinkLatter>
        </Letter>
        <Line />
        <Letter>
          <LinkLatter onClick={() => setLetter('g')}>G</LinkLatter>
        </Letter>
        <Line />
        <Letter>
          <LinkLatter onClick={() => setLetter('h')}>H</LinkLatter>
        </Letter>
        <Line />
        <Letter>
          <LinkLatter onClick={() => setLetter('i')}>I</LinkLatter>
        </Letter>
        <Line />
        <Letter>
          <LinkLatter onClick={() => setLetter('j')}>J</LinkLatter>
        </Letter>
        <Line />
        <Letter>
          <LinkLatter onClick={() => setLetter('k')}>K</LinkLatter>
        </Letter>
        <Line />
        <Letter>
          <LinkLatter onClick={() => setLetter('l')}>L</LinkLatter>
        </Letter>
        <Line />
        <Letter>
          <LinkLatter onClick={() => setLetter('m')}>M</LinkLatter>
        </Letter>
        <Line />
        <Letter>
          <LinkLatter onClick={() => setLetter('n')}>N</LinkLatter>
        </Letter>
        <Line />
        <Letter>
          <LinkLatter onClick={() => setLetter('o')}>O</LinkLatter>
        </Letter>
        <Line />
        <Letter>
          <LinkLatter onClick={() => setLetter('p')}>P</LinkLatter>
        </Letter>
        <Line />
        <Letter>
          <LinkLatter onClick={() => setLetter('q')}>Q</LinkLatter>
        </Letter>
        <Line />
        <Letter>
          <LinkLatter onClick={() => setLetter('r')}>R</LinkLatter>
        </Letter>
        <Line />
        <Letter>
          <LinkLatter onClick={() => setLetter('s')}>S</LinkLatter>
        </Letter>
        <Line />
        <Letter>
          <LinkLatter onClick={() => setLetter('t')}>T</LinkLatter>
        </Letter>
        <Line />
        <Letter>
          <LinkLatter onClick={() => setLetter('u')}>U</LinkLatter>
        </Letter>
        <Line />
        <Letter>
          <LinkLatter onClick={() => setLetter('v')}>V</LinkLatter>
        </Letter>
        <Line />
        <Letter>
          <LinkLatter onClick={() => setLetter('w')}>W</LinkLatter>
        </Letter>
        <Line />
        <Letter>
          <LinkLatter onClick={() => setLetter('x')}>X</LinkLatter>
        </Letter>
        <Line />
        <Letter>
          <LinkLatter onClick={() => setLetter('y')}>Y</LinkLatter>
        </Letter>
        <Line />
        <Letter>
          <LinkLatter onClick={() => setLetter('z')}>Z</LinkLatter>
        </Letter>
        <Line />
      </ListLeetter>
    </Container>
  );
};

export default FilterLetterComponent;
