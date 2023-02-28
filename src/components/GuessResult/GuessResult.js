function GuessResult({ guessResults }) {
  return (
    <div className="guess-results">
      {guessResults.map((guess) => (
        <p key={guess.key} className="guess">{guess.value}</p>
      ))}
    </div>
  )
}

export default GuessResult;