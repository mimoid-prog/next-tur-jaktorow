import React from "react";
import Layout from "layouts";
import styles from "styles/pages/schedule.module.scss";
import SelectBox from "components/SelectBox";
import scheduleAll from "data/schedule";
import { ItemContent, ItemHeader } from "components/Item";
import Image from "next/image";
import Head from "components/Head";
import { useRouter } from "next/router";

const Schedule = () => {
  const router = useRouter();
  const { division } = router.query;
  const schedule =
    typeof division === "string"
      ? scheduleAll[division]
      : scheduleAll["senior"];

  return (
    <Layout>
      <Head
        title="Terminarz - Tur Jaktorów"
        description="Harmonogram, terminarz oraz wyniki rozgrywek dla wszystkich lig w których występuje Tur Jaktorów. Między innymi klasa A oraz ligi juniorskie."
      />
      <div className={styles.schedule}>
        <h2 className="secondaryTitle viewTitle">Terminarz</h2>
        <SelectBox />
        <div className={styles.content}>
          {schedule.map((week) => (
            <div key={week.date} className={styles.weekBox}>
              <ItemHeader>
                Kolejka {week.week}, {week.date}
              </ItemHeader>
              <ItemContent>
                <ul className={styles.matchesList}>
                  {week.matches.map((match) => (
                    <li key={match.teamOne}>
                      {match.paused ? (
                        <div className={styles.pausedItem}>
                          <div className={styles.pausedLogoBox}>
                            <Image
                              src={`/images/logos/${match.pausedLogo}`}
                              alt={`${match.pausedTeam} logotyp`}
                              width={36}
                              height={36}
                            />
                          </div>

                          <div className={styles.pausedTextBox}>
                            <p>
                              {match.pausedTeam} <span>pauzuje w kolejce</span>
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className={styles.matchItem}>
                          <div className={styles.leftLogoBox}>
                            <Image
                              src={`/images/logos/${match.logoOne}`}
                              alt={`${match.teamOne} logotyp`}
                              width={36}
                              height={36}
                            />
                          </div>
                          <div className={styles.scoreBox}>
                            <div>
                              <p>{match.teamOne}</p>
                            </div>

                            <div>
                              <p className={styles.score}>
                                {match.scoreOne ? (
                                  <>
                                    {match.scoreOne}
                                    {" - "}
                                    {match.scoreTwo}
                                  </>
                                ) : (
                                  "-"
                                )}
                              </p>
                            </div>
                            <div>
                              <p>{match.teamTwo}</p>
                            </div>
                          </div>
                          <div className={styles.rightLogoBox}>
                            <Image
                              src={`/images/logos/${match.logoTwo}`}
                              alt={`${match.teamTwo} logotyp`}
                              width={36}
                              height={36}
                            />
                          </div>
                        </div>
                      )}

                      {/* {match.paused ? (
                        <>
                          <div className={styles.logoBoxLeft}>
                            <Image
                              src={`/images/logos/${match.pausedLogo}`}
                              alt={`${match.teamOne} logotyp`}
                              width={36}
                              height={36}
                              key={match.logoOne}
                            />
                          </div>

                          <p>
                            <span>{match.pausedTeam}</span>
                            <span> pauzuje w kolejce</span>
                          </p>
                        </>
                      ) : (
                        <>
                          <div className={styles.logoBoxLeft}>
                            {match.teamTwo !== null && (
                              <Image
                                src={`/images/logos/${match.logoOne}`}
                                alt={`${match.teamOne} logotyp`}
                                width={36}
                                height={36}
                                key={match.logoOne}
                              />
                            )}
                          </div>
                          <p>
                            <span>{match.teamOne}</span>
                            <span className={styles.score}>
                              {match.scoreOne ? (
                                <>
                                  {match.scoreOne}
                                  {" - "}
                                  {match.scoreTwo}
                                </>
                              ) : (
                                "-"
                              )}
                            </span>
                            <span>{match.teamTwo}</span>
                          </p>
                          <div className={styles.logoBoxRight}>
                            <Image
                              src={`/images/logos/${match.logoTwo}`}
                              alt={`${match.teamTwo} logotyp`}
                              width={36}
                              height={36}
                              key={match.logoTwo}
                            />
                          </div>
                        </>
                      )} */}
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
