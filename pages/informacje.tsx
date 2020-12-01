import React from "react";
import Layout from "layouts";
import styles from "styles/pages/information.module.scss";
import Head from "components/Head";
import Buttons from "components/Buttons";

const Information = () => {
  return (
    <Layout>
      <Head
        title="Informacje - Tur Jaktorów"
        description="Informacje na temat strony tur-jaktorow.pl. Zauważyłeś błąd lub masz pomysł na rozwój strony? Skontaktuj się z nami."
      />
      <div className={styles.information}>
        <h2 className="secondaryTitle viewTitle">Informacje</h2>
        <div className={styles.content}>
          <p>
            Strona <b>tur-jaktorow.pl</b> to oficjalna strona Jaktorowskiego
            klubu piłkarskiego Tur Jaktorów.
          </p>
          <Buttons />
          <p className={styles.changesText}>
            Kontakt odnośnie strony internetowej:
          </p>
          <p className={styles.infoHeading}>📧 Wyślij mail:</p>
          <p className={styles.email}>mateusz.szkop99@gmail.com</p>
          <p className={styles.infoHeading}>🖼️ Strona internetowa:</p>
          <a
            href="https://mateuszszkop.pl"
            target="_blank"
            className={styles.myPage}
          >
            mateuszszkop.pl
          </a>
          <p className={styles.copyright}>© 2020 Wszelkie prawa zastrzeżone</p>
        </div>
      </div>
    </Layout>
  );
};

export default Information;
