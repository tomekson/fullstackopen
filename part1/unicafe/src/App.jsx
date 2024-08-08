import { useState } from 'react'

const Statistics = (props) => {
  return (
    <div><h2>statistics</h2>
      {props.total ? (
        <>
          
          <p>good {props.good}</p>
          <p>neutral {props.neutral}</p>
          <p>bad {props.bad}</p>
          <p>all {props.total}</p>
          <p>average {props.average}</p>
          <p>positive {props.positivePercentage} %</p>
        </>
      ) : (
        <p>no feedback given</p>
      )}
    </div>
  )
}

  const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodClick = () => {
      setGood(good + 1)
    }

    const handleNeutralClick = () => {
      setNeutral(neutral + 1)
    }

    const handleBadClick = () => {
      setBad(bad + 1)
    }
    const total = good + neutral + bad
    const average = (good - bad) / total
    const positivePercentage = (good / total) * 100

    return (
      <div>
        <h2>give feedback</h2>
        <button onClick={handleGoodClick}>good</button>
        <button onClick={handleNeutralClick}>neutral</button>
        <button onClick={handleBadClick}>bad</button>
        <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positivePercentage={positivePercentage} />
     </div>
    )
  }

export default App