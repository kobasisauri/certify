import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";
import icon from "../../assets/images/icon.png";
import Progressbar from "../../components/shared/loadingBar/LoadingBar";
import TextInput from "../../components/shared/customInput/Input";
import { useFormik } from "formik";
import * as Yup from "yup";

import useStore from "../../store/useStore";
import { authBuisinessAcc, authPrivateAcc } from "../../services/auth";

const initialValues = {
  email: null,
  password: null,
};
// const validations = {
//   email: Yup.string().required("შეიყვანეთ მეილი"),
//   password: Yup.string().required("შეიყვანეთ პაროლი"),
// };
const Login = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(0);
  const [privateAccData, setPrivateAccData] = useState({
    email: null,
    password: null,
  });

  const setUser = useStore((state) => state.setUser);

  const onSubmit = (values) => {
    if (active === 1) {
      authBuisinessAcc(values)
        .then((res) => {
          setUser(res?.user);
          localStorage.setItem("token", res.access_token);
          navigate("/home");
        })
        .catch((err) => console.log(err));
    } else if (active === 2) {
      authPrivateAcc(privateAccData)
        .then((res) => {
          setUser(res?.user);
          localStorage.setItem("token", res.access_token);
          navigate("/home");
        })
        .catch((err) => console.log(err));
    } else {
      console.log("pizdec");
    }
  };
  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
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
              isInvalid={touched.email && errors.email}
              errorMSG={errors.email}
            />
            <TextInput
              placeholder={"Password"}
              value={values.password}
              name="password"
              handleChange={handleChange}
              type="password"
              suffix="show password"
              isInvalid={touched.password && errors.password}
              errorMSG={errors.password}
            />
            <div
              style={{
                color: "#616161",
                textDecoration: "underline",
                marginTop: "20px",
              }}
            >
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
              <div className={styles["sign-in-button"]} onClick={handleSubmit}>
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
                  New here?{" "}
                  <Link to="/sign-up" state={{ buissines: true }}>
                    Create an account
                  </Link>
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
              type="password"
              suffix="show password"
            />
            <div
              style={{
                color: "#616161",
                textDecoration: "underline",
                marginTop: "20px",
              }}
            >
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
              <div className={styles["sign-in-button"]} onClick={handleSubmit}>
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
                  New here?{" "}
                  <Link to="/sign-up" state={{ buissines: false }}>
                    Create an account
                  </Link>
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
