import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div className={css.Statistics}>
      <ul className="Statistics__info">
        <li className="Statistics__value">
          Good: <span>{good}</span>
        </li>
        <li className="Statistics__value">
          Neutral: <span>{neutral}</span>
        </li>
        <li className="Statistics__value">
          Bad: <span>{bad}</span>
        </li>
        <li className="Statistics__value">
          Total: <span>{total}</span>
        </li>
        <li className="Statistics__value">
          Positive feedback: <span>{positivePercentage}%</span>
        </li>
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
