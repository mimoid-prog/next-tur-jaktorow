import React from "react";
import { ItemHeader, ItemContent } from "./Item";
import styles from "styles/components/match.module.scss";
import Image from "next/image";
import matchesAll from "data/matches";

interface Props {
  firstBox: boolean;
  selected: string | any;
}

const Match = ({ firstBox, selected }: Props) => {
  const matches = selected ? matchesAll[selected] : matchesAll["senior"];
  const match = firstBox ? matches.matchOne : matches.matchTwo;

  return (
    <div className={styles.root}>
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
          <div
            className={`${styles.matchContent} ${
              match.paused ? styles.pausedMatchContent : ""
            }`}
          >
            <div className={styles.logoBox}>
              <Image
                key={Math.random()}
                src={`/images/logos/${match.logos[0]}`}
                alt={match.clubs[0]}
                width={100}
                height={100}
              />
            </div>

            {!match.paused && (
              <div
                className={`${styles.score} ${match.isText ? styles.soon : ""}`}
              >
                {match.score}
              </div>
            )}
            {match.paused && (
              <div>
                <span className={styles.pause}>
                  {match.clubs[0]} <span>pauzuje w kolejce</span>
                </span>
              </div>
            )}
            {match.clubs.length === 2 && (
              <div className={styles.logoBox}>
                <Image
                  key={Math.random()}
                  src={`/images/logos/${match.logos[1]}`}
                  alt={match.clubs[1]}
                  width={100}
                  height={100}
                />
              </div>
            )}
          </div>
          {!match.paused && (
            <p className={styles.teamNames}>
              {match.clubs[0]}
              {match.clubs[0] && match.clubs[1] ? <span> - </span> : null}
              {match.clubs[1]}
            </p>
          )}
        </div>
      </ItemContent>
    </div>
  );
};

export default Match;
