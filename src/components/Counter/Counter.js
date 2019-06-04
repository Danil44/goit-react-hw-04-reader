import React from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.module.css';

const Counter = ({ currentPage, totalPages }) => (
  <p className={styles.counter}>
    {currentPage}/{totalPages - 1}
  </p>
);

Counter.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default Counter;
