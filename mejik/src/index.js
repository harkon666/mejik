import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const token = localStorage.getItem("jwt");

const client = new ApolloClient({
  uri: `https://mejikacademy1588499516927.microgen.mejik.id/graphql`,
  headers: {
    authorization: token ? `Bearer ${token}` : "",
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
