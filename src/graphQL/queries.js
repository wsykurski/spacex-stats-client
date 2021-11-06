import gql from "graphql-tag";

export const getRockets = gql`
    query getRockets {
        rockets {
            name
            description
            stages
        }
    }
`
