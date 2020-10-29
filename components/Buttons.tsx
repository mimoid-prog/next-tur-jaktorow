import React from "react";
import styles from "styles/components/buttons.module.scss";
import FacebookIcon from "../assets/svgs/facebook.svg";
import PhoneIcon from "../assets/svgs/phone.svg";

const Buttons = () => {
  return (
    <div className={styles.btns}>
      <div>
        <a
          className={`${styles.btn} ${styles.facebook}`}
          href="https://www.facebook.com/lksturjaktorow"
          target="_blank"
        >
          <FacebookIcon />
          <p>Facebook</p>
        </a>
      </div>
      <div>
        <a className={`${styles.btn} ${styles.phone}`} href="tel:468565132">
          <PhoneIcon />
          <p>46 856 51 32</p>
        </a>
      </div>
    </div>
  );
};

export default Buttons;
