import React from "react";
import styles from "./Header.module.scss";
import icon from "../../../assets/images/icon.png";
import { Link } from "react-router-dom";
import msg from "../../../assets/svgs/msg.svg";
import notification from "../../../assets/svgs/notification.svg";
import profileImage from "../../../assets/images/images.jpeg";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.icon}>
        <h3>CERTIFY</h3>
        <img src={icon} alt="icon" />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div className={styles.navItems}>
          <Link to="/home">HOME</Link>
          <Link to="/courses">COURSES</Link>
          <Link to="/about-us">ABOUT US</Link>
        </div>

        <div className={styles.iconWrapper}>
          <Link to="/profile">
            <img
              src={profileImage}
              alt="profile"
              className={styles.profilePic}
            />
          </Link>
          <img src={msg} alt="msg" style={{ cursor: "pointer" }} />
          <img
            src={notification}
            alt="notification"
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
