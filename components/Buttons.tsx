import React from "react";
import styles from "styles/components/buttons.module.scss";

const Buttons = () => {
  return (
    <div className={styles.btns}>
      <strong>Kontakt do klubu:</strong>
      <div>
        <a
          className={`${styles.btn} ${styles.facebook}`}
          href="https://www.facebook.com/lksturjaktorow"
          target="_blank"
        >
          <img src="svgs/facebook.svg" alt="Ikonka facebooka" />
          <p>Facebook</p>
        </a>
      </div>
      <div>
        <a className={`${styles.btn} ${styles.phone}`} href="tel:468565132">
          <img src="svgs/phone.svg" alt="Ikonka telefonu" />
          <p>46 856 51 32</p>
        </a>
      </div>
      <div>
        <a
          className={`${styles.btn} ${styles.email}`}
          href="mailto:turjaktorowklub@gmail.com"
        >
          <p>turjaktorowklub@gmail.com</p>
        </a>
      </div>
    </div>
  );
};

export default Buttons;
