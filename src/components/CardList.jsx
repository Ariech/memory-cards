import Card from './Card'

function CardList({ itemsList }) {
  return (
    <div className="card-container">
      {itemsList.map((item, index) => (
        <>
          <Card key={index} data={item} />
        </>
      ))}
    </div>
  )
}

export default CardList
