import { gql } from "@apollo/client";

export const LOG_IN_USER_MUTATION = gql`
  mutation Login($input: LoginInput!) {
    Auth {
      login(input: $input) {
        accounts {
          name
          id
          registeredAt
        }
        token
        clientMutationId
        userId
      }
    }
  }
`;
