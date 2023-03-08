import { range } from '../../utils'
import { checkGuess } from '../../game-helpers'

function Guess({ value, answer }) {
  const checkGuessResults = checkGuess(value, answer)
  return (
    <p className="guess">
      {range(5).map((num) => {
        const guessString = value ? value.substr(num, 1) : ''
        return (<span key={`${num}`} className={`cell ${checkGuessResults && checkGuessResults[num].status}`} > {guessString}</span>)
      })}
    </p >
  )
}

export default Guess;