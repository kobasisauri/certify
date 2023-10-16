import { useState } from "react";
import styles from "./Login.module.scss";
import icon from "../../assets/images/icon.png";
import Progressbar from "../../components/shared/loadingBar/LoadingBar";
import TextInput from "../../components/shared/customInput/Input";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  email: null,
  password: null,
};
const Login = () => {
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(0);
  const [privateAccData, setPrivateAccData] = useState({
    email: null,
    password: null,
  });

  const onSubmit = (values) => {
    console.log(values);
  };
  const {
    values,
    // errors,
    handleChange,
    // handleSubmit,
    // setFieldValue,
    // setValues,
  } = useFormik({
    initialValues,
    validationSchema: Yup.object().shape({}),
    onSubmit,
  });

  return loading ? (
    <Progressbar setLoading={setLoading} />
  ) : (
    <div className={styles.containter}>
      <div className={styles.wrapper}>
        <div className={styles["logo-container"]} onClick={() => setActive(0)}>
          <h1 className={styles.header}>CERTIFY</h1>
          <img src={icon} alt="icon" width={50} height={50} />
        </div>

        {active === 0 && (
          <div className={styles.box}>
            <div className={styles.button} onClick={() => setActive(1)}>
              <p className={styles.text}>Buissines Account</p>
            </div>
            <p>or</p>
            <div className={styles.button} onClick={() => setActive(2)}>
              <p className={styles.text}>Private Account</p>
            </div>
          </div>
        )}
        {active === 1 && (
          <div className={styles.box2}>
            <div style={{ color: "#616161", fontWeight: 700 }}>
              CERTIFY WITH CERTIFY
            </div>

            <TextInput
              placeholder={"Email"}
              value={values.email}
              name="email"
              handleChange={handleChange}
            />
            <TextInput
              placeholder={"Password"}
              value={values.password}
              name="password"
              handleChange={handleChange}
            />
            <div style={{ color: "#616161", textDecoration: "underline" }}>
              Forgot password?
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div className={styles["sign-in-button"]}>
                <p
                  style={{
                    color: "#FFF",
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                >
                  Sign in
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p style={{ color: "#A3A3A3", fontSize: "15px" }}>
                  New here?
                  <span> Create an account</span>
                </p>
              </div>
            </div>
          </div>
        )}

        {active === 2 && (
          <div className={styles.box2}>
            <div style={{ color: "#616161", fontWeight: 700 }}>
              CERTIFY WITH CERTIFY
            </div>

            <TextInput
              placeholder={"Email"}
              value={privateAccData.email}
              handleChange={(e) =>
                setPrivateAccData((state) => ({
                  ...state,
                  email: e.target.value,
                }))
              }
            />
            <TextInput
              placeholder={"Password"}
              value={privateAccData.password}
              handleChange={(e) =>
                setPrivateAccData((state) => ({
                  ...state,
                  password: e.target.value,
                }))
              }
            />
            <div style={{ color: "#616161", textDecoration: "underline" }}>
              Forgot password?
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div className={styles["sign-in-button"]}>
                <p
                  style={{
                    color: "#FFF",
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                >
                  Sign in
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p style={{ color: "#A3A3A3", fontSize: "15px" }}>
                  New here?
                  <span> Create an account</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
