import { gql } from "@apollo/client";

const PROJECT_QUERY = gql`
    query GetProjects {
      projects {
        project_id
        title
      }
    }
`;

export default PROJECT_QUERY;