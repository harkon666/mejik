import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import {Redirect} from 'react-router-dom'

import Logography from "../images/Logography.svg";
import Input from "./component/BootstrapInput/BootstrapInput";
import Button from "./component/Button/Button";

const REGISTER = gql`
mutation regist($email: EmailAddress!, $password : String!, $firstName: String!, $lastName: String!, $phoneNumber: PhoneNumber) {
  register(input: {email:$email, password:$password, firstName:$firstName,lastName:$lastName, phoneNumber: $phoneNumber }){
      token
      user{
          firstName
      }
  }
}
`;

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [success, setSuccess] = useState(false)
  const [register] = useMutation(REGISTER)
   
    const Regist = async () => {
      console.log('masuk')
      try {
        let data = await register({
          variables: {
            email: email,
            password: password,
            firstName: firstname,
            lastName: lastname,
            phoneNumber: phone
          },
        });
        return data;
      } catch (error) {
        return error;
      }
    };

  console.log(email);
  if (success) return <Redirect to="/course/student" />
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
              <h1>Register</h1>
              <p>Register and start managing your learning process!</p>
            </div>
            <Input
              width="100%"
              label="Email"
              color="white"
              labelColor="white"
              name="Email"
              type="text"
              bgcolor="#7b4cbc"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              width="100%"
              labelColor="white"
              label="Password"
              color="white"
              type="password"
              bgcolor="#7b4cbc"
              name="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              width="100%"
              labelColor="white"
              label="firstname"
              color="white"
              type="text"
              bgcolor="#7b4cbc"
              name="firtsname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <Input
              width="100%"
              labelColor="white"
              label="lastname"
              color="white"
              type="text"
              bgcolor="#7b4cbc"
              name="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <Input
              width="100%"
              labelColor="white"
              label="phone number"
              color="white"
              type="text"
              bgcolor="#7b4cbc"
              name="phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Button
              name="Login"
              variant="contained"
              color="black"
              width="325px"
              bgcolor="#fac024"
              onClick={async () => {
                let data = await Regist()
                if (data.data) {
                  localStorage.setItem('jwt', data.data.register.token)
                  setSuccess(true)
                } else {
                  console.log(data)
                }
              }}
            />
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

export default Register;
