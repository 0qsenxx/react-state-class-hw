import { nanoid } from "nanoid";
import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={styles.feedbackOptionsList}>
    {options.map((option) => (
      <li key={nanoid()}>
        <button
          type="button"
          onClick={(evt) => onLeaveFeedback(evt)}
          className={styles.feedbackOptionsBtn}
        >
          {option}
        </button>
      </li>
    ))}
  </ul>
);

export default FeedbackOptions;
