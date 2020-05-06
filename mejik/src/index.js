import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";

const token = "";

const link = createHttpLink({
  uri: `https://mejikacademy1588499516927.microgen.mejik.id/graphql`,
  credentials: "same-origin",
  headers: {
    authorization: ''
  },
  fetchOptions: {
    mode: 'no-cors'
  }
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
