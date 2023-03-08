import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResult from '../GuessResult';
import Banner from '../Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);
  const [status, setStatus] = React.useState('');
  return (
    <>
      {status && <Banner status={status} guessResults={guessResults} />}
      <GuessResult guessResults={guessResults} answer={answer} />
      <GuessInput setGuessResults={setGuessResults} guessResults={guessResults} answer={answer} setStatus={setStatus} />
    </>
  );
}

export default Game;
