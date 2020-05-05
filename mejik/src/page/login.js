import React, { useState } from "react";

import Logography from "../images/Logography.svg";
import Input from "./component/BootstrapInput/BootstrapInput";
import CheckBox from "./component/CheckBox/CheckBox";
import Button from "./component/Button/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email);
  return (
    <div style={{ backgroundColor: "#8854d0" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="login-body">
            <img
              src={Logography}
              alt="logo magic"
              style={{ marginBottom: 50, marginTop: 80 }}
            />
            <div className="mx-3">
              <h1>Login</h1>
              <p>Login and start managing your learning process!</p>
            </div>
            <Input
              label="Email"
              color="white"
              name="Email"
              type="email"
              bgcolor="#7b4cbc"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Password"
              color="white"
              type="password"
              bgcolor="#7b4cbc"
              name="Password"
            />
            <div className="d-inline-flex">
              <CheckBox labelName="Keep me signed in" />
              <a
                style={{ fontSize: 14, color: "#ecb339", marginTop: 12 }}
                href="#"
              >
                Forgotten your password?
              </a>
            </div>
            <Button name="Login" variant="contained" />
            <div className="d-inline-flex" style={{ marginBottom: 80 }}>
              <p
                style={{
                  fontSize: 14,
                  color: "#ecb339",
                  marginTop: 12,
                  marginRight: 6,
                }}
              >
                Don't have an account yet?{" "}
              </p>
              <a
                style={{
                  fontSize: 14,
                  color: "#ecb339",
                  marginTop: 12,
                  fontWeight: "bold",
                }}
                href="#"
              >
                Register here
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
