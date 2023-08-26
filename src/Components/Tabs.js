import React, { useEffect, useState } from "react";
import "../Components/Tabs.css";
import Profile from "./Profile";
import {
  Link,
  useLocation,
  useMatches,
  useNavigate,
  useParams,
} from "react-router-dom";
function Tabs() {
  const [tabStatus, setTabStatus] = useState("Profile");
  const { userId } = useParams();
  console.log(userId);
  const [signStatus, setSignStatus] = useState(true);
  const [userProfiles, setUserProfiles] = useState([]);
  const [profileItem, setProfileItem] = useState(null);
  //   function match() {
  //     // const k = userProfiles.filter((item, i) => item.id == userId);
  //     // console.log(k);
  //     console.log(userProfiles);
  //   }

  useEffect(() => {
    const abortController = new AbortController();
    fetch("https://panorbit.in/api/users.json", {
      signal: abortController.signal,
    })
      .then((data) => data.json())
      .then((result) => {
        setUserProfiles(result.users);
      })
      .catch((err) => {});
    return () => abortController.abort();
  }, []);
  console.log(userProfiles);
  useEffect(() => {
    setTimeout(() => {
      const k = userProfiles.filter((item, i) => item.id == userId);
      console.log(k);
      setProfileItem(k);
    }, 0);
  }, [userProfiles]);

  function handleClick(e) {
    setTabStatus(e.target.innerHTML);
    setSignStatus(true);
  }
  const signOut = (
    <div className="signOut">
      <img
        // src={profileItem[0].profilepicture}
        style={{
          width: "7em",
          height: "7em",
          marginBottom: "1em",
          borderRadius: "50%",
        }}
      ></img>
      <label>Gaurav Jha</label>
      <label>jha.gaurav321@gmail.com</label>
      <button>Sign Out</button>
    </div>
  );
  console.log(tabStatus);
  const comp =
    tabStatus == "Profile" ? (
      <Profile profile={profileItem} userProfiles={userProfiles}></Profile>
    ) : (
      <>
        <div className="header">
          <div
            style={{
              alignItems: "center",
              fontSize: "28px",
              marginLeft: "2em",
            }}
          >
            {tabStatus}
          </div>
          <div className="power">
            <img
              className="pic"
              src={profileItem[0].profilepicture}
              onClick={() => setSignStatus(!signStatus)}
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
                {profileItem[0].name}
              </div>
            ) : (
              <div className="signInfo">
                <div
                  className="name"
                  onClick={() => setSignStatus(!signStatus)}
                  style={{
                    fontSize: "large",
                    marginLeft: "1em",
                    marginRight: "5em",
                  }}
                >
                  {profileItem[0].name}
                </div>
                <div className="y">
                  <img
                    style={{ width: "6em", height: "6em", borderRadius: "50%" }}
                    src={profileItem[0].profilepicture}
                  ></img>
                  <label> {profileItem[0].name}</label>
                  <label style={{ marginLeft: "1em", marginRight: "1em" }}>
                    {profileItem[0].email}
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
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "35%",
            fontSize: "100px",
          }}
        >
          COMING SOON
        </div>
      </>
    );
  return (
    <div className="page">
      <div className="tabs">
        <div className="tabItem" onClick={(e) => handleClick(e)}>
          Profile
        </div>
        <div></div>
        <div className="tabItem" onClick={(e) => handleClick(e)}>
          Post
        </div>
        <div></div>
        <div className="tabItem" onClick={(e) => handleClick(e)}>
          Gallery
        </div>
        <div></div>
        <div className="tabItem" onClick={(e) => handleClick(e)}>
          Todo
        </div>
        <div></div>
      </div>
      <div className="side">{comp}</div>
    </div>
  );
}
export default Tabs;
