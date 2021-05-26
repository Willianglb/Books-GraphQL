import React from "react";
import { ApolloProvider } from "react-apollo";
import Main from "./pages/Main";
import client from "./api/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>
  );
}

export default App;
