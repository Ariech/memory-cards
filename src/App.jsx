import './styles/App.css'
import Header from './components/Header'
import { useState } from 'react'
import Main from './components/Main'

function App() {
  const [score, setScore] = useState(0)
  const [highscore, setHighscore] = useState(0)

  const url = 'https://pokeapi.co/api/v2/pokemon/'

  const checkHighscore = (newScore) => {
    if (newScore > highscore) {
      setHighscore(newScore)
    }
  }

  return (
    <>
      <header>
        <Header title={'Memory Cards'} score={score} highscore={highscore} />
      </header>
      <main>
        <Main url={url} setScore={setScore} checkHighscore={checkHighscore} />
      </main>
    </>
  )
}

export default App
