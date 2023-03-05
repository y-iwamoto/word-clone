import { range } from '../../utils'

function Guess({ value }) {
  return (
    <p className="guess">
      {range(5).map((num) => {
        const guessString = value ? value.substr(num, 1) : ''
        return (<span key={`${num}`} className="cell">{guessString}</span>)
      })}
    </p>
  )
}

export default Guess;