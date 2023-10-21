import { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import icon from "../../assets/images/icon.png";
import TextInput from "../../components/shared/customInput/Input";
import styles from "./SignUp.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { registerBuisinessAcc, registerprivateAcc } from "../../services/auth";

const initialValues = {
  companyName: null,
  email: null,
  password: null,
  password_confirmation: null,
};

const SignUp = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const { buissines } = location.state;

  const [privateAccData, setPrivateAccData] = useState({
    email: null,
    password: null,
    password_confirmation: null,
  });

  const onSubmit = (values) => {
    if (buissines) {
      registerBuisinessAcc(values).then((res) => {
        navigate("/auth");
        console.log(1);
      });
    } else {
      registerprivateAcc(privateAccData).then((res) => {
        navigate("/auth");
        console.log(2);
      });
    }
  };

  const {
    values,
    // errors,
    handleChange,
    handleSubmit,
    // setFieldValue,
    // setValues,
  } = useFormik({
    initialValues,
    validationSchema: Yup.object().shape({}),
    onSubmit,
  });

  return (
    <div className={styles.containter}>
      <div className={styles.wrapper}>
        <Link
          to="/auth"
          style={{ textDecoration: "none" }}
          className={styles["logo-container"]}
        >
          <h1 className={styles.header}>CERTIFY</h1>
          <img src={icon} alt="icon" width={50} height={50} />
        </Link>

        {buissines === true ? (
          <div className={styles.box2}>
            <div style={{ color: "#616161", fontWeight: 700 }}>
              CERTIFY WITH CERTIFY
            </div>

            <TextInput
              placeholder={"Company name"}
              value={values.companyName}
              name="companyName"
              handleChange={handleChange}
            />
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
              type="password"
            />

            <TextInput
              placeholder={"Confirm password"}
              value={values.password_confirmation}
              name="password_confirmation"
              handleChange={handleChange}
              type="password"
            />

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
                  Sign Up
                </p>
              </div>
            </div>
          </div>
        ) : (
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
            />
            <TextInput
              placeholder={"Confirm password"}
              value={privateAccData.password_confirmation}
              handleChange={(e) =>
                setPrivateAccData((state) => ({
                  ...state,
                  password_confirmation: e.target.value,
                }))
              }
              type="password"
            />

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
                  Sign Up
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
