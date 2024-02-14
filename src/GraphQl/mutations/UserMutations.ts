import { gql } from "@apollo/client";

export const LOG_IN_USER_MUTATION = gql`
  mutation Mutation($input: LoginJwtInput!, $loginInput2: LoginInput!) {
    Auth {
      loginJwt(input: $input) {
        loginResult {
          jwtTokens {
            accessToken
            refreshToken
          }
        }
      }
      login(input: $loginInput2) {
        accounts {
          name
        }
      }
    }
  }
`;
