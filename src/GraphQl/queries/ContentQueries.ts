import { gql } from "@apollo/client";

export const CONTENT_QUERIES = gql`
  query GetContentNodes {
    Admin {
      Tree {
        GetContentNodes {
          edges {
            node {
              description
              attachments {
                kind
                id
                description
                title
              }
              hasBeenPublishedOnce
              id
              shortDescription
              structureDefinition {
                title
              }
            }
          }
        }
      }
    }
  }
`;
