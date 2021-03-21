import React from "react";
import Layout from "layouts";
import styles from "styles/pages/index.module.scss";
import Match from "components/Match";
import Scoreboard from "components/Scoreboard";
import SelectBox from "components/SelectBox";
import Head from "components/Head";
import { useRouter } from "next/router";
import getDivision from "utils/getDivision";

const Index = () => {
  const router = useRouter();
  const division = getDivision(router.query.division);

  return (
    <Layout>
      <Head
        title="Strona główna - Tur Jaktorów"
        description="Oficjalna strona klubu piłkarskiego LKS Tur Jaktorów. Zobacz ostatnie mecze, wyniki i tabelę rozgrywek. Klasa A seniorów oraz wszystkie roczniki juniorskie w jednym miejscu."
      />
      {router.isReady && (
        <>
          <h2 className="secondaryTitle viewTitle">Strona główna</h2>
          <SelectBox initialValue={division} />
          <div className={styles.home}>
            <div className={styles.grid}>
              <div className={styles.gridLastMatch}>
                <Match firstBox={true} selected={division} />
              </div>
              <div className={styles.gridNextMatch}>
                <Match firstBox={false} selected={division} />
              </div>
              <Scoreboard selected={division} />
            </div>
          </div>
        </>
      )}
    </Layout>
  );
};

export default Index;
