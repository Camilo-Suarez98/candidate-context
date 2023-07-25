import './App.css'
import { useContext } from 'react'
import { TotalVotesContext } from './store/TotalVotesContext'
import Candidate from './components/Candidate'
import TotalVotes from './components/TotalVotes'

function App() {
  const store = useContext(TotalVotesContext)

  return (
    <div className='main'>
      <h1>Choose your candidate</h1>
      <div className="candidates">
        <Candidate
          num={1}
          photoCandidate='https://petcostumecenter.com/wp-content/uploads/2020/05/580413_PS_PAW_BILL_SUIT-scaled.jpg'
          onClick={() => store.handleIndividualVote(1)}
        />
        <Candidate
          num={2}
          photoCandidate='https://petcostumecenter.com/wp-content/uploads/2020/05/580413_PS_PAW_BILL_SUIT-scaled.jpg'
          onClick={() => store.handleIndividualVote(2)}
        />
        <Candidate
          num={3}
          photoCandidate='https://petcostumecenter.com/wp-content/uploads/2020/05/580413_PS_PAW_BILL_SUIT-scaled.jpg'
          onClick={() => store.handleIndividualVote(3)}
        />
        <Candidate
          num={4}
          photoCandidate='https://petcostumecenter.com/wp-content/uploads/2020/05/580413_PS_PAW_BILL_SUIT-scaled.jpg'
          onClick={() => store.handleIndividualVote(4)}
        />
      </div>

      <div className="total-votes-section">
        <TotalVotes
          numOfVotes={store.totalVotes}
        />
      </div>

      <div className="single-votes-section">
        <h3>Votes by candidate</h3>
        <p>C1: {store.firstCandidate}</p>
        <p>C2: {store.secondCandidate}</p>
        <p>C3: {store.thirdCandidate}</p>
        <p>C4: {store.fourthCandidate}</p>
      </div>
    </div>
  )
}

export default App
