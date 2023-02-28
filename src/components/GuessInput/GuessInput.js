import React from 'react';

function GuessInput({ guessResults, setGuessResults }) {
  const [guessInput, setGuessInput] = React.useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const guess = guessInput.toUpperCase();

    const nowGuessResults = [...guessResults]
    nowGuessResults.push({ value: guess, key: Math.random() })
    setGuessResults(nowGuessResults)

    console.log({ guess });
    setGuessInput('');
  };
  return <form className="guess-input-wrapper" onSubmit={handleSubmit}>
    <label htmlFor="guess-input">Enter guess:</label>
    <input id="guess-input" type="text"
      maxLength={5}
      minLength={5}
      value={guessInput}
      onChange={(e) => {
        setGuessInput(e.target.value);
      }}
      pattern='[A-Za-z]{5}' />
  </form>;
}

export default GuessInput;
