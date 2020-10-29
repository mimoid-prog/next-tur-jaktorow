import React from "react";
import { ItemContent, ItemHeader } from "./Item";
import styles from "styles/components/scoreboard.module.scss";
import infoAll from "data/info";
import Image from "next/image";

const Scoreboard = ({ selected }: { selected: string }) => {
  const scoreboard = generateScoreboard(infoAll[selected]);

  return (
    <div className={styles.scoreboard}>
      <ItemHeader>Tabela wyników</ItemHeader>
      <ItemContent>
        <div className={styles.scoreboard}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.tr}>
                <th title="Miejsce">M</th>
                <th>Nazwa klubu</th>
                <th title="Zwycięstwa/Remisy/Porażki">Z/R/P</th>
                <th title="Bilans bramek">Bramki</th>
                <th title="Rozegrane mecze">Mecze</th>
                <th title="Punkty">Punkty</th>
              </tr>
            </thead>
            <tbody>
              {scoreboard.map((item) => (
                <tr key={item.club} className={styles.tr}>
                  <td>{item.place}</td>
                  <td className={styles.club}>
                    <div className={styles.logoBox}>
                      <Image
                        width={40}
                        height={40}
                        src={`/images/logos/${item.logo}`}
                        alt={`${item.club} logotyp`}
                      />
                    </div>

                    <span>{item.club}</span>
                  </td>
                  <td>{item.stats}</td>
                  <td>
                    {item.scoredGoals} : {item.lostGoals}
                  </td>
                  <td>{item.matches}</td>
                  <td>{item.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ItemContent>
    </div>
  );
};

const generateScoreboard = (info) => {
  let scoreboard = info.map((team) => ({
    club: team.club,
    logo: team.logo,
    stats: `${team.stats[0]}/${team.stats[1]}/${team.stats[2]}`,
    scoredGoals:
      team.scoredGoals.length === 0
        ? 0
        : team.scoredGoals.reduce(
            (a, b) => (a === false ? 0 : a) + (b === false ? 0 : b)
          ),
    lostGoals:
      team.lostGoals.length === 0
        ? 0
        : team.lostGoals.reduce(
            (a, b) => (a === false ? 0 : a) + (b === false ? 0 : b)
          ),
    points: team.stats[0] * 3 + team.stats[1],
    matches: team.stats[0] + team.stats[1] + team.stats[2]
  }));
  scoreboard.sort((a, b) => {
    if (a.points === b.points) {
      return b.matches - a.matches;
    }
    return b.points - a.points;
  });

  let place = 1;
  let isUsed = false;
  for (let i = 0; i < scoreboard.length; i++) {
    if (!isUsed) {
      scoreboard[i].place = place + ".";
      isUsed = true;
    } else scoreboard[i].place = "";

    if (i !== scoreboard.length - 1) {
      if (scoreboard[i].points !== scoreboard[i + 1].points) {
        isUsed = false;
      }
    }
    place++;
  }

  return scoreboard;
};

export default Scoreboard;
