import React, { useState } from "react";
import "./profile.css";
import { Link } from "react-router-dom";
function Profile({ profile, userProfiles }) {
  console.log(profile);
  console.log(userProfiles);
  const [status, setstatus] = useState(true);
  const [signStatus, setSignStatus] = useState(true);
  const arr = userProfiles.filter((item) => item.name !== profile?.at(0)?.name);
  console.log(arr);
  function handleClick() {
    setstatus(!status);
  }

  const cahtting1 = (
    <div className="openUp">
      <div
        style={{
          textAlign: "center",
          backgroundColor: "rgb(158, 158, 249)",
          height: "35px",
          borderRadius: "10px 10px 0px 0px",
          fontSize: "large",
        }}
        onClick={handleClick}
      >
        Chats
      </div>
      {arr.map((item) => {
        return (
          <div className="chatPic">
            <div
              style={{
                backgroundColor: "white",
                position: "relative",
                // top: "0.6em",
              }}
            >
              <img
                src={item.profilepicture}
                style={{
                  width: "1.5em",
                  height: "1.5em",
                  position: "relative",
                  bottom: "1em",
                  borderRadius: "50%",
                  backgroundColor: "white",
                }}
              ></img>
            </div>
            <label
              style={{
                // alignItems: "start",
                fontSize: "larger",
                width: "16em",
                backgroundColor: "white",
              }}
            >
              {item.name}
            </label>
            <div style={{ backgroundColor: "white", height: "1.5em" }}>
              <button
                style={{
                  backgroundColor: "green",
                  width: "1em",
                  height: "1em",
                  borderRadius: "50%",
                }}
              ></button>
            </div>
          </div>
        );
      })}
    </div>
  );
  const chatting = status ? (
    <div className="chats" style={{ fontSize: "large" }} onClick={handleClick}>
      Chats
    </div>
  ) : (
    cahtting1
  );
  return (
    <div className="profilePage">
      <div className="header">
        <div
          style={{ alignItems: "center", fontSize: "28px", marginLeft: "2em" }}
        >
          Profile
        </div>
        <div className="power">
          <img
            className="pic"
            onClick={() => setSignStatus(!signStatus)}
            src={profile?.at(0)?.profilepicture}
            style={{
              width: "3em",
              height: "3em",
              marginBottom: "1em",
              borderRadius: "50%",
            }}
          ></img>
          {signStatus ? (
            <div
              className="name"
              onClick={() => setSignStatus(!signStatus)}
              style={{
                fontSize: "large",
                marginLeft: "1em",
                marginRight: "5em",
              }}
            >
              {profile?.at(0)?.name}
            </div>
          ) : (
            <div className="signInfo">
              <div
                className="name"
                onClick={() => setSignStatus(!signStatus)}
                style={{
                  zIndex: "1",
                  fontSize: "large",
                  marginLeft: "1em",
                  marginRight: "5em",
                }}
              >
                {profile?.at(0)?.name}
              </div>
              <div className="y">
                <img
                  style={{ width: "6em", height: "6em", borderRadius: "50%" }}
                  src={profile?.at(0)?.profilepicture}
                ></img>
                <label>{profile?.at(0)?.name}</label>
                <label style={{ marginLeft: "1em", marginRight: "1em" }}>
                  {profile?.at(0)?.email}
                </label>
                <Link
                  to="/"
                  style={{
                    marginTop: "1em",
                    textDecoration: "none",
                    backgroundColor: "red",
                    color: "white",
                    textAlign: "center",
                    width: "60%",
                    borderRadius: "10px",
                  }}
                >
                  Sign Out
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="middlePage">
        <div className="person">
          <img
            src={profile?.at(0)?.profilepicture}
            style={{
              marginLeft: "2%",
              width: "14em",
              height: "14em",
              borderRadius: "50%",
            }}
          ></img>
          <diV style={{ fontSize: "22px" }}>{profile?.at(0)?.name}</diV>
          <div className="outer">
            <div className="each">
              <label className="label">Username:</label>
              <label style={{ fontSize: "large" }}>
                {profile?.at(0)?.username}
              </label>
            </div>
            <div className="each">
              <label className="label">Email:</label>
              <label style={{ fontSize: "large" }}>
                {profile?.at(0)?.email}
              </label>
            </div>
            <div className="each">
              <label className="label">Phone:</label>
              <label style={{ fontSize: "large" }}>
                {profile?.at(0)?.phone}
              </label>
            </div>
            <div className="each">
              <label className="label">Website:</label>
              <label style={{ fontSize: "large" }}>
                {profile?.at(0)?.website}
              </label>
            </div>
          </div>
          <div>____________________________________________________</div>
          <div style={{ fontSize: "22px", marginTop: "0.3em" }}>Company</div>
          <div className="outer">
            <div className="each">
              <label className="label">Name:</label>
              <label style={{ fontSize: "large" }}>
                {profile?.at(0)?.company.name}
              </label>
            </div>

            <div className="each">
              <label className="label">Catchphrase:</label>
              <label style={{ fontSize: "large" }}>
                {profile?.at(0)?.company.catchPhrase}
              </label>
            </div>

            <div className="each">
              <label className="label">bs:</label>
              <label style={{ fontSize: "large" }}>
                {profile?.at(0)?.company.bs}
              </label>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="personInfo" style={{ zIndex: "-1" }}>
          <label style={{ fontSize: "large" }}>Address:</label>

          <div className="each1">
            <label className="label1">Street:</label>
            <label style={{ fontSize: "large" }}>
              {profile?.at(0)?.address.street}
            </label>
          </div>
          <div className="each1">
            <label className="label1">Suite:</label>
            <label style={{ fontSize: "large" }}>
              {profile?.at(0)?.address.suite}
            </label>
          </div>
          <div className="each1">
            <label className="label1">City:</label>
            <label style={{ fontSize: "large" }}>
              {profile?.at(0)?.address.city}
            </label>
          </div>
          <div className="each1">
            <label className="label1">ZipCode:</label>
            <label style={{ fontSize: "large" }}>
              {profile?.at(0)?.address.zipcode}
            </label>
          </div>

          <img
            src="https://content.satimagingcorp.com/static/galleryimages/WorldView-3-satellite-image-lagos-nigeria.jpg"
            className="picture1"
          ></img>
        </div>
      </div>
      {chatting}
    </div>
  );
}
export default Profile;
