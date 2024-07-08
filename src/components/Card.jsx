function Card({ data }) {
  console.log(`Data:`, data)

  return (
    <>
      <h1>{data.name}</h1>
      <img src={data.sprites.front_default} alt={data.name} />
    </>
  )
}

export default Card
