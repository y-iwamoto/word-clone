import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessInput, setGuessInput] = React.useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ guess: guessInput.toUpperCase() })
    setGuessInput('')
  }
  return <form className="guess-input-wrapper" onSubmit={handleSubmit}>
    <label htmlFor="guess-input">Enter guess:</label>
    <input id="guess-input" type="text" value={guessInput} onChange={(e) => {
      setGuessInput(e.target.value)
    }} pattern='.{5}' />
  </form>;
}

export default Game;
