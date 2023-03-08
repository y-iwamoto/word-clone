import React from 'react';

function GuessInput({ guessResults, setGuessResults, answer, setStatus }) {
  const [guessInput, setGuessInput] = React.useState('');
  const [isDisabledInputText, setIsDisabledInputText] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const guess = guessInput.toUpperCase();

    const nowGuessResults = [...guessResults]
    nowGuessResults.push({ value: guess, key: Math.random() })
    setGuessResults(nowGuessResults)

    console.log({ guess });
    setGuessInput('');

    if (guess === answer) {
      setStatus('happy')
      setIsDisabledInputText(true)
      return;
    }

    if (nowGuessResults.length === 6) {
      setStatus('sad')
      setIsDisabledInputText(true)
      return;
    }

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
      pattern='[A-Za-z]{5}'
      disabled={isDisabledInputText} />
  </form>;
}

export default GuessInput;
