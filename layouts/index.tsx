import React from "react";
import styles from "styles/layouts/layout.module.scss";
import Navbar from "components/Navbar";
import PageUp from "../assets/svgs/pageUp.svg";

const Index = ({ children }) => {
  const [showPageUp, setShowPageUp] = React.useState(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const checkHeight = () => {
    if (window.innerHeight / 2 < document.documentElement.scrollTop) {
      setShowPageUp(true);
    } else {
      setShowPageUp(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", checkHeight);
    return () => window.removeEventListener("scroll", checkHeight);
  }, []);

  return (
    <div className={styles.layout}>
      <div className="container">
        <div className={styles.layoutInner}>
          <Navbar />
          <div className={styles.view}>{children}</div>
          <button
            className={`${styles.pageUp} ${showPageUp ? styles.active : ""}`}
            onClick={scrollToTop}
          >
            <PageUp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
