function Banner({ status, guessResults }) {

  if (!status) return null;

  const bannerComponent = status === 'happy' ? (<p>
    <strong>Congratulations!</strong> Got it in
    <strong>{guessResults.length} guesses</strong>.
  </p>) : (<p>Sorry, the correct answer is <strong>LEARN</strong>.</p>)

  return (
    <div className={`banner ${status}`} >
      {bannerComponent}
    </div >
  )
}

export default Banner;