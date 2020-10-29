import React from "react";
import styles from "styles/components/item.module.scss";

const ItemHeader = ({ children }) => {
  return (
    <div className={styles.itemHeader}>
      <p>{children}</p>
    </div>
  );
};

const ItemContent = ({ children }) => {
  return <div className={styles.itemContent}>{children}</div>;
};

export { ItemHeader, ItemContent };
