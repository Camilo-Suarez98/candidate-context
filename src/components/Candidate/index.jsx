import './Candidate.css'

const Candidate = ({ num, photoCandidate, onClick }) => {

  return (
    <div className="candidate">
      <h2 className='candidate__name'>Candidate {num}</h2>
      <img className='candidate__image' src={photoCandidate} alt="candidate" />
      <button className='candidate__button' type='button' onClick={onClick}>Vote</button>
    </div>
  )
}

export default Candidate