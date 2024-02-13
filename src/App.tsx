import AuthProvider from "./auth/AuthProvider";
import ThemeRegistry from "./components/Theme/ThemeRegistry";
import { Router } from "./router/router";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { Toaster } from "react-hot-toast";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://staging.api.constellation.academy/api/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export function App() {
  return (
    <AuthProvider>
      <ApolloProvider client={client}>
        <ThemeRegistry>
          <Router />
          <Toaster />
        </ThemeRegistry>
      </ApolloProvider>
    </AuthProvider>
  );
}
