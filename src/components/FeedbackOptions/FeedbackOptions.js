import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({
  handleGood,
  handleNeutral,
  handleBad,
}) {
  return (
    <div className={css.controls}>
      <button type="button" className={css.button} onClick={handleGood}>
        Good
      </button>
      <button type="button" className={css.button} onClick={handleNeutral}>
        Neutral
      </button>
      <button type="button" className={css.button} onClick={handleBad}>
        Bad
      </button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  handleGood: PropTypes.func,
  handleNeutral: PropTypes.func,
  handleBad: PropTypes.func,
};
