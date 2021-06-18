import React, { useState } from "react";
import Login from "../../components/login/Login";
import PasswordReset from "../../components/password-reset/PasswordReset";
import "./styles.css";

const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [frmLoad, setFrmLoad] = useState("login");

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("Fill up all the form!");
    }

    //TODO call api to submit form
    console.log(email, password);
  };

const handleOnResetSubmit = (e) => {
    e.preventDefault();
    if(!email) {
        return alert("Please enter a valid email");
    }
}

  const frmswitcher = frmType => {
     setFrmLoad(frmType)
  }

  return (
    <div className="entry-page bg-dark">
      <div className="jumbotron form-box">
        {frmLoad === "login" && (
          <Login
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            frmswitcher={frmswitcher}
            email={email}
            password={password}
          />
        )}
        {frmLoad === "reset" && (
          <PasswordReset
            handleOnChange={handleOnChange}
            handleOnResetSubmit={handleOnResetSubmit}
            frmswitcher={frmswitcher}
            email={email}
          />
        )}
      </div>
    </div>
  );
};

export default Entry;
