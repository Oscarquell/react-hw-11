import React from 'react';
import LogoIcon from './../../shared/images/ozon-logo.png';
import {Link} from "react-router-dom";
import styles from "./style.module.css";


const Logo = () => {
  return (
      <Link className={styles.logo} to='/'>
          <img src={LogoIcon} alt="Ozon Logo" className="logo-icon" />
      </Link>
  );
};

export default Logo;