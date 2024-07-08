import { useEffect, useState } from 'react'
import CardList from './CardList'

function Main({ url }) {
  const [cardList, setCardList] = useState([])

  const fetchData = async (url) => {
    try {
      const promises = []
      for (let i = 1; i <= 10; i++) {
        promises.push(fetch(url + i).then((response) => response.json()))
      }
      const data = await Promise.all(promises)
      setCardList(data)
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error)
    }
  }

  useEffect(() => {
    fetchData(url)
  }, [url])

  return <CardList itemsList={cardList} />
}

export default Main
