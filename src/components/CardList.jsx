import Card from './Card'
import styles from '../styles/CardList.module.css'

function CardList({ itemsList, handleClick }) {
  return (
    <>
      {itemsList.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.card_container}>
          {itemsList.map((item) => (
            <Card key={item.id} data={item} handleClick={handleClick} />
          ))}
        </div>
      )}
    </>
  )
}

export default CardList
