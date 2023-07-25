import { createContext, useState } from "react";

export const TotalVotesContext = createContext()

export const TotalVotesProvider = ({ children }) => {
  const [ firstCandidate, setFirstCandidate ] = useState(0)
  const [ secondCandidate, setSecondCandidate ] = useState(0)
  const [ thirdCandidate, setThirdCandidate ] = useState(0)
  const [ fourthCandidate, setFourthCandidate ] = useState(0)
  const [ totalVotes, setTotalVotes ] = useState(0)

  const handleIndividualVote = (candidate) => {
    if (candidate === 1) {
      setFirstCandidate(firstCandidate + 1)
      setTotalVotes(totalVotes + 1)
    } else if (candidate === 2) {
      setSecondCandidate(secondCandidate + 1)
      setTotalVotes(totalVotes + 1)
    } else if (candidate === 3) {
      setThirdCandidate(thirdCandidate + 1)
      setTotalVotes(totalVotes + 1)
    } else {
      setFourthCandidate(fourthCandidate + 1)
      setTotalVotes(totalVotes + 1)
    }
  }

  // const handleTotalVotes = () => {
  //   setTotalVotes(totalVotes + 1)
  // }

  return (
    <TotalVotesContext.Provider
      value={{
        totalVotes,
        firstCandidate,
        secondCandidate,
        thirdCandidate,
        fourthCandidate,
        handleIndividualVote
      }}>
      {children}
    </TotalVotesContext.Provider>
  )
}