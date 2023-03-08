import Guess from "../Guess/Guess";
import { range } from '../../utils'

import { NUM_OF_GUESSES_ALLOWED } from "../../constants"

function GuessResult({ guessResults, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
        const guess = guessResults[num]
        const key = guess ? guess.key : `${num}`;
        const value = guess ? guess.value : '';
        return (<Guess key={key} value={value} answer={answer} />)
      })}
    </div>
  )
}

export default GuessResult;