import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
  const { fullName, bio, profession, handleName } = props;

  return (
    <div
      style={{
        margin: "3rem 0",
        padding: "3rem",
        textAlign: "justify",
        width: "700px"
      }}
    >
      {props.children}
      <h2 style={{ marginTop: "10px" }}>{fullName}</h2>
      <p>{bio}</p>
      <h4 style={{ marginTop: "10px" }}>{profession}</h4>
      <button
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "10px 10px",
          marginTop: "15px",
          cursor: "pointer",
          borderRadius: "5px"
        }}
        onClick={handleName}
      >
        Click Here
      </button>
    </div>
  );
};
Profile.defaultProps = {
  fullName: "Taissir Gharbi",
  bio:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  profession: "Full-stack developer"
};

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  handleName: PropTypes.func,
  children: PropTypes.element
};

export default Profile;
