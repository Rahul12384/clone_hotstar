import React, { Fragment, useEffect } from "react";
import "./Welcome.css";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";
import { useLocation, useNavigate } from "react-router";

const Welcome = () => {
    const code = new URLSearchParams(useLocation().search).get("code");
  //   const his = useNavigate();
  //   useEffect(() => {
  //     his("/welcome");
  //   }, []);
  // fetch("http://localhost:8080/rah")
  //   .then((res) => {
  //     // res.json
  //     console.log(res)}
  //   )
  // .then((data) => {
  //     // console.log("msg" + data.message)
  //      console.log(data)});
  useEffect(() => {
    console.log("in useeffect welcome");
    console.log("code"+code)
    const requestOptions = {
      method: "POST",
      mode:"no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code : code }),
    };
    return(
    fetch("http://localhost:8080/rahultok", requestOptions)
    // .then(response => response.json())
    // .then(data => this.setState({ postId: data.id }));
    );
  }, [code]);

  return (
    <Fragment>
      <div className="welcome">
        Welcome to my page {code}
        <div className="welcome-btn">
          <LogoutButton />
        </div>
        {/* {console.log("code")}
        {console.log(code)} */}
        <Profile />
      </div>
    </Fragment>
  );
};

export default Welcome;
