import React, { useEffect, useState } from "react";
import icon from "../../../assets/images/icon.png";
import styles from "./LoadingBar.module.scss";

export default function Progressbar({ setLoading }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (percent < 99) {
      setTimeout(() => setPercent((newval) => newval + 1), 20);
    } else {
      setLoading(false);
    }
  }, [percent]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles["logo-container"]}>
          <h1 className={styles.header}>CERTIFY</h1>
          <img src={icon} alt="icon" width={50} height={50} />
        </div>
        <div className={styles.progressbar}>
          <div
            className={styles.progressbarfill}
            style={{ width: `${percent}%` }}
          >
            {/* {percent} % */}
          </div>
        </div>
      </div>
    </div>
  );
}
