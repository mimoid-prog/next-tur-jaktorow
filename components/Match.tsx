import React from "react";
import { ItemHeader, ItemContent } from "./Item";
import styles from "styles/components/match.module.scss";
import getMatches from "data/matches";
import Image from "next/image";

interface Props {
  firstBox: boolean;
  selected: string;
}

const Match = ({ firstBox, selected }: Props) => {
  const matches = getMatches(selected);
  const match = firstBox ? matches.matchOne : matches.matchTwo;

  return (
    <div>
      <ItemHeader>
        <span className={styles.title}>
          <span className={styles.titleItem}>{match.title}</span>
          <span className={`${styles.titleItem} ${styles.date}`}>
            {match.date || match.weekDate}
          </span>
          {match.time && (
            <span className={`${styles.titleItem} ${styles.time}`}>
              , g.{match.time}
            </span>
          )}
          {match.home && (
            <span className={`${styles.titleItem} ${styles.home}`}>
              {" "}
              {match.home}
            </span>
          )}
        </span>
      </ItemHeader>
      <ItemContent>
        <div className={styles.match}>
          <div className={styles.matchContent}>
            <div className={styles.logoBox}>
              <Image
                key={Math.random()}
                src={`/images/logos/${match.logos.teamOne}`}
                alt={match.clubs[0]}
                width={100}
                height={100}
              />
            </div>
            <div
              className={`${styles.score} ${match.isText ? styles.soon : ""}`}
            >
              {match.score}
            </div>
            <div className={styles.logoBox}>
              <Image
                key={Math.random()}
                src={`/images/logos/${match.logos.teamTwo}`}
                alt={match.clubs[1]}
                width={100}
                height={100}
              />
            </div>
          </div>
          <p className={styles.teamNames}>
            {match.clubs[0]}
            <span> - </span>
            {match.clubs[1]}
          </p>
        </div>
      </ItemContent>
    </div>
  );
};

export default Match;
