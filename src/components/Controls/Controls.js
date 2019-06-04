import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ onNext, onPrev, disabledPrev, disabledNext }) => {
  const prevBtn = disabledPrev ? styles.disabled : styles.button;
  const nextBtn = disabledNext ? styles.disabled : styles.button;

  return (
    <div className={styles.controls}>
      <button
        className={prevBtn}
        disabled={disabledPrev}
        type="button"
        onClick={onPrev}
      >
        Назад
      </button>
      <button
        className={nextBtn}
        disabled={disabledNext}
        type="button"
        onClick={onNext}
      >
        Вперед
      </button>
    </div>
  );
};

Controls.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  disabledPrev: PropTypes.bool.isRequired,
  disabledNext: PropTypes.bool.isRequired,
};

export default Controls;
