import Card from './Card'
import styles from '../styles/CardList.module.css'

function CardList({ itemsList }) {
  return (
    <>
      {itemsList.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.card_container}>
          {itemsList.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </div>
      )}
    </>
  )
}

export default CardList
