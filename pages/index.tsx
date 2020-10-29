import React from "react";
import Layout from "layouts";
import styles from "styles/pages/index.module.scss";
import Match from "components/Match";
import Scoreboard from "components/Scoreboard";
import SelectBox from "components/SelectBox";
import Head from "components/Head";

const Index = () => {
  const [value, setValue] = React.useState("senior");

  return (
    <Layout>
      <Head
        title="Strona główna - Tur Jaktorów"
        description="Oficjalna strona klubu piłkarskiego LKS Tur Jaktorów. Zobacz ostatnie mecze, wyniki i tabelę rozgrywek. Klasa A seniorów oraz wszystkie roczniki juniorskie w jednym miejscu."
      />
      <SelectBox value={value} handleChange={(val: string) => setValue(val)} />
      <div className={styles.home}>
        <div className={styles.grid}>
          <div className={styles.gridLastMatch}>
            <Match firstBox={true} selected={value} />
          </div>
          <div className={styles.gridNextMatch}>
            <Match firstBox={false} selected={value} />
          </div>
          <Scoreboard selected={value} />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
