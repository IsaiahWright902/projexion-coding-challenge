import { gql } from "@apollo/client";

export const CONTENT_NODE_QUERY = gql`
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
              instructors {
                name
                id
              }
              image {
                url
                name
                id
              }
              versioning {
                draftVersion
                releaseVersion
              }
            }
          }
        }
      }
    }
  }
`;
