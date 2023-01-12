import React from 'react';

import styles from "./style.module.css";

const AboutUsCard = (props) => {

  return (
    <div className={styles['about-us-card']}>
        <span
            className={styles.icon}
        />
        <h2 className={styles.title}>
          {props.title}
        </h2>
        <p className={styles.description}>
          {props.children}
        </p>
    </div>
  );
};

export default AboutUsCard;


