import React from "react";
import { ItemContent, ItemHeader } from "./Item";
import styles from "styles/components/scoreboard.module.scss";
import tablesAll from "data/tables";
import Image from "next/image";

const Scoreboard = ({ selected }: { selected: string | any }) => {
  const scoreboard = selected ? tablesAll[selected] : tablesAll["senior"];

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
                <tr key={item.team} className={styles.tr}>
                  <td>{item.position}</td>
                  <td className={styles.club}>
                    <div className={styles.logoBox}>
                      <Image
                        width={40}
                        height={40}
                        src={`/images/logos/${item.logo}`}
                        alt={`${item.team} logotyp`}
                      />
                    </div>

                    <span>{item.team}</span>
                  </td>
                  <td>
                    {item.w}/{item.d}/{item.l}
                  </td>
                  <td>{item.goals}</td>
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

export default Scoreboard;
