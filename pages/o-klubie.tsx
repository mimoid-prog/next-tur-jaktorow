import React from "react";
import Layout from "layouts";
import styles from "styles/pages/about.module.scss";
import Image from "next/image";
import Head from "components/Head";
import Buttons from "components/Buttons";

const About = () => {
  return (
    <Layout>
      <Head
        title="O klubie - Tur Jaktorów"
        description="Dane o klubie piłkarskim Tur Jaktorów, o miejscowym stadionie. Skontaktuj się z klubem przez telefon lub facebooka."
      />
      <div className={styles.about}>
        <h2 className="secondaryTitle viewTitle">O klubie</h2>
        <div className={styles.content}>
          <div className={styles.box}>
            <div className={styles.header}>
              <Image
                width={200}
                height={200}
                src="/images/logos/tur.jpg"
                alt="Tur Jaktorów logo"
              />
              <h3>Ludowy Klub Sportowy</h3>
              <h3>Tur Jaktorów</h3>
            </div>
            <div className={styles.infoBox}>
              <div className={styles.info}>
                <h3 className={styles.subtitle}>📝 Dane:</h3>
                <p>
                  <span>Prezes:</span> Bronisław Świdlicki
                </p>
                <p>
                  <span>Miejscowość:</span> Jaktorów, Mazowieckie
                </p>
                <p>
                  <span>Ulica:</span> Warszawska 88
                </p>
                <Buttons />
                <h3 className={styles.subtitle}>🏟️ Stadion:</h3>
                <p>
                  <span>Liczba miejsc:</span> 300 miejsc siedzących
                </p>
                <p>
                  <span>Boisko:</span> 105m x 60m
                </p>
                <p>
                  <span>Murawa:</span> Naturalna
                </p>
                <h3 className={styles.subtitle}>🏦 Konto bankowe:</h3>
                <p>LKS „TUR” Jaktorów</p>
                <p>ul. Warszawska 88</p>
                <p>
                  <span>Nr konta:</span> 07 1240 3350 1111 0000 3550 3002
                </p>
              </div>
            </div>
          </div>
          <div className={styles.photoBox}>
            <Image
              src="/images/photos/kadra.jpg"
              className={styles.photo}
              alt="Kibice na stadionie Tura"
              layout="fill"
              objectFit="cover"
              priority={true}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
