import { useState } from "react";
import styles from "./Login.module.scss";
import icon from "../../assets/images/icon.png";
import Progressbar from "../../components/shared/loadingBar/LoadingBar";

const Login = () => {
  const [loading, setLoading] = useState(true);

  return loading ? (
    <Progressbar setLoading={setLoading} />
  ) : (
    <div className={styles.containter}>
      <div className={styles.wrapper}>
        <div className={styles["logo-container"]}>
          <h1 className={styles.header}>CERTIFY</h1>
          <img src={icon} alt="icon" width={50} height={50} />
        </div>

        <div className={styles.box}>
          <div className={styles.button}>
            <p className={styles.text}>Buissines Account</p>
          </div>
          <p>or</p>
          <div className={styles.button}>
            <p className={styles.text}>Private Account</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
