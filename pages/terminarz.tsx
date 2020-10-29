import React from "react";
import Layout from "layouts";
import styles from "styles/pages/schedule.module.scss";
import SelectBox from "components/SelectBox";
import infoAll from "data/info";
import scheduleAll from "data/schedule";
import { ItemContent, ItemHeader } from "components/Item";
import Image from "next/image";
import Head from "components/Head";

const Schedule = () => {
  const [value, setValue] = React.useState("senior");

  const info = infoAll[value];
  const schedule = scheduleAll[value];

  return (
    <Layout>
      <Head
        title="Terminarz - Tur Jaktorów"
        description="Harmonogram, terminarz oraz wyniki rozgrywek dla wszystkich lig w których występuje Tur Jaktorów. Między innymi klasa A oraz ligi juniorskie."
      />
      <div className={styles.schedule}>
        <h2 className="secondaryTitle viewTitle">Terminarz</h2>
        <SelectBox
          value={value}
          handleChange={(val: string) => setValue(val)}
        />
        <div className={styles.content}>
          {schedule.map((week) => (
            <div key={week.date} className={styles.weekBox}>
              <ItemHeader>
                Kolejka {week.week + 1} - {week.date}
              </ItemHeader>
              <ItemContent>
                <ul>
                  {week.matches.map((match) => (
                    <li key={match.teamOne}>
                      <div className={styles.logoBoxLeft}>
                        {match.teamTwo !== null && (
                          <Image
                            src={`/images/logos/${info[match.teamOne].logo}`}
                            alt={`${info[match.teamOne].club} logotyp`}
                            width={36}
                            height={36}
                            key={info[match.teamOne].logo}
                          />
                        )}
                      </div>
                      {match.teamTwo !== null ? (
                        <p
                          className={`${
                            match.teamOne === 0 || match.teamTwo === 0
                              ? styles.tur
                              : ""
                          }`}
                        >
                          <span>{info[match.teamOne].club}</span>
                          <span className={styles.score}>
                            {info[match.teamOne].scoredGoals[week.week] !==
                            false ? (
                              <>
                                {info[match.teamOne].scoredGoals[week.week]}
                                {" - "}
                                {info[match.teamTwo].scoredGoals[week.week]}
                              </>
                            ) : (
                              "-"
                            )}
                          </span>
                          <span>{info[match.teamTwo].club}</span>
                        </p>
                      ) : (
                        <p className={styles.weekPause}>
                          <span>{info[match.teamOne].club}</span>
                          <span> pauzuje w kolejce</span>
                        </p>
                      )}
                      {match.teamTwo !== null && (
                        <div className={styles.logoBoxRight}>
                          <Image
                            src={`/images/logos/${info[match.teamTwo].logo}`}
                            alt={`${info[match.teamTwo].club} logotyp`}
                            width={36}
                            height={36}
                            key={info[match.teamTwo].logo}
                          />
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </ItemContent>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Schedule;
