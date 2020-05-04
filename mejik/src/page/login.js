import React, { useState } from "react";

import Logography from "../images/Logography.svg";
import Input from "./component/BootstrapInput/BootstrapInput";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="magenta">
      <div className="container">
        <div className="row justify-content-center">
          <div className="login-body">
            <img
              src={Logography}
              alt="logo magic"
              style={{ marginTop: 100, marginBottom: 50 }}
            />
            <div className="mx-1">
              <h1>Login</h1>
              <p>Login and start managing your learning process!</p>
            </div>
            <Input name="email" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
