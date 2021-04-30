import React from "react";
import Layout from "layouts";
import styles from "styles/pages/news.module.scss";
import { GetServerSideProps } from "next";
import axios from "axios";
import { ItemHeader, ItemContent } from "components/Item";
import Head from "components/Head";

const News = ({ posts }) => {
  return (
    <Layout>
      <Head
        title="Aktualności - Tur Jaktorów"
        description="Najnowsze aktualności na temat Tura Jaktorów, ostatnie wyniki meczów oraz informacje o wyjazdach, obozach i treningach."
      />
      <div className={styles.news}>
        <h2 className="secondaryTitle viewTitle">Aktualności</h2>
        <div className={styles.posts}>
          {posts.map((post) => (
            <div key={post.id}>
              <ItemHeader>{post.day}</ItemHeader>
              <ItemContent>
                <p className={styles.postContent}>{post.message}</p>
                <a href={post.link} target="_blank" className={styles.link}>
                  ➡️ Zobacz post i zdjęcia na FB
                </a>
              </ItemContent>
            </div>
          ))}
        </div>
        <p className={styles.oldPostsInfo}>
          Starsze posty i aktualności znajdziesz na fanpagu Tura Jaktorów na
          facebooku.
        </p>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get(
    `https://graph.facebook.com/v10.0/255922421186609/posts?limit=16&access_token=${process.env.FB_TOKEN}`
  );

  const mapped = res.data.data.map((item) => ({
    id: item.id,
    day: item.created_time.slice(0, 10).split("-").reverse().join("."),
    message: item.message || "",
    link:
      "https://www.facebook.com/lksturjaktorow/posts/" + item.id.split("_")[1]
  }));

  const filtered = mapped.filter(
    (item) => item.message !== "" && item.day !== "10.11.2020"
  );

  return {
    props: {
      posts: filtered
    }
  };
};

export default News;
