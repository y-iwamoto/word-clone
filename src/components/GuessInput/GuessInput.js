import React from 'react';

function GuessInput() {
  const [guessInput, setGuessInput] = React.useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ guess: guessInput.toUpperCase() });
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
