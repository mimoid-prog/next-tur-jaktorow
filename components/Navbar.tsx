import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "styles/components/navbar.module.scss";

const Navbar = () => {
  const router = useRouter();
  const [isHamburger, setIsHamburger] = React.useState(false);

  return (
    <div className={styles.navbar}>
      <div className={styles.titleBox}>
        <h1 className={styles.title}>
          Tur
          <span>Jaktorów</span>
        </h1>
      </div>
      <div className={styles.navBox}>
        <div className={styles.hamburgerBox}>
          <button
            className={styles.hamburgerToOpen}
            onClick={() => setIsHamburger(true)}
          >
            <div></div>
          </button>
        </div>
        <div
          className={`${styles.navBoxInner} ${
            isHamburger ? styles.active : ""
          }`}
        >
          <button
            className={styles.hamburgerToClose}
            onClick={() => setIsHamburger(false)}
          >
            <div></div>
            <div></div>
          </button>
          <nav className={styles.nav}>
            <ul className={styles.menu}>
              <li>
                <Link href="/">
                  <a
                    className={router.pathname === "/" ? styles.activeLink : ""}
                  >
                    Strona główna
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/aktualnosci">
                  <a
                    className={
                      router.pathname === "/aktualnosci"
                        ? styles.activeLink
                        : ""
                    }
                  >
                    Aktualności
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/o-klubie">
                  <a
                    className={
                      router.pathname === "/o-klubie" ? styles.activeLink : ""
                    }
                  >
                    O klubie
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/terminarz">
                  <a
                    className={
                      router.pathname === "/terminarz" ? styles.activeLink : ""
                    }
                  >
                    Terminarz
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/informacje">
                  <a
                    className={
                      router.pathname === "/informacje" ? styles.activeLink : ""
                    }
                  >
                    Informacje
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
