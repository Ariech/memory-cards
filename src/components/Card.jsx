import styles from '../styles/Card.module.css'

function Card({ data }) {
  return (
    <div className={styles.card}>
      <p className={styles.card_gradient_text}>{data.name.toUpperCase()}</p>
      <img
        className={styles.card_image}
        src={data.sprites.front_default}
        alt={data.name}
      />
    </div>
  )
}

export default Card
