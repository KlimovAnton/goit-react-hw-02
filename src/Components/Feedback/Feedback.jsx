export default function Feedback( {good, neutral, bad, total, positivePercent} ) {
    return (
        <div>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive: {positivePercent}%</p>
        </div>
    )
}