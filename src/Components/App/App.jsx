import { useState, useEffect } from 'react';
import Description from '../Description/Description';
import Options from '../Options/Options'
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

export default function App () {

  const [reviews, setReviews] = useState(() => {
    const savedReviews = localStorage.getItem("click-count");
      if (savedReviews !== null) {
        return JSON.parse(savedReviews)
      }
      return {
        good: 0,
        neutral: 0,
        bad: 0
      }
    });

  useEffect(() => {
    localStorage.setItem("click-count", JSON.stringify(reviews))
, [reviews]})

  const updateFeedback = feedbackType => {
    setReviews({
          ...reviews,
          [feedbackType]: reviews[feedbackType] + 1,
        })
    }
  const goodCount = reviews.good
  const neutralCount = reviews.neutral
  const badCount = reviews.bad
  const totalFeedback = goodCount + neutralCount + badCount
  const positiveTotal = Math.round((goodCount / totalFeedback) * 100)

  const resetClick = () => {
    setReviews({
      good: 0,
      neutral: 0,
      bad: 0
  })
  }

  return (
    <div>
      <Description />
      <Options onUpdate={updateFeedback} onReset={resetClick} totalFeedback={totalFeedback}/>
      {totalFeedback > 0 ? (
      <Feedback good={goodCount} neutral={neutralCount} bad={badCount} total={totalFeedback} positivePercent={positiveTotal}/>
      ) : (
      <Notification />
      )}
    </div>
  )
}