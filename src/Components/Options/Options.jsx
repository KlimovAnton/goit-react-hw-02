import css from "./Options.module.css";

export default function Options ({ onUpdate, onReset}) {
    return (
        <div className={css.containerBtn}>
            <button 
                onClick={() => {
                    onUpdate("good");
                }}>Good
            </button>
            <button 
                onClick={() => {
                    onUpdate("neutral");
                }}>Neutral
            </button>
            <button 
                onClick={() => {
                    onUpdate("bad");
                }}>Bad
            </button>
            <button onClick={onReset}
            >Reset 
            </button>
        </div>
    )
}