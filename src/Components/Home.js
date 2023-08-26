import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    fetch("https://panorbit.in/api/users.json", {
      signal: abortController.signal,
    })
      .then((data) => data.json())
      .then((result) => setUsers(result.users))
      .catch((err) => {});
    return () => abortController.abort();
  }, []);

  // function handleClick(item) {
  //   getData(item);
  // }

  return (
    <>
      <h3 className="select">SELECT AN ACCOUNT</h3>
      <div className="card">
        {users.map((item, index) => {
          return (
            <Link key={item.id} to={`/profile/${item.id}`} className="info">
              <img src={item.profilepicture} className="picture"></img>
              <label key={index} className="name1">
                {item.name}
              </label>
            </Link>
          );
        })}
      </div>
    </>
  );
}
export default Home;
