import React, { useState } from "react";
import { uploadPic } from "../../services/user";

const Profile = () => {
  const [file, setFile] = useState();

  const handleChange = (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  const onsubmit = () => {
    let formData = new FormData();
    formData.append("pic1", file);

    // fetch("https://apicertify.com.ge/api/profile-picture/upload", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    //   data: formData,
    // })
    //   .then((res) => console.log(res))
    //   .catch((res) => console.log(res));

    uploadPic(formData).then((res) => console.log(res));
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <img src={file} alt="profile" />

      <div
        style={{
          background: "lightBlue",
          padding: "10px 20px",
          width: "50px",
          marginTop: "15px",
        }}
        onClick={() => onsubmit()}
      >
        Upload
      </div>
    </div>
  );
};

export default Profile;
