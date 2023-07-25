import './TotalVotes.css'

const TotalVotes = ({ numOfVotes }) => {
  return (
    <div className='total-votes'>
      <h2 className='total-votes__title'>Total votes</h2>
      <p className='total-votes__number'>{numOfVotes}</p>
    </div>
  )
}

export default TotalVotes