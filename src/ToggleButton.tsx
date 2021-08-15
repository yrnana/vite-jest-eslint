import React, { useState } from 'react';
import './ToggleButton.scss';

// import styles from './ToggleButton.module.scss';

const ToggleButton = () => {
  const [active, setActive] = useState(false);

  return (
    <button
      className={active ? 'toggle-button active' : 'toggle-button'}
      // className={
      //   active
      //     ? `${styles['toggle-button']} ${styles['active']}`
      //     : styles['toggle-button']
      // }
      onClick={() => setActive((state) => !state)}
    >
      등록
    </button>
  );
};

export default ToggleButton;
