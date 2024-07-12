import { useEffect, useState } from 'react'
import CardList from './CardList'
import { generateRandomNumber, shuffleArray } from '../utilities/utils'

function Main({ url, setScore }) {
  const [cardList, setCardList] = useState([])
  const [clickedCardIds, setClickedCardIds] = useState([])

  const handleClick = (id) => {
    if (clickedCardIds.includes(id)) {
      setScore(0)
      setClickedCardIds([])
      fetchData(url)
    } else {
      setClickedCardIds([...clickedCardIds, id])
      setScore((prevScore) => prevScore + 1)
      setCardList([...shuffleArray(cardList)])
    }
  }

  const fetchData = async (url) => {
    try {
      const uniqueNumbers = generateRandomNumber(1, 1000, 10)
      const promises = uniqueNumbers.map((number) =>
        fetch(`${url}${number}`).then((response) => response.json())
      )

      const data = await Promise.all(promises)
      setCardList(data)
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error)
    }
  }

  useEffect(() => {
    fetchData(url)
  }, [url])

  return <CardList itemsList={cardList} handleClick={handleClick} />
}

export default Main
