import { useState } from 'react';
import Description from '../Description/Description';
import Options from '../Options/Options'
import Feedback from '../Feedback/Feedback';

export default function App () {
  const [reviews, setReviews] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

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

  return (
    <div>
      <Description />
      <Options onUpdate={updateFeedback}/>
      <Feedback good={goodCount} neutral={neutralCount} bad={badCount} total={totalFeedback}/>
      
    </div>
  )
}